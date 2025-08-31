<template>
  <div class="about-banner">

    <span class="about-hero-tag">About Timenest</span>
    <h1>Connecting Your Present Self</h1>
    <h1>With Your Future</h1>

    <p>Timenest is more than just a digital storage service. It's a bridge through time that allows you to send meaningful messages, memories, and reflections to your future self, creating a unique journey of personal growth and self-discovery.</p>

  </div>
</template>

<style scoped>
.about-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 50vh;
  padding: 0 16px;
  margin-top: 100px;
}

.about-banner span {
  padding: 5px 12px;
  border: 1px solid var(--color-highlight);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-highlight);
  background: var(--color-highlight-light);
  margin-bottom: 30px;
}

.about-banner h1 {
  font-size: 48px;
  font-weight: 800;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
}

.about-banner h1:nth-child(2) {
  color: var(--color-highlight);
}

.about-banner p {
  font-size: 18px;
  font-weight: 300;
  line-height: 140%;
  color: var(--color-text);
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  letter-spacing: 1.2px;
}
</style>
