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
  background-color: #17A34A;
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
  color: #FFFFFF;
  margin-bottom: 16px;
}

.home-newsletter-container p {
  font-size: 15px;
  font-weight: 500;
  color: #FFFFFF;
  opacity: 0.9;
  width: 100%;
  letter-spacing: 1.1px;
}

.home-newsletter-form {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
  margin: 28px 0 16px 0;
  flex-wrap: wrap;
}

.home-newsletter-input {
  flex: 1;
  width: 100%;
  max-width: 420px;
  margin: 0;
  padding: 15px 18px;
  background-color: #EFFDF4;
  color: #17a34a;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  outline: none;
}

.home-newsletter-input::placeholder {
  color: #17a34a;
}

.home-newsletter-button {
  height: 100%;
  padding: 15px 18px;
  background-color: #EFFDF4;
  color: #17a34a;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.home-newsletter-button:hover {
  background-color: #12873d;
  color: #EFFDF4;
}

.home-newsletter-container span {
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  opacity: 0.8;
  width: 100%;
  letter-spacing: 1px;
}

</style>
