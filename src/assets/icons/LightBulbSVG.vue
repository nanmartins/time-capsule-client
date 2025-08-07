<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <line x1="9" y1="18" x2="15" y2="18"></line> <line x1="10" y1="22" x2="14" y2="22"></line> <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"></path> </g></svg>
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
