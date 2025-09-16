<!-- StepsIntro.vue -->
<template>
  <div class="home-steps-intro">

    <div class="home-steps-header">
      <span>GET STARTED</span>
      <h1>Create Your First Capsule in Minutes</h1>
      <p>It's easy to start your journey through time. Click on each step to learn more about the process.</p>
    </div>

    <div class="home-steps-container">

      <!-- Left Steps -->
       <div class="home-steps-left">

        <!-- Step 1 -->
        <div
          class="home-step-box"
          :class="{ active: currentStep === 1 }"
          @click="currentStep = 1"
        >
          <div class="home-step-icon">
            <span v-if="currentStep === 1" class="home-step-icon-number">1</span>
            <SignupSVG v-else class="home-step-icon-icon" :width="'22'" :height="'22'" :stroke="'#3F88C5'" :stroke-width="1.8" />
          </div>

          <div class="home-step-info" :class="{ active: currentStep === 1 }">
            <h3>Sign up for a free account</h3>
            <p>Create your account with email in just a few seconds</p>
          </div>
          <div v-if="currentStep === 1" class="home-step-check">
            <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
          </div>
        </div>

        <!-- Step 2 -->
         <div
          class="home-step-box"
          :class="{ active: currentStep === 2 }"
          @click="currentStep = 2"
        >
          <div class="home-step-icon">
            <span v-if="currentStep === 2" class="home-step-icon-number">2</span>
            <WriteSVG v-else class="home-step-icon-icon" :width="'22'" :height="'22'" :stroke-width="0.0002" :fill="'#3F88C5'" />
          </div>

          <div class="home-step-info" :class="{ active: currentStep === 2 }">
            <h3>Write your message</h3>
            <p>Add text, photos, or any files you want to preserve</p>
          </div>
          <div v-if="currentStep === 2" class="home-step-check">
            <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
          </div>
        </div>

        <!-- Step 3 -->
        <div
          class="home-step-box"
          :class="{ active: currentStep === 3 }"
          @click="currentStep = 3"
        >
          <div class="home-step-icon">
            <span v-if="currentStep === 3" class="home-step-icon-number">3</span>
            <CalendarSVG v-else class="home-step-icon-icon" :width="'22'" :height="'22'" :stroke="'#3F88C5'" :stroke-width="1.8" />
          </div>

          <div class="home-step-info" :class="{ active: currentStep === 3 }">
            <h3>Set your unlock date</h3>
            <p>Choose when you want to receive your message</p>
          </div>
          <div v-if="currentStep === 3" class="home-step-check">
            <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
          </div>
        </div>

        <div class="home-step-content-free-badge">
          <MoneySVG :width="'28'" :height="'28'" :fill="'#FFFFFF'" :stroke-width="2" class="home-step-content-free-badge-icon" />
          <div class="home-step-content-free-badge-text">
            <h3>Completely Free</h3>
            <p>Create unlimited time capsules at no cost</p>
          </div>
        </div>

       </div>

      <!-- Right Content -->
       <div class="home-steps-right">
        <div class="home-step-content-box">

          <!-- Step 1 -->
          <template v-if="currentStep === 1">
            <div class="home-step-content-header">
              <span>1</span>
              <h3>Create Your Free Account</h3>
            </div>
            <p>Getting started is quick and easy. No credit card required.</p>

            <div class="home-step-content-image">
              <img src="@/assets/images/create-account.png" alt="">
            </div>

            <ul>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Sign up with email or Google account
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Verify your email address
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Set up your profile
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Start creating capsules immediately
              </li>
            </ul>

          </template>

          <!-- Step 2 -->
          <template v-if="currentStep === 2">
            <div class="home-step-content-header">
              <span>2</span>
              <h3>Compose Your Time Capsule</h3>
            </div>
            <p>Express yourself with rich content and meaningful messages.</p>

            <div class="home-step-content-image">
              <img src="@/assets/images/write-message.png" alt="">
            </div>

            <ul>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Write unlimited text messages
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Upload photos and images
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Attach documents and files
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Add a personal title and category
              </li>
            </ul>

          </template>

          <!-- Step 3 -->
          <template v-if="currentStep === 3">
            <div class="home-step-content-header">
              <span>3</span>
              <h3>Schedule Your Future</h3>
            </div>
            <p>Pick the perfect moment to rediscover your message.</p>

            <div class="home-step-content-image">
              <img src="@/assets/images/select-date.png" alt="">
            </div>

            <ul>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Choose any future date
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Set specific times if desired
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Add personal notes about why you chose this date
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#09BC8A'" :fill="'#09BC8A'" />
                Get email notifications when it unlocks
              </li>
            </ul>

          </template>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CalendarSVG from '@/assets/icons/CalendarSVG.vue'
import WriteSVG from '@/assets/icons/WriteSVG.vue'
import SignupSVG from '@/assets/icons/SignupSVG.vue'
import CheckSVG from '@/assets/icons/CheckSVG.vue'
import MoneySVG from '@/assets/icons/MoneySVG.vue'

