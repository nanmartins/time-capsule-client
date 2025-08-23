<template>
  <div class="new-capsule-form" v-if="authStore.user">

    <!-- Open form modal -->
    <div class="open" @click="formActive = true">
      <PlusSVG :width="'22'" :height="'22'" :stroke="'#FFFFFF'" :stroke-width="2" style="margin-bottom: 2px;"/>
      <p>Message</p>
    </div>

    <!-- Modal -->
    <div v-if="formActive" class="modal-overlay" @click.self="formActive = false">
      <div class="modal-content">
        <form @submit.prevent="submitCapsule">
          <h1>New Message</h1>

          <!-- Close modal -->
          <span class="close" @click="formActive = false">
            <PlusSVG :width="'25'" :height="'25'" :stroke="'#2B2D42'" :stroke-width="2" />
          </span>

          <div class="form-group">
            <!-- <label for="title">Title:</label> -->
            <input type="text" id="title" v-model="title" placeholder="Title" required />
          </div>

          <div class="form-group">
            <!-- <label for="message">Message:</label> -->
            <textarea id="message" v-model="message" placeholder="Message" required></textarea>
          </div>

          <div class="form-group">
            <label for="openAt">Open at:</label>
            <input type="datetime-local" id="openAt" v-model="openAt" required :min="minOpenDate" />
          </div>

          <div class="form-group">
            <label for="image">Image (optional):</label>
            <input type="file" id="image" accept="image/*" @change="handleImageUpload" />
          </div>

          <button type="submit" class="capsule-create-btn">Create Capsule</button>

          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </form>
      </div>
    </div>

  </div>
</template>


<script setup>
import { ref, computed } from "vue"
import { createCapsule } from "@/services.js"
import { useAuthStore } from '@/stores/authStore.js'
import PlusSVG from "@/assets/icons/PlusSVG.vue"

const title = ref("")
const message = ref("")
const openAt = ref("")
const imageUrl = ref(null)
const errorMessage = ref("")
const authStore = useAuthStore()
const formActive = ref(false)
const emit = defineEmits(["capsuleCreated"])

// Get the selected image
const handleImageUpload = (event) => {
  imageUrl.value = event.target.files[0]
}

const submitCapsule = async () => {
  if (!title.value || !message.value || !openAt.value) {
    errorMessage.value = "Title, Message and Date to Open fields are required"
    return
  }

  const now = new Date()
  const openDate = new Date(openAt.value)

  const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000)

  if (openDate < twoHoursFromNow) {
    errorMessage.value = "The opening date must be at least 2 hours in the future"
    return
  }

  try {
    await createCapsule(title.value, message.value, openAt.value, imageUrl.value)
    emit("capsuleCreated")
    errorMessage.value = "Capsule created successfully"
    title.value = ""
    message.value = ""
    openAt.value = ""
    imageUrl.value = null
    formActive.value = false
  } catch (error) {
    errorMessage.value = error.message
  }
}

// Minimum open date
const minOpenDate = computed(() => {
  const now = new Date(Date.now() + 2 * 60 * 60 * 1000)
  const pad = (n) => (n < 10 ? '0' + n : n)
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`
})
</script>


<style scoped>
.new-capsule-form {
  max-width: 1000px;
  margin: 0;
}

.open {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 3px 8px;
  background: var(--color-highlight-dark);
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--color-bg-light);
  border-radius: 6px;
}

.open:hover {
  background-color: var(--color-highlight);
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: var(--color-bg);
  padding: 48px;
  border-radius: 8px;
  position: relative;
  max-width: 700px;
  width: 100%;
}

.modal-content h1 {
  font-size: 24px;
  font-weight: 500;
}

.modal-content input {
  width: 100%;
  font-size: 16px;
  padding: 12px 10px;
}

.modal-content textarea {
  width: 100%;
  min-height: 150px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid var(--color-lines);
}

.modal-content textarea:focus {
  outline: none;
  border: 1px solid var(--color-highlight);
}

.modal-content textarea::placeholder {
  font-size: 16px;
}

.capsule-create-btn {
  background-color: var(--color-highlight-dark);
  color: var(--color-bg-light);
  padding: 15px 18px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.capsule-create-btn:hover {
  background-color: var(--color-highlight);
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
  transform: rotate(45deg);
  cursor: pointer;
}
</style>
