<template>
  <div class="sign-in">

    <div class="form-containers">
      <RouterView />
    </div>

    <div class="image-container">
      <img src="@/assets/images/auth-img01.png" alt="Background image">

      <RouterLink to="/" class="return-button">
        <ArrowSVG :width="'32'" :height="'32'" :stroke="'#FFFFFF'" :stroke-width="1.5" class="return-button-icon"/>
        Back
      </RouterLink>

      <div class="overlay-text">
        <h2>Message to Tomorrow</h2>
      </div>
    </div>

  </div>
</template>

<script setup>
import ArrowSVG from '@/assets/icons/ArrowSVG.vue';
</script>

<style scoped>

.sign-in {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  height: 100vh;
  overflow-y: hidden;
}

/* FORM SIDE */
.form-containers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--color-bg-light);
}


/* IMAGE SIDE */
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  opacity: 0.7;
}

.overlay-text {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  text-align: center;
  color: var(--color-bg-light);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0px 4px 10px rgba(0,0,0,0.6);
}

.return-button {
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 15px;
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--color-highlight-dark);
  color: var(--color-bg-light);
  padding: 8px 24px 8px 18px;
  border-radius: 6px;
  font-size: 18px;
  letter-spacing: 2px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.return-button:hover {
  background: var(--color-highlight);
  color: #fff;
}

.return-button-icon {
  transform: rotate(180deg);
}
</style>
