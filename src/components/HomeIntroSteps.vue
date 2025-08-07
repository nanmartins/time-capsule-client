<!-- StepsIntro.vue -->
<template>
  <div class="steps-intro">
    <div class="steps-container">

      <!-- Left: Steps -->
      <div class="steps-left">
        <div
          v-for="step in steps"
          :key="step.id"
          class="step-box"
          :class="{ active: currentStep === step.id }"
          @click="currentStep = step.id"
        >
          <!-- <div class="step-number">{{ step.id }}</div> -->
          <div class="step-icon">
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
      </div>

      <!-- Right: Content -->
      <div class="steps-right">
        <div class="content-box">
          <h3>{{ selectedStep.title }}</h3>
          <p>{{ selectedStep.content }}</p>

          <ul class="features-list" v-if="selectedStep.features">
            <li v-for="(feature, index) in selectedStep.features" :key="index">✔ {{ feature }}</li>
          </ul>

          <div v-if="selectedStep.free" class="free-badge">
            ✔ Completely Free — Create unlimited time capsules at no cost
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
.steps-intro {
  background: #f9f9f9;
  padding: 64px 24px;
  display: flex;
  justify-content: center;
}

.steps-container {
  display: flex;
  max-width: 1100px;
  width: 100%;
  gap: 48px;
}

/* Left side */
.steps-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step-box {
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
}

.step-box.active {
  border: 2px solid #22c55e;
  box-shadow: 0 0 0 3px #dcfce7;
}

.step-number {
  background: #22c55e;
  color: #fff;
  width: 32px;
  height: 32px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

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

.step-icon {
  background: #22c55e;
  color: #fff;
  width: 32px;
  height: 32px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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
  min-width: 480px;
}

.content-box {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  min-height: 280px; /* ou o valor que funcione melhor visualmente */
  box-sizing: border-box;
}

/* .steps-right {
  flex: 1;
} */

/* .content-box {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 24px;
} */



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
