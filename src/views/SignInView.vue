<template>
  <div class="sign-in">
    <img src="@/assets/images/login-img01.png" alt="">

    <RouterView />
  </div>
</template>


<script setup>

</script>


<style scoped>

.sign-in {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 84px);
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

img {
  max-width: 700px;
}

</style>
