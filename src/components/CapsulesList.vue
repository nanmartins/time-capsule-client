<template>
  <div class="capsules-list">
    <h2>My Capsules</h2>

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
const props = defineProps({
  openCapsules: Array,
  lockedCapsules: Array,
  selectedCapsule: Object,
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
  /* background: #ffffff; */
  padding: 20px;
}

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
