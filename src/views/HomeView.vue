<template>
  <div class="home">
    <h1>What Would You Say to <span>Future You?</span></h1>
    <img src="@/assets/images/home-banner-02.png" alt="">
    <h1 class="home-title-bottom">Send a note <span>through time.</span></h1>
  </div>
</template>

<script setup>

</script>

<style scoped>

.home {
  min-height: calc(100vh + 80px);
  /* display: grid;
  place-content: center;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 20px auto 0 auto;
}

img {
  width: 75%;
  size: cover;
  opacity: 0.8;
}

h1 {
  text-align: center;
  font-size: 52px;
  line-height: 0%;
  text-transform: uppercase;
  font-family: "Sigmar", sans-serif;
  font-weight: 900;
  color: #333;
}

.home-title-bottom {
  font-size: 70px;
}

span {
  text-decoration: underline;
}
</style>
