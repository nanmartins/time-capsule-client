<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path> </g></svg>
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
    default: 1.2
  }
})
</script>
