<template>
  <div class="capsule-details" v-if="selectedCapsule">
    <!-- Locked Capsule Details / Timer -->
    <div v-if="isLocked">
      <h2>{{ selectedCapsule.title }}</h2>
      <h3>🔒 This capsule is locked!</h3>
      <p>It will open in:</p>
      <p class="countdown">{{ countdown }}</p>
    </div>

    <!-- Open Capsule Details -->
    <div v-else>
      <h2>{{ selectedCapsule.title }}</h2>
      <p><strong>Message:</strong> {{ selectedCapsule.message }}</p>
      <p><strong>Created at:</strong> {{ formatDate(selectedCapsule.createdAt) }}</p>

      <div v-if="selectedCapsule.imageUrl">
        <h3>Attached Image:</h3>
        <img :src="selectedCapsule.imageUrl" alt="Capsule Image" class="capsule-image" />
      </div>

      <button @click="confirmDelete" class="delete-button">
        🗑️ Delete Capsule
      </button>
    </div>
  </div>

  <!-- No capsule selected -->
  <div class="capsule-details empty" v-else>
    <MailSVG />
    <h3>Select a Time Capsule</h3>
    <p>Choose a capsule from the list to view its details and content.</p>
  </div>
</template>

<script setup>
import MailSVG from '@/assets/icons/MailSVG.vue'
import { computed } from 'vue'

const props = defineProps({
  selectedCapsule: Object,
  countdown: String,
})

const emit = defineEmits(['delete-capsule'])

const isLocked = computed(() => {
  if (!props.selectedCapsule) return false
  return new Date(props.selectedCapsule.openAt).getTime() > new Date().getTime()
})

const confirmDelete = () => {
  if (confirm('Are you sure you want to delete this capsule?')) {
    emit('delete-capsule', props.selectedCapsule._id)
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}
</script>

<style scoped>
.capsule-details {
  padding: 20px;
  overflow-y: auto;
  background-color: #f1f0ed;
}

.capsule-details.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  text-align: center;
}

.countdown {
  font-size: 1.5rem;
  font-weight: bold;
  color: #d9534f;
}

.capsule-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}

.delete-button {
  background-color: #d9534f;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}

.delete-button:hover {
  background-color: #c9302c;
}
</style>
