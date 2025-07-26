<template>
  <div class="capsules-grid">
    <!-- Capsules list -->
    <CapsulesList
      :openCapsules="openCapsules"
      :lockedCapsules="lockedCapsules"
      :selectedCapsule="selectedCapsule"
      @select-capsule="handleSelectCapsule"
      @select-locked-capsule="handleSelectLockedCapsule"
    />

    <!-- Selected capsule details -->
    <CapsuleDetails
      :selectedCapsule="selectedCapsule"
      :countdown="countdown"
      @delete-capsule="handleDelete"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CapsulesList from '@/components/CapsulesList.vue'
import CapsuleDetails from '@/components/CapsuleDetails.vue'
import {
  fetchOpenCapsules,
  fetchLockedCapsules,
  fetchCapsuleDetails,
  deleteCapsule,
} from '@/services'

const openCapsules = ref([])
const lockedCapsules = ref([])
const selectedCapsule = ref(null)
const countdown = ref('')
let countdownInterval = null

// Search capsules ready to open
const getOpenCapsules = async () => {
  try {
    openCapsules.value = await fetchOpenCapsules()
  } catch (err) {
    console.error('Error fetching open capsules:', err.message)
  }
}

// Search capsules locked
const getLockedCapsules = async () => {
  try {
    lockedCapsules.value = await fetchLockedCapsules()
  } catch (err) {
    console.error('Error fetching locked capsules:', err.message)
  }
}

// Select capsule to view details
const handleSelectCapsule = async (capsule) => {
  clearInterval(countdownInterval)
  try {
    const details = await fetchCapsuleDetails(capsule._id)
    selectedCapsule.value = details
    countdown.value = ''
  } catch (err) {
    console.error('Failed to load capsule details')
  }
}

// Select locked capsule to view countdown
const handleSelectLockedCapsule = (capsule) => {
  clearInterval(countdownInterval)
  selectedCapsule.value = capsule

  const updateCountdown = () => {
    const now = Date.now()
    const unlockTime = new Date(capsule.openAt).getTime()
    const timeLeft = unlockTime - now

    if (timeLeft <= 0) {
      clearInterval(countdownInterval)
      handleSelectCapsule(capsule)
      return
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    // const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    // countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`
    countdown.value = `${days}d ${hours}h ${minutes}m`

  }

  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
}

// Delete capsule
const handleDelete = async (capsuleId) => {
  try {
    await deleteCapsule(capsuleId)
    await getOpenCapsules()
    await getLockedCapsules()
    selectedCapsule.value = null
    countdown.value = ''
    alert('Capsule deleted successfully!')
  } catch (error) {
    alert('Error deleting capsule: ' + error.message)
  }
}

// Get open and locked capsules
onMounted(() => {
  getOpenCapsules()
  getLockedCapsules()
})
</script>

<style scoped>
.capsules-grid {
  display: grid;
  grid-template-columns: 450px 1fr;
  width: 100%;
  height: calc(100vh - 95px);
  margin-top: 95px;
}
</style>
