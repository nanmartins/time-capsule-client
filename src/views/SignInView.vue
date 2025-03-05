<template>
  <div class="sign-in">
    <img src="@/assets/images/auth-02.jpg" alt="">

    <RouterView />
  </div>
</template>


<script setup>

</script>


<style scoped>

.sign-in {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh + 70px);
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

img {
  max-width: 580px;
}

</style>
