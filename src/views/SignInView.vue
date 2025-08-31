<template>
  <div class="sign-in">

    <div class="form-containers">
      <RouterView />
    </div>

    <div class="image-container">
      <img src="@/assets/images/auth-img02.png" alt="Background image">
    </div>

  </div>
</template>


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
  border-left: 1px solid var(--color-lines);
  opacity: 0.75;
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

</style>
