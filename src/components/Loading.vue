<template>
  <section>
    <div class="loader">
      <img src="@/assets/images/bottle.png" alt="Bottle" class="bottle" />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  position: relative;
  width: 100px;
  height: 40px;
  zoom: 1.5;
  background:
    radial-gradient(circle 11px at top, #0000 94%, #b0e5f3) 0 20px,
    radial-gradient(circle 11px at top, #0000 94%, #5dc1e4) 0 10px,
    radial-gradient(circle 11px at top, #0000 94%, #008cd9) 0 0;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation: l7 1.3s infinite linear;
  overflow: hidden;
  border-radius: 6px;
}

/* Wave animation */
@keyframes l7 {
  50% {
    background-position: 10px 15px, -10px 12px, 15px 8px;
  }
  100% {
    background-position: 20px 20px, -20px 10px, 20px 0px;
  }
}

/* Bottle */
.bottle {
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 30px;
  transform: translateX(-50%);
  animation: float 3s ease-in-out infinite;
  transform-origin: center center;
}

/* bottle moviments animation */
@keyframes float {
  0%, 100% {
    transform: translateX(-50%) translateY(0) rotate(-10deg);
  }
  50% {
    transform: translateX(-50%) translateY(-6px) rotate(2deg);
  }
}
</style>
