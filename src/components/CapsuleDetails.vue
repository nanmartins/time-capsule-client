<template>
  <div class="capsule-details" >

    <div class="capsule-details-container" v-if="selectedCapsule">

      <!-- Locked Capsule Details / Timer -->
      <div v-if="isLocked">
        <h2>{{ selectedCapsule.title }}</h2>
        <h3>🔒 This capsule is locked!</h3>
        <p>It will open in:</p>
        <p class="countdown">{{ countdown }}</p>
      </div>


      <!-- Open Capsule Details -->
      <div class="capsule-unlocked-details" v-else>

        <div class="capsule-unlocked-details-header">
          <div>
            <h2>{{ selectedCapsule.title }}</h2>
            <p><UnlockedSVG :stroke="'#036929'" :strokeWidth="2"/> Unlocked</p>
          </div>

          <ul>
            <li>
              <CalendarSVG />
              Created: {{ formatDate(selectedCapsule.createdAt) }}
            </li>
            <li>
              <TimerSVG />
              Unlocked: {{ formatDate(selectedCapsule.openAt) }}
            </li>
            <li v-if="selectedCapsule.imageUrl">
              <HasImageSVG style="margin-bottom: 2px;"/>
              Has attachement
            </li>
          </ul>

        </div>

        <div v-if="selectedCapsule.imageUrl">
          <img :src="selectedCapsule.imageUrl" alt="Capsule Image" class="capsule-image" />
        </div>

        <p><strong>Message:</strong> {{ selectedCapsule.message }}</p>


        <button @click="confirmDelete" class="delete-button">
          🗑️ Delete Capsule
        </button>
      </div>


    </div>

    <!-- No capsule selected -->
    <div class="capsule-empty" v-else>
      <MailSVG :width="70" :height="70" class="capsule-empty-icon" />
      <h3>Select a Time Capsule</h3>
      <p>Choose a capsule from the list to view its details and content</p>
    </div>

  </div>

</template>


<script setup>
import MailSVG from '@/assets/icons/MailSVG.vue'
import { computed } from 'vue'
import UnlockedSVG from '@/assets/icons/UnlockedSVG.vue'
import CalendarSVG from '@/assets/icons/CalendarSVG.vue'
import TimerSVG from '@/assets/icons/TimerSVG.vue'
import HasImageSVG from '@/assets/icons/HasImageSVG.vue'

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
console.log(props.selectedCapsule)

</script>

<style scoped>
/* Main container */
.capsule-details {
  padding: 24px 0;
  overflow-y: auto;
  background-color: #f1f0ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

/* Content container */
.capsule-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
}

.capsule-unlocked-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Unlocked header */
.capsule-unlocked-details-header {
  background: #FAF9F6;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 24px 24px 18px 24px;
}

.capsule-unlocked-details-header div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.capsule-unlocked-details-header div h2 {
  font-size: 26px;
  font-weight: 600;
  text-transform: capitalize;
  opacity: 0.7;
}

.capsule-unlocked-details-header div p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 12px;
  background: #6fe99c58;
  font-size: 15px;
  font-weight: 500;
  color: #036929;
  letter-spacing: 0px;
  border-radius: 20px;
  border: 1px solid #22C55E;
  zoom: 0.8;
}

.capsule-unlocked-details-header ul {
  display: flex;
  align-content: center;
  gap: 25px;
  list-style: none;
  padding-top: 8px;
}

.capsule-unlocked-details-header ul li {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
  color: #666;
}

/* No capsule selected */
.capsule-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  text-align: center;
  height: 100%;
}

.capsule-empty-icon {
  padding: 10px;
  background: #d8d8d8;
  border-radius: 100%;
  margin-bottom: 15px;
}

.capsule-empty h3 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
}

.capsule-empty p {
  font-size: 16px;
  max-width: 400px;
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
