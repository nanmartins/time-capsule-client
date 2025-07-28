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
    <h3>📬 Capsules Available:</h3>
    <ul v-if="openCapsules.length">
      <li
        v-for="capsule in openCapsules"
        :key="capsule._id"
        @click="selectCapsule(capsule)"
        :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
      >
        <strong>{{ capsule.title }}</strong><br />
        created at: {{ new Date(capsule.createdAt).toLocaleDateString() }}
      </li>
    </ul>
    <p v-else>No capsules available to view.</p>

    <!-- Capsules locked -->
    <h3>🔒 Locked Capsules:</h3>
    <ul v-if="lockedCapsules.length">
      <li
        v-for="capsule in lockedCapsules"
        :key="capsule._id"
        @click="selectLockedCapsule(capsule)"
        :class="{ active: selectedCapsule && selectedCapsule._id === capsule._id }"
      >
        <strong>{{ capsule.title }}</strong><br />
        available at: <em>{{ new Date(capsule.openAt).toLocaleDateString() }}</em>
      </li>
    </ul>
    <p v-else>No locked capsules.</p>
  </div>
</template>

<script setup>
import CircleSVG from '@/assets/icons/CircleSVG.vue'
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
</script>

<style scoped>
.capsules-list {
  overflow-y: auto;
  background-color: #FAF9F6;
}

/* CAPSULES LIST HEADER */
.capsules-list-header {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 15px;
  border-bottom: 1px solid #dfdfdf;
}

.capsules-list-header h2 {
  font-size: 20px;
  font-weight: bold;
  color: #000;
  opacity: 0.8;
}

.capsules-count-container {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.capsules-count {
  display: flex;
  gap: 15px;
}

.search-capsules {
  width: 100%;
  padding: 10px;
  margin: 10px 0 0 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: transparent;
}

.search-capsules:focus {
  outline: none;
  border: 1px solid #ccc;
  box-shadow: 0 0 0 1px #ccc;
  background-color: #fff;
}

/* CAPSULES LIST */

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

li {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 6px;
}

li:hover {
  background: #e0e0e0;
}

li.active {
  background: #cce5ff;
  font-weight: bold;
}
</style>
