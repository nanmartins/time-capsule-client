<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_10973)"> <path d="M3 17L9 11L13 15L21 7" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 7H21V11" :stroke="stroke" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_10973"> <rect width="28" height="28" fill="white"></rect> </clipPath> </defs> </g></svg>
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
    default: 1.5
  }
})
</script>
