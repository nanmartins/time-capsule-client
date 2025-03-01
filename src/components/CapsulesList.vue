<template>
  <div class="capsules-container">
    <h2>My Capsules</h2>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <h3>📬 Capsules Available:</h3>
    <ul v-if="openCapsules.length">
      <li v-for="capsule in openCapsules" :key="capsule._id">
        <strong>{{ capsule.text }}</strong>
        <br />
        created at: {{ new Date(capsule.createdAt).toLocaleDateString() }}
      </li>
    </ul>
    <p v-else>No capsules available to view.</p>

    <h3>🔒 Locked Capsules:</h3>
    <ul v-if="lockedCapsules.length">
      <li v-for="capsule in lockedCapsules" :key="capsule._id">
        <strong>{{ capsule.text }}</strong>
        <br />
        available at: <em>{{ new Date(capsule.openAt).toLocaleDateString() }}</em>
      </li>
    </ul>
    <p v-else>No locked capsules.</p>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue"
import { fetchOpenCapsules, fetchLockedCapsules } from "@/services"

const openCapsules = ref([])
const lockedCapsules = ref([])
const errorMessage = ref("")

// Get open capsules
const getOpenCapsules = async () => {
  try {
    openCapsules.value = await fetchOpenCapsules()
  } catch (error) {
    errorMessage.value = error.message
  }
}

// Get locked capsules
const getLockedCapsules = async () => {
  try {
    lockedCapsules.value = await fetchLockedCapsules()
  } catch (error) {
    errorMessage.value = error.message
  }
}


onMounted(() => {
  getOpenCapsules()
  getLockedCapsules()
})

</script>


<style scoped>
.capsules-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-top: 20px;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
