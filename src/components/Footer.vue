<template>
  <footer class="footer-container">

    <div class="footer-logo-container">
      <img src="@/assets/images/Timenest-logo.png" alt="Logo">
      <h1>Timenest</h1>
    </div>

    <p class="footer-description">Your bridge to the future, one message at a time</p>

    <span>Connect with us</span>

    <div class="footer-socials-container">
      <LinkedinSVG :width="'28'" :height="'28'" :stroke="'#FFFFFF'" :stroke-width="1" />
      <FacebookSVG :width="'28'" :height="'28'" :stroke="'#FFFFFF'" :stroke-width="1" />
      <InstagramSVG :width="'34'" :height="'34'" :stroke="'#FFFFFF'" :stroke-width="7" />
      <GithubSVG :width="'28'" :height="'30'" :stroke="'#FFFFFF'" :stroke-width="9" />
    </div>

    <div class="footer-terms-container">
      <p>Terms of Use</p>
      <p>|</p>
      <p>Privacy Policy</p>
    </div>

    <p class="footer-copyright">&copy; {{ new Date().getFullYear() }} Timenest. Made with ❤️ for your future self.</p>
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
  padding: 48px 24px;
  background-color: #001925;
}

.footer-logo-container {
  display: flex;
  gap: 10px;
  align-items: center;
  opacity: 0.8;
}

.footer-logo-container img {
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
  filter: invert(1);
}

.footer-logo-container h1 {
  font-size: 34px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 10px;
}

.footer-description {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.6;
  letter-spacing: 1.5px;
  margin-bottom: 30px;
}

.footer-container span {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.6;
  width: 100%;
  letter-spacing: 1.2px;
}

.footer-socials-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 0.7;
}

.footer-terms-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: nowrap;
}

.footer-terms-container p {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.6;
  letter-spacing: 1.2px;
  white-space: nowrap;
  padding: 20px 0;
}

.footer-copyright {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.5;
  letter-spacing: 1.2px;
}

</style>
