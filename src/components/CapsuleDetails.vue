<template>
  <div class="capsule-details" >

    <div class="capsule-details-container" v-if="selectedCapsule">

      <!-- Locked Capsule Details -->
      <div class="capsule-locked-details" v-if="isLocked">

        <!-- Locked capsules header -->
        <div class="capsule-locked-details-header">

          <div>
            <h2>{{ selectedCapsule.title }}</h2>
            <p><LockedSVG class="locked-header-icon" :width="'15'" :height="'15'" :stroke="'#D81E5B'" :stroke-width="2" /> Locked</p>
          </div>

          <ul>
            <li>
              <CalendarSVG :stroke-width="1.2"/>
              Created: {{ formatDate(selectedCapsule.createdAt) }}
            </li>
            <li>
              <TimerSVG :stroke-width="1.5"/>
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
            <LockedSVG :width="'90'" :height="'90'" :stroke="'#D81E5B'" :stroke-width="2" class="capsule-locked-body-icon"/>

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
            <p><UnlockedSVG class="unlocked-header-icon" :stroke="'#09BC8A'" :strokeWidth="2" /> Unlocked</p>
          </div>

          <ul>
            <li>
              <CalendarSVG :stroke-width="1.2" />
              Created: {{ formatDate(selectedCapsule.createdAt) }}
            </li>
            <li>
              <TimerSVG :stroke-width="1.5" />
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
              <MailSVG :width="'22'" :height="'22'" :fill="'#000000'" :stroke-width="0.5"/>
              Your Message from the Past
            </h3>
            <p>{{ selectedCapsule.message }}</p>
          </div>

          <!-- Days to unlock capsule -->
          <div class="capsule-unlocked-details-countdown">
            <UnlockedSVG class="unlocked-countdown-icon" :width="'30'" :height="'30'" :stroke="'#09BC8A'" :strokeWidth="2" />
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
              <SharingSVG :width="'18'" :height="'18'" :stroke="'#2B2D42'" :stroke-width="2"/>
              Share
            </button>

            <button @click="confirmDelete" class="delete-button">
              <DeleteSVG :width="'20'" :height="'20'" :stroke="'#D81E5B'" :strokeWidth="1.5"/>
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
      <MailSVG :width="'70'" :height="'70'" :stroke="'#2B2D42'" :fill="'#2B2D42'" :stroke-width="0.7" class="capsule-empty-icon" />
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
import SharingSVG from '@/assets/icons/SharingSVG.vue'


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

// Days to unlock
const getLockedDurationRaw = () => {
  if (!props.selectedCapsule) return { value: 0, unit: '' }

  const now = new Date()
  const openDate = new Date(props.selectedCapsule.openAt)
  const diffMs = openDate - now

  if (diffMs <= 0) {
    return { value: 0, unit: 'days' }
  }

  const totalMinutes = Math.floor(diffMs / 1000 / 60)
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)

  if (days >= 1) {
    return { value: days, unit: days === 1 ? 'day' : 'days' }
  }

  return { value: hours, unit: hours === 1 ? 'hour' : 'hours' }
}

// Days to unlock formatted
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
  background: #dbe0e350;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid var(--color-lines);
}

/* Content container */
.capsule-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: auto;
}


/* LOCKED CAPSULES */
.capsule-locked-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

/* Locked header */
.capsule-locked-details-header {
  background: var(--color-bg);
  border: 1px solid var(--color-lines);
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
  color: var(--color-text);
  text-transform: capitalize;
}

.capsule-locked-details-header div p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 12px;
  background: var(--color-warning-light);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-warning);
  letter-spacing: 0px;
  border-radius: 20px;
  border: 1px solid var(--color-warning);
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
  color: var(--color-text);
}


/* Locked body */
.capsule-locked-details-body {
  padding: 24px;
  background: var(--color-bg);
  border: 1px solid var(--color-lines);
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
  background: var(--color-bg-warning);
  border: 1px solid var(--color-warning);
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
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-text);
}

.capsule-locked-body-message p {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text);
  max-width: 450px;
}

.capsule-locked-duration-progress {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  padding: 24px;
  margin: 0 auto;
  background: var(--color-bg);
}

.capsule-locked-duration-progress h3 {
  font-size: 30px;
  font-weight: 700;
  color: var(--color-text);
}

.capsule-locked-duration-progress span {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 10px;
}

/* progress percentage */
.capsule-locked-duration-progress p {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
}

/* progress bar */
.progress-wrapper {
  width: 100%;
  max-width: 400px;
  height: 15px;
  background: var(--color-bg-dark);
  border: 1px solid var(--color-highlight-dark);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar {
  height: 100%;
  background: var(--color-highlight-dark);
  transition: width 0.3s ease-in-out;
  border-radius: 3px;
}


/* UNLOCKED CAPSULES */
.capsule-unlocked-details {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

/* Unlocked header */
.capsule-unlocked-details-header {
  background: var(--color-bg);
  border: 1px solid var(--color-lines);
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
  color: var(--color-text);
  text-transform: capitalize;
}

.capsule-unlocked-details-header div p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 12px;
  background: var(--color-success-light);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-success);
  letter-spacing: 0px;
  border-radius: 20px;
  border: 1px solid var(--color-success);
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
  color: var(--color-text);
}

/* Unklocked capsule body */
.capsule-unlocked-details-body {
  background: var(--color-bg);
  border: 1px solid var(--color-lines);
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
  border: 1px dashed var(--color-lines);
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
  color: var(--color-bg-light);
  text-shadow: 1px 1px var(--color-text);
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
  background: var(--color-bg-light);
}

/* Unlocked capsule message */
.capsule-details-message-container {
  display: flex;
  gap: 15px;
  flex-direction: column;
  background: var(--color-bg);
  border: 1px solid var(--color-lines);
  border-radius: 6px;
  padding: 24px;
}

.capsule-details-message-container h3 {
  display: flex;
  align-items: center;
  gap: 3px;
  color: var(--color-text);
  font-size: 17px;
  font-weight: 500;
}

.capsule-details-message-container p {
  font-size: 16px;
  color: var(--color-text);
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
  background: var(--color-bg-success);
  color: var(--color-text);
  border: 1px solid var(--color-success);
  border-radius: 6px;
  margin-top: 24px;
}

.unlocked-countdown-icon {
  padding: 6px;
  background: var(--color-success-light);
  border-radius: 10%;
  border: 1px solid var(--color-success);
}

.capsule-unlocked-details-countdown-text p:first-child {
  color: var(--color-text);
  font-weight: 600;
}

/* Unlocked capsules buttons container */
.capsule-unlocked-details-footer {
  display: flex;
  gap: 15px;
  margin-top: 48px;
}

.capsule-unlocked-details-footer button {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 15px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
}


.delete-button {
  background: var(--color-bg-warning);
  color: var(--color-warning);
  border: 1px solid var(--color-warning);
}

.download-button {
  background: var(--color-highlight-dark);
  color: #FFFFFF;
  border: 1px solid var(--color-highlight-dark);
}

.share-button {
  background: transparent;
  color: var(--color-highlight-dark);
  border: 1px solid var(--color-highlight-dark);
}



/* NO CAPSULE SELECTED */
.capsule-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  text-align: center;
  height: 100%;
}

.capsule-empty-icon {
  padding: 10px;
  background: var(--color-highlight-light);
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
