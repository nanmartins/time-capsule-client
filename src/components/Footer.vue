<template>
  <footer class="footer-container">

    <div class="footer-logo-container">
      <img src="@/assets/images/Timenest-logo.png" alt="Logo">
      <h1>Timenest</h1>
    </div>

    <p>Your bridge to the future, one message at a time</p>

    <span>Connect with us</span>

    <div class="footer-socials-container">
      <LinkedinSVG :width="'28'" :height="'28'" />
      <FacebookSVG :width="'28'" :height="'28'" />
      <InstagramSVG :width="'34'" :height="'34'" />
      <GithubSVG :width="'28'" :height="'30'" />
    </div>

    <div>
      <p>Terms of Use</p>
      <p>Privacy Policy</p>
    </div>

    <p>&copy; {{ new Date().getFullYear() }} Timenest. Made with ❤️ for your future self.</p>
  </footer>
</template>


<script setup>
import LinkedinSVG from '@/assets/icons/LinkedinSVG.vue'
import InstagramSVG from '@/assets/icons/InstagramSVG.vue'
import FacebookSVG from '@/assets/icons/FacebookSVG.vue'
import GithubSVG from '@/assets/icons/GithubSVG.vue'
</script>


<style scoped>

.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 24px;
  background-color: #FAF9F6;
  border-top: 1px solid #e6e6e6;
}

.footer-logo-container {
  display: flex;
  gap: 10px;
  align-items: center;
  opacity: 0.7;
}

.footer-logo-container img {
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
}

.footer-logo-container h1 {
  font-size: 64px;
  font-weight: 400;
  color: #000000;
  letter-spacing: 10px;
}






.footer-socials-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
