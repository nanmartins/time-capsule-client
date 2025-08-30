<template>

  <Loading v-if="capsuleStore.loading" />

  <div class="capsules-grid" v-else>
    <CapsulesList
      :openCapsules="capsuleStore.openCapsules"
      :lockedCapsules="capsuleStore.lockedCapsules"
      :selectedCapsule="capsuleStore.selectedCapsule"
      :unlockedCapsulesCount="capsuleStore.unlockedCapsulesCount"
      :lockedCapsulesCount="capsuleStore.lockedCapsulesCount"
      :countdown="capsuleStore.countdown"
      @select-capsule="capsuleStore.selectCapsule"
      @select-locked-capsule="capsuleStore.selectLockedCapsule"
    />

    <CapsuleDetails
      :selectedCapsule="capsuleStore.selectedCapsule"
      :countdown="capsuleStore.countdown"
      @delete-capsule="capsuleStore.removeCapsule"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useCapsuleStore } from "@/stores/capsuleStore"
import CapsulesList from "@/components/CapsulesList.vue"
import CapsuleDetails from "@/components/CapsuleDetails.vue"
import Loading from "@/components/Loading.vue"

const capsuleStore = useCapsuleStore()

onMounted(() => {
  capsuleStore.loadCapsules()
})
</script>

<style scoped>
.capsules-grid {
  display: grid;
  grid-template-columns: 420px 1fr;
  width: 100%;
  height: calc(100vh - 80px);
  margin-top: 80px;
}
</style>
