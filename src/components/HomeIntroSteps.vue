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
            <SignupSVG v-else class="home-step-icon-icon" :width="'22'" :height="'22'" :stroke="'#17A34A'" :stroke-width="1.8" />
          </div>

          <div class="home-step-info" :class="{ active: currentStep === 1 }">
            <h3>Sign up for a free account</h3>
            <p>Create your account with email in just a few seconds</p>
          </div>
          <div v-if="currentStep === 1" class="home-step-check">
            <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
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
            <WriteSVG v-else class="home-step-icon-icon" :width="'22'" :height="'22'" :stroke-width="0.0002" :fill="'#17A34A'" />
          </div>

          <div class="home-step-info" :class="{ active: currentStep === 2 }">
            <h3>Write your message</h3>
            <p>Add text, photos, or any files you want to preserve</p>
          </div>
          <div v-if="currentStep === 2" class="home-step-check">
            <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
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
            <CalendarSVG v-else class="home-step-icon-icon" :width="'22'" :height="'22'" :stroke="'#17A34A'" :stroke-width="1.8" />
          </div>

          <div class="home-step-info" :class="{ active: currentStep === 3 }">
            <h3>Set your unlock date</h3>
            <p>Choose when you want to receive your message</p>
          </div>
          <div v-if="currentStep === 3" class="home-step-check">
            <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
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
              <img src="@/assets/images/sign-banner-img.png" alt="">
            </div>

            <ul>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Sign up with email or Google account
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Verify your email address
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Set up your profile
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
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
              <img src="@/assets/images/write-banner-img.png" alt="">
            </div>

            <ul>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Write unlimited text messages
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Upload photos and images
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Attach documents and files
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
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
              <img src="@/assets/images/schedule-banner-img.png" alt="">
            </div>

            <ul>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Choose any future date
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Set specific times if desired
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
                Add personal notes about why you chose this date
              </li>
              <li>
                <CheckSVG :width="'22'" :height="'22'" :stroke="'#4be483'" />
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
  color: #22c55e;
  margin-bottom: 5px;
}

.home-steps-header h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: #000000;
  opacity: 0.7;
  margin-bottom: 16px;
}

.home-steps-header p {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  opacity: 0.6;
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
  gap: 16px;
  width: 100%;
}

.home-step-box {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 22px 16px;
  cursor: pointer;
  position: relative;
  width: 480px;
  transition: all 0.2s ease;
}

.home-step-box:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid #d5d5d5;
  transition: all 0.2s ease;
}

.home-step-box.active {
  background: #EFFDF4;
  border: 1px solid #22c55e;
  zoom: 1.07;
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
}


.home-step-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  opacity: 0.8;
}

.home-step-info.active h3 {
  color: #126831;
  opacity: 1;
}

.home-step-info p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #000000;
  opacity: 0.7;
}

.home-step-info.active p {
  color: #17803D;
  opacity: 1;
}

.home-step-icon-number {
  background: #22c55e;
  color: #fff;
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
  background: #DCFCE7;
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
  color: #22c55e;
  font-weight: bold;
}

.cta-button {
  margin-top: 16px;
  padding: 12px;
  background-color: #22c55e;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.cta-button:hover {
  background-color: #16a34a;
}

/* Right side */
.home-steps-right {
  display: flex;
  justify-content: flex-start;
  box-shadow: rgba(99, 99, 99, 0.072) 0px 2px 8px 0px;
}

.home-step-content-box {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 24px;
  width: 550px;
  min-height: 280px;
  box-sizing: border-box;
}

.home-step-content-box p {
  font-size: 14px;
  color: #000000;
  opacity: 0.65;
}

.home-step-content-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.home-step-content-header span {
  background: #22c55e;
  color: #fff;
  width: 28px;
  height: 28px;
  font-weight: 600;
  font-size: 14px;
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
  color: #000000;
  opacity: 0.6;
}

.home-step-content-image {
  width: 100%;
  height: 220px;
  border-radius: 8px;
  background: #ECEDEF;
  border: 1px dashed #c8c8c8;
  margin-top: 16px;
}

.home-step-content-image img {
  display: block;
  margin: auto;
  width: 50%;
  padding-top: 20px;
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
  color: #000000;
  opacity: 0.65;
}

.home-step-content-free-badge {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #dcfce7;
  background: #16a34a;
  padding: 12px 16px;
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
  color: #FFFFFF;
  font-weight: 600;
}

.home-step-content-free-badge-text p {
  color: #FFFFFF;
  font-weight: 400;
  opacity: 0.9;
}

</style>
