<!-- <template>
  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" :stroke="stroke" :stroke-width="strokeWidth"></circle> <circle cx="17" cy="18" r="4" :stroke="stroke" :stroke-width="strokeWidth"></circle> <path d="M15.6665 18L16.5 19L18.3332 17.1111" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 20.8344C13.3663 20.9421 12.695 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C13.7135 13 15.2832 13.3518 16.5 13.9359" :stroke="stroke" :stroke-width="strokeWidth"></path> </g></svg>
</template> -->

<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</template>
<script setup>

defineProps({
  width: {
    type: String,
    default: '16'
  },
  height: {
    type: String,
    default: '16'
  },
  stroke: {
    type: String,
    default: '#000000'
  },
  strokeWidth: {
    type: Number,
    default: 1
  }
})
</script>
