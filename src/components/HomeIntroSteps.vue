<!-- StepsIntro.vue -->
<template>
  <div class="home-steps-intro">

    <div class="home-steps-header">
      <span>GET STARTED</span>
      <h1>Create Your First Capsule in Minutes</h1>
      <p>It's easy to start your journey through time. Click on each step to learn more about the process.</p>
    </div>

    <div class="home-steps-container">

      <!-- Left: Steps -->
       <div class="home-steps-left">

        <!-- Step 1 -->
        <div
          class="home-step-box"
          :class="{ active: currentStep === 1 }"
          @click="currentStep = 1"
        >
          <div class="home-step-icon" :class="{ inactive: currentStep ==! 1 }">
            <span v-if="currentStep === 1">1</span>
            <SignupSVG v-else :width="'22'" :height="'22'" :stroke="'#FFFFFF'" :stroke-width="1.8" />
          </div>

          <div class="step-info">
            <h3>Sign up for a free account</h3>
            <p>Create your account with email in just a few seconds</p>
          </div>
          <div v-if="currentStep === 1" class="step-check">
            ✔
          </div>
        </div>

        <!-- Step 2 -->
         <div
          class="home-step-box"
          :class="{ active: currentStep === 2 }"
          @click="currentStep = 2"
        >
          <div class="home-step-icon" :class="{ inactive: currentStep ==! 2 }">
            <span v-if="currentStep === 2">2</span>
            <WriteSVG v-else :width="'20'" :height="'20'" :stroke="'#FFFFFF'" :stroke-width="0.00002" :fill="'#FFFFFF'"/>
          </div>

          <div class="step-info">
            <h3>Write your message</h3>
            <p>Add text, photos, or any files you want to preserve</p>
          </div>
          <div v-if="currentStep === 2" class="step-check">✔</div>
        </div>

        <!-- Step 3 -->
        <div
          class="home-step-box"
          :class="{ active: currentStep === 3 }"
          @click="currentStep = 3"
        >
          <div class="home-step-icon" :class="{ inactive: currentStep ==! 3 }">
            <span v-if="currentStep === 3">3</span>
            <CalendarSVG v-else :width="'22'" :height="'22'" :stroke="'#FFFFFF'" :stroke-width="1.5" />
          </div>

          <div class="step-info">
            <h3>Set your unlock date</h3>
            <p>Choose when you want to receive your message</p>
          </div>
          <div v-if="currentStep === 3" class="step-check">✔</div>
        </div>


       </div>
      <!-- <div class="steps-left">
        <div
          v-for="step in steps"
          :key="step.id"
          class="step-box"
          :class="{ active: currentStep === step.id }"
          @click="currentStep = step.id"
        >
          <div class="home-step-icon">
            <span v-if="currentStep === step.id">{{ step.id }}</span>
            <span v-else>{{ step.icon }}</span>
          </div>

          <div class="step-info">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
          <div v-if="currentStep === step.id" class="step-check">✔</div>

        </div>

        <button class="cta-button">
          Create Your First Capsule →
        </button>
      </div> -->

      <!-- Right: Content -->
      <div class="steps-right">
        <div class="content-box">
          <h3>{{ selectedStep.title }}</h3>
          <p>{{ selectedStep.content }}</p>

          <ul class="features-list" v-if="selectedStep.features">
            <li v-for="(feature, index) in selectedStep.features" :key="index">{{ feature }}</li>
          </ul>

          <div v-if="selectedStep.free" class="free-badge">
            Completely Free — Create unlimited time capsules at no cost
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CalendarSVG from '@/assets/icons/CalendarSVG.vue'
import WriteSVG from '@/assets/icons/WriteSVG.vue'
import SignupSVG from '@/assets/icons/SignupSVG.vue'

const steps = [
  {
    id: 1,
    icon: '👤',
    title: 'Sign up for a free account',
    description: 'Create your account with email in just a few seconds',
    content: 'Start your journey by creating your free account. It takes less than a minute!',
  },
  {
    id: 2,
    icon: '✏️',
    title: 'Write your message',
    description: 'Add text, photos, or any files you want to preserve',
    content: 'Express yourself with rich content and meaningful messages.',
    features: [
      'Write unlimited text messages',
      'Upload photos and images',
      'Attach documents and files',
      'Add a personal title and category',
    ],
    free: true
  },
  {
    id: 3,
    icon: '📅',
    title: 'Set your unlock date',
    description: 'Choose when you want to receive your message',
    content: 'Pick the exact date when your message will become available to your future self.',
  },
]


const currentStep = ref(1)

const selectedStep = computed(() =>
  steps.find((step) => step.id === currentStep.value)
)
</script>

<style scoped>
.home-steps-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 24px;
  background: #f9f9f9;
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
  width: 100%;
  /* max-width: 1100px; */
  gap: 48px;
}

/* Left side */
.home-steps-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  /* max-width: 480px; */
}

.home-step-box {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s;
  position: relative;
  width: 100%;
  max-width: 500px;
  min-width: 500px;
}

.home-step-box.active {
  border: 1px solid #22c55e;
  /* box-shadow: 0 0 0 3px #dcfce7; */
}

/* .step-number {
  background: #22c55e;
  color: #fff;
  width: 32px;
  height: 32px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
} */

.step-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.step-info p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #6b7280;
}

.home-step-icon {
  background: #22c55e;
  color: #fff;
  width: 40px;
  height: 40px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.home-step-icon.inactive {
  background: #1c512f7e;
}


.step-check {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #22c55e;
  font-weight: bold;
}

/* CTA button */
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
.steps-right {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.content-box {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 24px;
  /* width: 100%;
  max-width: 480px;
  min-width: 480px; */
  width: 550px;
  min-height: 280px;
  box-sizing: border-box;
}




.content-box h3 {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
}

.content-box p {
  font-size: 15px;
  color: #374151;
  margin-bottom: 16px;
}

.features-list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 16px 0;
}

.features-list li {
  font-size: 14px;
  color: #374151;
  margin-bottom: 8px;
}

.free-badge {
  font-size: 14px;
  font-weight: 600;
  color: #16a34a;
  background: #dcfce7;
  padding: 12px;
  border-radius: 6px;
}
</style>
