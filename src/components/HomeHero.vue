<template>
  <div class="home-hero-container">

    <div class="wave">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="content">

      <div class="home-banner">
        <h1>Send Messages to Your</h1>
        <h1>Future Self</h1>

        <p>Create time capsules with your thoughts, dreams, and memories. Set a future date and rediscover them when the time is right.</p>

        <div class="home-banner-buttons">
          <button>
            <RouterLink to="/capsules">
              Create your first capsule
              <ArrowSVG :width="'20'" :height="'20'" :stroke="'#FFFFFF'" :stroke-width="1.5" />
            </RouterLink>
          </button>
          <button><RouterLink to="/about" class="home-banner-buttons-link">Learn more</RouterLink></button>
        </div>
      </div>

    </div>

    <div class="floating-bottle">
      <img src="@/assets/images/bottle.png" alt="Bottle with message" />
      <div class="bottle-reflection"></div>
    </div>

  </div>
</template>

<script setup>
import ArrowSVG from '@/assets/icons/ArrowSVG.vue'

</script>

<style scoped>

.home-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0 16px;
}

.home-banner h1 {
  font-size: 48px;
  font-weight: 800;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
}

.home-banner h1:nth-child(2) {
  color: var(--color-highlight);
}

.home-banner p {
  font-size: 22px;
  font-weight: 300;
  line-height: 140%;
  color: var(--color-text);
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  letter-spacing: 1.2px;
}

.home-banner-buttons {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}

.home-banner-buttons button {
  background: var(--color-highlight-dark);
  border: none;
  border-radius: 6px;
  padding: 10px 25px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
}

.home-banner-buttons button:hover {
  background: var(--color-highlight);
  transition: all 0.2s ease-in-out;
}

.home-banner-buttons button:nth-child(2) {
  background: transparent;
  border: 1px solid var(--color-text);
}

.home-banner-buttons button:nth-child(2):hover {
  border: 1px solid var(--color-highlight);
  background: var(--color-highlight-light);
  transition: all 0.2s ease-in-out;
}

.home-banner-buttons button a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-bg-light);
}

.home-banner-buttons button:nth-child(2) a {
  color: var(--color-text);
}

.home-banner-buttons button:nth-child(2):hover a {
  color: var(--color-highlight);
  transition: all 0.2s ease-in-out;
}


/* HERO BACKGROUND CONTAINER */
.home-hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.home-hero-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px; /* fade height */
  background: linear-gradient(to bottom, rgba(255, 253, 242, 0) 0%, var(--color-bg-light) 100%);
  pointer-events: none;
}

.home-hero-container .wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3F88C5;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.home-hero-container .wave span {
  content: "";
  position: absolute;
  width: 325vh;
  height: 325vh;
  top: 0;
  left: 50%;
  transform: translate(-50%, -90%);
  background: var(--color-bg);
}

.content {
  position: relative;
  z-index: 1;
  bottom: 5%;
}

.home-hero-container .wave span:nth-child(1) {
  border-radius: 48%;
  background: var(--color-bg);
  animation: animate 15s linear infinite;
}

.home-hero-container .wave span:nth-child(2) {
  border-radius: 40%;
  background: #fbfbfb74;
  animation: animate 25s linear infinite;
}

.home-hero-container .wave span:nth-child(3) {
  border-radius: 42.5%;
  background: #fbfbfb4d;
  animation: animate 30s linear infinite;
}


/* BOTTLE STYLE */
.floating-bottle {
  position: absolute;
  bottom: 12%;
  left: 60%;
  transform: translateX(-50%) rotate(-8deg);
  width: 300px;
  z-index: 2;
  opacity: 0.7;
  animation: floatBottle 6s ease-in-out infinite;
}

/* Bottle shadow */
.floating-bottle::after {
  content: "";
  position: absolute;
  left: 35%;
  bottom: 15px;
  transform: translateX(-50%);
  width: 80%;
  height: 40px;
  background: radial-gradient(ellipse at center, rgba(0, 36, 126, 0.5) 0%, rgba(1, 29, 94, 0) 70%);
  border-radius: 50%;
  z-index: -1;
  filter: blur(2px);
}

.floating-bottle img {
  width: 100%;
  display: block;
}

/* Bottle reflection */
.bottle-reflection {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/bottle.png") no-repeat center;
  background-size: contain;
  transform: scaleY(-1);
  opacity: 0.35;
  filter: blur(2px);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
  animation: waterMove 5s infinite ease-in-out;
}


/* ANIMATIONS */
/* Background animation */
@keyframes animate {
  0% {
    transform: translate(-50%, -78%) scale(1) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -78%) scale(1.05) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -78%) scale(1) rotate(360deg);
  }
}

/* Reflex animation */
@keyframes waterMove {
  0%   { transform: scaleY(-1) translateX(0); }
  50%  { transform: scaleY(-1) translateX(5px); }
  100% { transform: scaleY(-1) translateX(0); }
}

/* Bottle moviments animation */
@keyframes floatBottle {
  0% {
    transform: translateX(-50%) translateY(0) rotate(-8deg);
  }
  25% {
    transform: translateX(-50%) translateY(-12px) rotate(-10deg);
  }
  50% {
    transform: translateX(-50%) translateY(0) rotate(-6deg);
  }
  75% {
    transform: translateX(-50%) translateY(12px) rotate(-4deg);
  }
  100% {
    transform: translateX(-50%) translateY(0) rotate(-8deg);
  }
}


</style>
