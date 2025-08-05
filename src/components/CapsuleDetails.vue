<template>
  <div class="capsule-details" >

    <div class="capsule-details-container" v-if="selectedCapsule">

      <!-- Locked Capsule Details -->
      <div class="capsule-locked-details" v-if="isLocked">

        <!-- Locked capsules header -->
        <div class="capsule-locked-details-header">

          <div>
            <h2>{{ selectedCapsule.title }}</h2>
            <p><LockedSVG class="locked-header-icon" :width="'15'" :height="'15'" :stroke="'#000000b7'" :stroke-width="2" /> Locked</p>
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


        <!-- Capsule locked body -->
        <div class="capsule-locked-details-body">

          <div class="capsule-locked-body-content">

            <LockedSVG :width="'90'" :height="'90'" :stroke="'#9CA3AF'" :stroke-width="2" class="capsule-locked-body-icon"/>

            <div class="capsule-locked-body-message">
              <h2>This capsule is locked</h2>
              <p>Your message will be revealed when the unlock date arrives. The anticipation makes it even more special!</p>
            </div>

            <div class="capsule-locked-duration-progress">

              <h3 class="locked-duration-number">{{ lockedDuration.value }}</h3>
              <span class="locked-duration-unit">{{ lockedDuration.unit }} remaining</span>

              <div class="progress-wrapper">
                <div class="progress-bar" :style="{ width: `${progressPercent}%` }"></div>
              </div>

              <p>{{ Math.floor(progressPercent) }}% unlocked</p>

            </div>

          </div>

        </div>

      </div>


      <!-- Unlocked Capsule Details -->
      <div class="capsule-unlocked-details" v-else>

        <div class="capsule-unlocked-details-header">

          <!-- Unlocked capsules header -->
          <div>
            <h2>{{ selectedCapsule.title }}</h2>
            <p><UnlockedSVG class="unlocked-header-icon" :stroke="'#036929'" :strokeWidth="2" /> Unlocked</p>
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

        <!-- Unlocked capsule body -->
        <div class="capsule-unlocked-details-body">
          <div class="capsule-details-image-container" v-if="selectedCapsule.imageUrl">
            <img :src="selectedCapsule.imageUrl" alt="Capsule Image" @click="showModal = true"/>
            <div class="image-overlay">Click to view full size</div>
          </div>

          <div class="capsule-details-message-container">
            <h3>
              <MailSVG :width="'22'" :height="'22'" :fill="'#036929'"/>
              Your Message from the Past
            </h3>
            <p>{{ selectedCapsule.message }}</p>
          </div>

          <!-- Days to unlock capsule -->
          <div class="capsule-unlocked-details-countdown">
            <UnlockedSVG class="unlocked-countdown-icon" :width="'30'" :height="'30'" :stroke="'#036929'" :strokeWidth="2" />
            <div class="capsule-unlocked-details-countdown-text">
              <p>Unlocked on {{ formatDate(selectedCapsule.openAt) }}</p>
              <p>You waited {{ getLockedDuration() }} to unlock this capsule</p>
            </div>
          </div>

          <!-- Delete capsule button -->
           <div class="capsule-unlocked-details-footer">

            <button class="download-button">
              <DownloadSVG :width="'18'" :height="'18'" :stroke="'#FFFFFF'" :stroke-width="2"/>
              Download
            </button>

            <button class="share-button">
              <ShareSVG :width="'18'" :height="'18'" :stroke="'#000000'" :stroke-width="2"/>
              Share
            </button>

            <button @click="confirmDelete" class="delete-button">
              <DeleteSVG :width="'20'" :height="'20'" :stroke="'#B91C1B'" :strokeWidth="1.5"/>
              Delete
            </button>
           </div>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            <img :src="selectedCapsule.imageUrl" alt="Full Capsule Image" />
            <button class="modal-close" @click="closeModal">✕</button>
          </div>
        </div>

      </div>

    </div>

    <!-- No capsule selected -->
    <div class="capsule-empty" v-else>
      <MailSVG :width="'70'" :height="'70'" class="capsule-empty-icon" />
      <h3>Select a Time Capsule</h3>
      <p>Choose a capsule from the list to view its details and content</p>
    </div>

  </div>

</template>


<script setup>
import { computed, ref } from 'vue'
import MailSVG from '@/assets/icons/MailSVG.vue'
import UnlockedSVG from '@/assets/icons/UnlockedSVG.vue'
import LockedSVG from '@/assets/icons/LockedSVG.vue'
import CalendarSVG from '@/assets/icons/CalendarSVG.vue'
import TimerSVG from '@/assets/icons/TimerSVG.vue'
import HasImageSVG from '@/assets/icons/HasImageSVG.vue'
import DeleteSVG from '@/assets/icons/DeleteSVG.vue'
import DownloadSVG from '@/assets/icons/DownloadSVG.vue'
import ShareSVG from '@/assets/icons/ShareSVG.vue'


const props = defineProps({
  selectedCapsule: Object,
  countdown: String,
})

const emit = defineEmits(['delete-capsule'])
const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

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

// Days the capsule has been locked
const getLockedDurationRaw = () => {
  if (!props.selectedCapsule) return { value: 0, unit: '' }

  const created = new Date(props.selectedCapsule.createdAt)
  const opened = new Date(props.selectedCapsule.openAt)

  const diffMs = opened - created
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60))
  const totalDays = Math.floor(totalHours / 24)

  if (totalDays >= 1) {
    return { value: totalDays, unit: totalDays === 1 ? 'day' : 'days' }
  }

  // less than a day
  return { value: totalHours, unit: totalHours === 1 ? 'hour' : 'hours' }
}

