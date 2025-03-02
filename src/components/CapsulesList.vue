<template>
  <div class="capsules-grid">
    <!-- Lista de mensagens -->
    <div class="capsules-list">
      <h2>My Capsules</h2>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <h3>📬 Capsules Available:</h3>
      <ul v-if="openCapsules.length">
        <li
          v-for="capsule in openCapsules"
          :key="capsule._id"
          @click="selectCapsule(capsule)"
          :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
        >
          <strong>{{ capsule.title }}</strong>
          <br />
          created at: {{ new Date(capsule.createdAt).toLocaleDateString() }}
        </li>
      </ul>
      <p v-else>No capsules available to view.</p>

      <h3>🔒 Locked Capsules:</h3>
      <ul v-if="lockedCapsules.length">
        <li
          v-for="capsule in lockedCapsules"
          :key="capsule._id"
          @click="selectLockedCapsule(capsule)"
          :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
        >
          <strong>{{ capsule.title }}</strong>
          <br />
          available at: <em>{{ new Date(capsule.openAt).toLocaleDateString() }}</em>
        </li>
      </ul>
      <p v-else>No locked capsules.</p>
    </div>

    <!-- Detalhes da Mensagem ou Timer -->
    <div class="capsule-details" v-if="selectedCapsule">
      <h2>Capsule Details</h2>

      <!-- Exibir Timer se a cápsula ainda estiver bloqueada -->
      <div v-if="isLocked">
        <h2>{{ selectedCapsule.title }}</h2>
        <h3>🔒 This capsule is locked!</h3>
        <p>It will open in:</p>
        <p class="countdown">{{ countdown }}</p>
      </div>

      <!-- Exibir os detalhes se a cápsula estiver aberta -->
      <div v-else>
        <h2>{{ selectedCapsule.title }}</h2>
        <p><strong>Message:</strong> {{ selectedCapsule.message }}</p>
        <p><strong>Created at:</strong> {{ new Date(selectedCapsule.createdAt).toLocaleDateString() }}</p>

        <div v-if="selectedCapsule.imageUrl">
          <h3>Attached Image:</h3>
          <img :src="selectedCapsule.imageUrl" alt="Capsule Image" class="capsule-image" />
        </div>
      </div>
    </div>

    <!-- Caso nenhuma cápsula esteja selecionada -->
    <div class="capsule-details empty" v-else>
      <p>Select a capsule to view details.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchOpenCapsules, fetchLockedCapsules, fetchCapsuleDetails } from "@/services";

const openCapsules = ref([]);
const lockedCapsules = ref([]);
const errorMessage = ref("");
const selectedCapsule = ref(null);
const countdown = ref("");
let countdownInterval = null;

// Buscar cápsulas abertas
const getOpenCapsules = async () => {
  try {
    openCapsules.value = await fetchOpenCapsules();
  } catch (error) {
    errorMessage.value = error.message;
  }
};

// Buscar cápsulas bloqueadas
const getLockedCapsules = async () => {
  try {
    lockedCapsules.value = await fetchLockedCapsules();
  } catch (error) {
    errorMessage.value = error.message;
  }
};

// Buscar detalhes da cápsula aberta
const selectCapsule = async (capsule) => {
  clearInterval(countdownInterval); // Para qualquer contador em execução
  try {
    const details = await fetchCapsuleDetails(capsule._id);
    selectedCapsule.value = details;
  } catch (error) {
    errorMessage.value = "Failed to load capsule details.";
  }
};

// Configurar o Timer para uma cápsula bloqueada
const selectLockedCapsule = (capsule) => {
  clearInterval(countdownInterval); // Para qualquer contador em execução
  selectedCapsule.value = capsule;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const unlockTime = new Date(capsule.openAt).getTime();
    const timeLeft = unlockTime - now;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      selectCapsule(capsule); // Atualiza para exibir os detalhes quando atingir o tempo
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  updateCountdown(); // Atualiza imediatamente
  countdownInterval = setInterval(updateCountdown, 1000); // Atualiza a cada segundo
};

// Computed para verificar se a cápsula está bloqueada
const isLocked = computed(() => {
  if (!selectedCapsule.value) return false;
  return new Date(selectedCapsule.value.openAt).getTime() > new Date().getTime();
});

onMounted(() => {
  getOpenCapsules();
  getLockedCapsules();
});
</script>

<style scoped>
/* Layout principal */
.capsules-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: calc(100vh - 84px);
}

/* Lista de cápsulas */
.capsules-list {
  overflow-y: auto;
  background: #f8f8f8;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.3s;
}

li:hover {
  background: #e0e0e0;
}

li.active {
  background: #cce5ff;
  font-weight: bold;
}

/* Seção de detalhes */
.capsule-details {
  padding: 20px;
  overflow-y: auto;
}

.capsule-details.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  color: #666;
}

/* Timer */
.countdown {
  font-size: 1.5rem;
  font-weight: bold;
  color: #d9534f;
}

/* Imagem da cápsula */
.capsule-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}
</style>