const currentStep = ref(1)

</script>

<style scoped>
.home-steps-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 86px 24px;
}

/* Header */
.home-steps-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 48px;
}

.home-steps-header span {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-highlight);
  margin-bottom: 5px;
}

.home-steps-header h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.home-steps-header p {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text);
  width: 100%;
  max-width: 700px;
  letter-spacing: 1.2px;
}

/* Cards container */
.home-steps-container {
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 48px;
  margin: 0 auto;
}

/* Left side */
.home-steps-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.home-step-box {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--color-bg-light);
  border: 1px solid var(--color-lines);
  border-radius: 8px;
  padding: 22px 16px;
  cursor: pointer;
  position: relative;
  width: 480px;
  transition: all 0.2s ease;
}

.home-step-box:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid var(--color-lines);
  transition: all 0.2s ease;
}

.home-step-box.active {
  background: var(--color-card-bg-accent);
  border: 1px solid var(--color-highlight);
  zoom: 1.07;
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
}

.home-step-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
}

.home-step-info.active h3 {
  color: var(--color-text);
}

.home-step-info p {
  margin: 4px 0 0;
  font-size: 14px;
  color: var(--color-text);
}

.home-step-info.active p {
  color: var(--color-text);
}

.home-step-icon-number {
  background: var(--color-highlight);
  color: var(--color-bg-light);
  width: 40px;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.home-step-icon-icon {
  background: var(--color-highlight-light);
  width: 38px;
  height: 38px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.home-step-check {
  position: absolute;
  right: 16px;
  font-weight: bold;
}

/* Right side */
.home-steps-right {
  display: flex;
  justify-content: flex-start;
  /* box-shadow: rgba(99, 99, 99, 0.072) 0px 2px 8px 0px; */
}

.home-step-content-box {
  background: var(--color-bg-light);
  border: 1px solid var(--color-lines);
  border-radius: 8px;
  padding: 24px;
  width: 550px;
  min-height: 280px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.072) 0px 2px 8px 0px;
}

.home-step-content-box p {
  font-size: 14px;
  color: var(--color-text);
}

.home-step-content-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.home-step-content-header span {
  background: var(--color-highlight);
  color: var(--color-bg-light);
  width: 32px;
  height: 32px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.home-step-content-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
}

.home-step-content-image {
  width: 100%;
  height: 100%;
  max-height: 220px;
  border-radius: 8px;
  border: 2px dashed var(--color-lines);
  margin-top: 16px;
  background: linear-gradient(to right, #edf3f6 0%, #ffffff 50%, #f0f9ff 100%);
}

.home-step-content-image img {
  display: block;
  margin: auto;
  width: 55%;
  padding: 12px;
}

ul {
  list-style: none;
  margin-top: 24px;
}

li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-size: 14px;
  color: var(--color-text);
}

.home-step-content-free-badge {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-bg-light);
  background: var(--color-highlight-dark);
  padding: 18px;
  border-radius: 6px;
  margin-top: 24px;
  width: 480px;
}

.home-step-content-free-badge-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.home-step-content-free-badge-text h3 {
  color: var(--color-bg-light);
  font-weight: 600;
}

.home-step-content-free-badge-text p {
  color: var(--color-bg-light);
  font-weight: 400;
}


/* MEDIA SCREEN */
@media (max-width: 1200px) {
  .home-steps-container {
    padding: 0 16px;
    gap: 32px;
  }

  .home-step-box,
  .home-step-content-box,
  .home-step-content-free-badge {
    width: 100%;
    max-width: 500px;
  }
}

@media (max-width: 1000px) {
  .home-steps-container {
    flex-direction: column;
    align-items: center;
  }

  .home-steps-left,
  .home-steps-right {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .home-steps-left {
    margin-bottom: 16px;
  }

  .home-step-content-free-badge {
    order: -1;
    margin-bottom: 16px;
  }

  .home-step-box,
  .home-step-content-box,
  .home-step-content-free-badge {
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 600px) {

  .home-steps-container {
    padding: 0;
  }

  .home-steps-header h1 {
    font-size: 20px;
  }

  .home-step-box {
    gap: 12px;
    padding: 18px 16px;
  }

  .home-step-icon-number {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }

  .home-step-icon-icon {
    width: 32px;
    height: 32px;
    padding: 6px;
  }

  .home-step-box.active {
    zoom: 1;
    padding: 18px 46px 18px 16px;
  }

  .home-step-content-free-badge {
    order: -1;
  }

  li {
    align-items: flex-start;
    margin-bottom: 8px;
  }

  li svg {
    flex-shrink: 0;
    margin-bottom: 2px;
  }

  .home-step-content-image {
    height: auto;
    min-height: 120px;
    max-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-step-content-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0;
  }

}

</style>
