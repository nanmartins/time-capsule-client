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

footer {
  text-align: center;
  padding: 10px;
  background-color: #EEEEEE;
}







.footer-socials-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
