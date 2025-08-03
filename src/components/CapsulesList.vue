<template>
  <div class="capsules-list">

    <!-- Capsule List Header -->
    <div class="capsules-list-header">
      <h2>My Time Capsules</h2>
      <div class="capsules-count-container">
        <p>{{ unlockedCapsulesCount + lockedCapsulesCount }} total</p>
        <div class="capsules-count">
          <p><CircleSVG :fill="'#22C55E'" /> unlocked: {{ unlockedCapsulesCount }}</p>
          <p><CircleSVG /> locked: {{ lockedCapsulesCount }}</p>
        </div>
      </div>

      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search capsules..."
        class="search-capsules"
      />
    </div>

    <!-- Capsules available to open -->
    <ul v-if="filteredOpenCapsules.length">
      <li
        v-for="capsule in filteredOpenCapsules"
        :key="capsule._id"
        @click="selectCapsule(capsule)"
        :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
      >
        <div class="capsule-title-container">
          <p>{{ capsule.title }}</p>

          <div class="capsule-title-icons-container">
            <div v-if="capsule.imageUrl">
              <HasImageSVG :width="'18'" :height="'18'" />
            </div>
            <UnlockedSVG :stroke="'#22C55E'" :stroke-width="'1.2'" />
          </div>

        </div>

        <p class="capsule-preview">{{ capsule.message }}</p>

        <div class="capsule-date-container">
          <span>
            <CalendarSVG />
            {{ new Date(capsule.createdAt).toLocaleDateString() }}
          </span>

          <span>
            <TimerSVG />
            {{ new Date(capsule.openAt).toLocaleDateString() }}
          </span>
        </div>

        <span class="capsule-list-status">
          <MailSVG :width="'18px'" :height="'18px'" :fill="'#036929'"/>
          Ready to read
        </span>

      </li>
    </ul>

    <p v-else class="capsules-list-empty">No capsules available to view.</p>

    <!-- Capsules locked -->
    <ul v-if="filteredLockedCapsules.length">
      <li
        v-for="capsule in filteredLockedCapsules"
        :key="capsule._id"
        @click="selectLockedCapsule(capsule)"
        :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
      >
        <div class="capsule-title-container">
          <p>{{ capsule.title }}</p>

          <div class="capsule-title-icons-container">
            <div v-if="capsule.imageUrl">
              <HasImageSVG :width="'18'" :height="'18'" />
            </div>
            <LockedSVG :stroke-width="'1.2'" />
          </div>

        </div>

        <div class="capsule-date-container">
          <span>
            <CalendarSVG />
            {{ new Date(capsule.createdAt).toLocaleDateString() }}
          </span>

          <span>
            <TimerSVG />
            {{ new Date(capsule.openAt).toLocaleDateString() }}
          </span>
        </div>

        <span class="capsule-list-locked-status">
          <TimerSVG :width="'15px'" :height="'15px'" />
          {{ getCountdown(capsule.openAt) }}
        </span>
      </li>
    </ul>

    <p v-else class="capsules-list-empty">No locked capsules.</p>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CircleSVG from '@/assets/icons/CircleSVG.vue'
import CalendarSVG from '@/assets/icons/CalendarSVG.vue'
import TimerSVG from '@/assets/icons/TimerSVG.vue'
import HasImageSVG from '@/assets/icons/HasImageSVG.vue'
import UnlockedSVG from '@/assets/icons/UnlockedSVG.vue'
import LockedSVG from '@/assets/icons/LockedSVG.vue'
import MailSVG from '@/assets/icons/MailSVG.vue'

const props = defineProps({
  openCapsules: Array,
  lockedCapsules: Array,
  selectedCapsule: Object,
  unlockedCapsulesCount: Number,
  lockedCapsulesCount: Number
})

const emit = defineEmits(['select-capsule', 'select-locked-capsule'])

const selectCapsule = (capsule) => {
  emit('select-capsule', capsule)
}

const selectLockedCapsule = (capsule) => {
  emit('select-locked-capsule', capsule)
}

// Search capsules
const searchQuery = ref("")

const filteredOpenCapsules = computed(() =>
  props.openCapsules.filter((capsule) =>
    capsule.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const filteredLockedCapsules = computed(() =>
  props.lockedCapsules.filter((capsule) =>
    capsule.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

// Countdown timer for locked capsules
const getCountdown = (openAt) => {
  const now = new Date()
  const openDate = new Date(openAt)

  const diffMs = openDate - now

  if (diffMs <= 0) return 'Available now'

  const totalMinutes = Math.floor(diffMs / 1000 / 60)
  const days = Math.floor(totalMinutes / 60 / 24)
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60)
  const minutes = totalMinutes % 60

  if (days > 0) return `${days} day${days > 1 ? 's' : ''} left`
  if (hours > 0) return `${hours}h left`
  return `${minutes}m left`
}


</script>

<style scoped>
.capsules-list {
  overflow-y: auto;
  background-color: #FAF9F6;
  border-right: 1px solid #e6e6e6;
}

/* CAPSULES LIST HEADER */
.capsules-list-header {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 15px;
  border-bottom: 1px solid #e6e6e6;
}

.capsules-list-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  opacity: 0.7;
}

.capsules-count-container {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 300;
  color: #000;
  opacity: 0.7;
  padding-top: 10px;
}

.capsules-count {
  display: flex;
  gap: 15px;
}

.search-capsules {
  width: 100%;
  padding: 10px;
  margin: 10px 0 0 0;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  font-size: 1rem;
  background-color: transparent;
}

.search-capsules:focus {
  outline: none;
  /* border: 1px solid #e6e6e6; */
  box-shadow: 0 0 0 1px #ccc;
  background-color: #fff;
}

/* CAPSULES LIST */
ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px;
  list-style-type: none;
}

li {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  border-left: 4px solid #cfcfcf;
}

li:hover {
  background: #f0f0f0;
  box-shadow: 1px 3px 5px #e0e0e0;
}

li.active {
  background: #f0f0f0;
}

li p {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  opacity: 0.7;
}

.capsule-preview {
  font-size: 14px;
  font-weight: 300;
  color: #444;
  line-height: 1.4em;
  max-height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}


.capsule-list-status {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  width: 100%;
  background: #6fe99c58;
  color: #036929;
  padding: 3px;
  border-radius: 6px;
}

.capsule-list-locked-status {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  font-weight: 600;
  width: 100%;
  background: #e4e4e4;
  color: #656565;
  padding: 3px;
  border-radius: 6px;
}

.capsule-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}
.capsule-title-container p {
  text-transform: capitalize;
}

.capsule-title-icons-container {
  display: flex;
  align-items: center;
  gap: 5px;
}

.capsule-title-icons-container div {
  display: flex;
  align-items: center;
}

.capsule-date-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.capsule-date-container span {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.capsules-list-empty {
  padding: 15px;
}

</style>
