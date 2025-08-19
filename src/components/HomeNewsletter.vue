<template>
  <div class="home-newsletter-container">

    <div class="home-newsletter-content">

      <h1>Stay Updated</h1>
      <p>Subscribe to our newsletter for tips on creating meaningful time capsules and updates on new features</p>

      <div class="home-newsletter-form">
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="home-newsletter-input"
        />
        <button class="home-newsletter-button" @click="subscribe">
          Subscribe
        </button>
      </div>

      <span>We respect your privacy. Unsubscribe at any time.</span>

    </div>

  </div>

</template>

<script setup>
import { ref } from "vue"

const email = ref("")

const subscribe = () => {
  if (!email.value) {
    alert("Please enter your email")
    return
  }
  console.log("Subscribed with:", email.value)
  email.value = ""
}
</script>

<style scoped>
.home-newsletter-container {
  text-align: center;
  padding: 64px 24px;
  background: var(--color-card-bg-accent);
  width: 100%;
  margin: 0 auto;
}

.home-newsletter-content {
  display: flex;
  flex-direction: column;
  max-width: 850px;
  margin: 0 auto;
}

.home-newsletter-container h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.home-newsletter-container p {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  width: 100%;
  letter-spacing: 1.1px;
}

.home-newsletter-form {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
  margin: 28px 0 12px 0;
  flex-wrap: wrap;
}

.home-newsletter-input {
  flex: 1;
  width: 100%;
  max-width: 420px;
  margin: 0;
  padding: 15px 18px;
  background-color: var(--color-bg-light);
  color: #000000a9;
  border-radius: 6px;
  font-size: 16px;
  border: 1px solid var(--color-lines);
  outline: none;
}

.home-newsletter-input:focus {
  border: 1px solid var(--color-highlight);
}

.home-newsletter-input::placeholder {
  color: var(--color-text);
  opacity: 0.6;
}

.home-newsletter-button {
  height: 100%;
  padding: 15px 18px;
  background: var(--color-highlight);
  color: var(--color-bg-light);
  border: 1px solid var(--color-highlight);
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.home-newsletter-button:hover {
  background: var(--color-highlight-light);
  color: var(--color-highlight);
}

.home-newsletter-container span {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  width: 100%;
  letter-spacing: 1px;
}

</style>