// Days the capsule has been locked formatted
const getLockedDuration = () => {
  const { value, unit } = getLockedDurationRaw()
  return `${value} ${unit}`
}

const lockedDuration = computed(() => getLockedDurationRaw())

// Progress bar
const progressPercent = computed(() => {
  const now = new Date().getTime()
  const created = new Date(props.selectedCapsule.createdAt).getTime()
  const open = new Date(props.selectedCapsule.openAt).getTime()

  if (now >= open) return 100
  if (now <= created) return 0

  const progress = ((now - created) / (open - created)) * 100
  return Math.min(100, Math.max(0, progress))
})


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
  width: 100%;
  max-width: 800px;
}

.capsule-unlocked-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.capsule-locked-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

/* Locked header */
.capsule-locked-details-header {
  background: #FAF9F6;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 24px 24px 18px 24px;
}

.capsule-locked-details-header div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.capsule-locked-details-header div h2 {
  font-size: 26px;
  font-weight: 600;
  text-transform: capitalize;
  opacity: 0.7;
}

.capsule-locked-details-header div p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 12px;
  background: #ececec;
  font-size: 15px;
  font-weight: 500;
  color: #000000b7;
  letter-spacing: 0px;
  border-radius: 20px;
  border: 1px solid #b3b3b3;
  zoom: 0.8;
}

.locked-header-icon {
  margin-bottom: 2px;
}

.capsule-locked-details-header ul {
  display: flex;
  align-content: center;
  gap: 25px;
  list-style: none;
  padding-top: 8px;
}

.capsule-locked-details-header ul li {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
  color: #666;
}


/* Locked body */
.capsule-locked-details-body {
  padding: 24px;
  background: #FAF9F6;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
}

.capsule-locked-body-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
  padding: 48px 0;
}

.capsule-locked-body-icon {
  padding: 12px 18px;
  background: #F3F4F6;
  border: 1px solid #e6e6e6;
  border-radius: 20%;
  align-self: center;
}

.capsule-locked-body-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.capsule-locked-body-message h2 {
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  opacity: 0.9;
}

.capsule-locked-body-message p {
  font-size: 15px;
  font-weight: 500;
  opacity: 0.6;
  max-width: 450px;
}

.capsule-locked-duration-progress {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  /* gap: 5px; */
  padding: 24px;
  margin: 0 auto;
  background: #F3F4F6;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
}

.capsule-locked-duration-progress h3 {
  font-size: 30px;
  font-weight: 700;
  opacity: 0.7;
  margin-bottom: 6px;
}

.capsule-locked-duration-progress span {
  font-size: 13px;
  font-weight: 500;
  opacity: 0.7;
  margin-bottom: 8px;
}

.capsule-locked-duration-progress p {
  font-size: 13px;
  font-weight: 500;
  opacity: 0.7;
}

/* progress bar */
.progress-wrapper {
  width: 100%;
  max-width: 400px;
  height: 15px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar {
  height: 100%;
  background-color: #858585;
  transition: width 0.3s ease-in-out;
  border-radius: 50%;
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

.unlocked-header-icon {
  margin-bottom: 2px;
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

/* Unklocked capsule body */
.capsule-unlocked-details-body {
  background: #FAF9F6;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 24px 24px 18px 24px;
}


/* Unlocked capsule image container */
.capsule-details-image-container {
  position: relative;
  max-height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #dddddd;
  border-radius: 6px;
  margin-bottom: 24px;
}

.capsule-details-image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
}

/* Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.6);
  color: white;
  text-shadow: 1px 1px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.7px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: 6px;
}

/* Show overlay on hover */
.capsule-details-image-container:hover .image-overlay {
  border: none;
  opacity: 1;
}

/* Image modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(10, 10, 10, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal-content img {
  max-width: 100%;
  max-height: 100vh;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}

/* Close button */
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  font-size: 18px;
  padding: 6px 10px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background 0.2s;
}

.modal-close:hover {
  background: white;
}

/* Unlocked capsule message */
.capsule-details-message-container {
  display: flex;
  gap: 15px;
  flex-direction: column;
  background: #FAF9F6;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 24px;
}

.capsule-details-message-container h3 {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 17px;
  font-weight: 500;
}

.capsule-details-message-container p {
  font-size: 16px;
  color: #000000;
  opacity: 0.7;
}

/* Unlocked capsules days counts */
.capsule-unlocked-details-countdown {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 18px 24px;
  font-size: 14px;
  letter-spacing: 0px;
  background: #6fe99c58;
  color: #036929;
  border: 1px solid #22C55E;
  border-radius: 6px;
  margin-top: 24px;
}

.unlocked-countdown-icon {
  padding: 6px;
  background: #22c55e49;
  border-radius: 10%;
  border: 1px solid #22C55E;
}

.capsule-unlocked-details-countdown-text p:first-child {
  color: #000000;
  font-weight: 600;
  opacity: 0.7;
}

/* Unlocked capsules buttons container */
.capsule-unlocked-details-footer {
  display: flex;
  gap: 15px;
  /* justify-content: end; */
  margin-top: 48px;
}

.capsule-unlocked-details-footer button {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 15px;
  font-family: 'Avenir Next', sans-serif;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
}


.delete-button {
  background: #fda5a528;
  color: #B91C1B;
  border: 1px solid #FDA5A5;
}

.download-button {
  background: #22C55E;
  color: #FFFFFF;
  border: 1px solid #22C55E;
}

.share-button {
  background: transparent;
  color: #000000;
  opacity: 0.7;
  border: 1px solid #cecece;
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

</style>
