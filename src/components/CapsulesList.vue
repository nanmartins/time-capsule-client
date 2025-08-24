<template>
  <div class="capsules-list">

    <!-- Capsule List Header -->
    <div class="capsules-list-header">

      <div class="capsules-list-header-title-create">
        <h2>My Messages</h2>
        <NewCapsule />
      </div>

      <div class="capsules-count-container">
        <p>{{ unlockedCapsulesCount + lockedCapsulesCount }} total</p>
        <div class="capsules-count">
          <p><CircleSVG :fill="'#09BC8A'" /> unlocked: {{ unlockedCapsulesCount }}</p>
          <p><CircleSVG :fill="'#D81E5B'" /> locked: {{ lockedCapsulesCount }}</p>
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
        class="capsule-unlocked-list"
        :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
      >
        <div class="capsule-title-container">
          <p>{{ capsule.title }}</p>

          <div class="capsule-title-icons-container">
            <div v-if="capsule.imageUrl">
              <HasImageSVG :width="'18'" :height="'18'" :stroke-width="1" />
            </div>
            <UnlockedSVG :stroke="'#09BC8A'" :stroke-width="1.5" />
          </div>

        </div>

        <p class="capsule-preview">{{ capsule.message }}</p>

        <div class="capsule-date-container">
          <span>
            <CalendarSVG :stroke-width="1.5"/>
            {{ new Date(capsule.createdAt).toLocaleDateString() }}
          </span>

          <span>
            <TimerSVG :stroke-width="1.5"/>
            {{ new Date(capsule.openAt).toLocaleDateString() }}
          </span>
        </div>

        <span class="capsule-list-status">
          <MailSVG :width="'18px'" :height="'18px'" :fill="'#FFFFFF'" :stroke="'#FFFFFF'" :stroke-width="0.5" />
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
        class="capsule-locked-list"
        :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
      >
        <div class="capsule-title-container">
          <p>{{ capsule.title }}</p>

          <div class="capsule-title-icons-container">
            <div v-if="capsule.imageUrl">
              <HasImageSVG :width="'18'" :height="'18'" />
            </div>
            <LockedSVG :stroke-width="1.5" :stroke="'#D81E5B'" />
          </div>

        </div>

        <div class="capsule-date-container">
          <span>
            <CalendarSVG :stroke-width="1.5" />
            {{ new Date(capsule.createdAt).toLocaleDateString() }}
          </span>

          <span>
            <TimerSVG :stroke-width="1.5" />
            {{ new Date(capsule.openAt).toLocaleDateString() }}
          </span>
        </div>

        <span class="capsule-list-locked-status">
          <TimerSVG :width="'15px'" :height="'15px'" :stroke="'#D81E5B'" :stroke-width="2" />
          {{ getCountdown(capsule.openAt) }}
        </span>
      </li>
    </ul>

    <p v-else class="capsules-list-empty">No locked capsules.</p>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NewCapsule from './NewCapsule.vue'
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
  background: var(--color-bg);
  border-right: 1px solid var(--color-lines);
  border-top: 1px solid var(--color-lines);
}

/* CAPSULES LIST HEADER */
.capsules-list-header {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 15px;
  border-bottom: 1px solid var(--color-lines);
}

.capsules-list-header-title-create {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.capsules-list-header-title-create h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
}

.capsules-count-container {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 300;
  color: var(--color-text);
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
  border: 1px solid var(--color-lines);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--color-bg-light);
}

.search-capsules:focus {
  outline: none;
  border: 1px solid var(--color-highlight);
}

/* CAPSULES LIST */
ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 12px;
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
  border: 1px solid var(--color-lines);
  border-left: 4px solid var(--color-success);
}

.capsule-locked-list {
  border-left: 4px solid var(--color-warning);
}

li:hover {
  background: var(--color-bg-dark);
  box-shadow: 1px 3px 5px #e0e0e0;
}

.capsule-locked-list:hover {
  background: var(--color-bg-warning)
}

li.active {
  background: var(--color-card-bg-accent);
  border: 1px solid var(--color-highlight);
}
.capsule-locked-list.active {
  background: var(--color-bg-warning);
  border: 1px solid var(--color-warning);
}

li p {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}

.capsule-preview {
  font-size: 14px;
  font-weight: 300;
  color: var(--color-text);
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
  background: var(--color-highlight-dark);
  color: var(--color-bg-light);
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
  background: var(--color-warning-light);
  color: var(--color-warning);
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
