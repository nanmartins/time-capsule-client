<template>
  <div class="new-capsule-form" v-if="authStore.user">

    <div v-if="!formActive" class="open">
      <h1 @click="formActive = true">+ New Capsule</h1>
    </div>

    <form @submit.prevent="submitCapsule" v-else>
      <h1>New Capsule</h1>
      <span class="close" @click="formActive = false">X</span>

      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>

      <div class="form-group">
        <label for="openAt">Open At:</label>
        <input type="datetime-local" id="openAt" v-model="openAt" required />
      </div>

      <div class="form-group">
        <label for="image">Image (optional):</label>
        <input type="file" id="image" accept="image/*" @change="handleImageUpload" />
      </div>

      <button type="submit">Create Capsule</button>

      <p v-if="errorMessage" class="message">{{ errorMessage }}</p>

    </form>
  </div>
</template>


<script setup>
import { ref } from "vue"
import { createCapsule } from "@/services.js"
import { useAuthStore } from '@/stores/authStore.js'

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
};

// Send data to the server
const submitCapsule = async () => {
  if (!title.value || !message.value || !openAt.value) {
    errorMessage.value = "Title, Message and Date to Open fields are required"
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
  } catch (error) {
    errorMessage.value = error.message
  }
}

</script>


<style scoped>
.new-capsule-form {
  max-width: 1000px;
  margin: 0;
  margin-bottom: 30px;
}

form {
  box-shadow: none;
  border-radius: 0;
  position: relative;
  max-width: 500px;
  margin: auto;
}

.form-group {
  padding-bottom: 18px;
}


label {
  font-weight: bold;
  display: block;
}

textarea, input {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  resize: none;
  height: 200px;
}

button {
  display: block;
  padding: 20px;
  background-color: transparent;
  color: black;
  border: 1.5px solid #777777;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.message {
  color: #d9534f;
  font-weight: bold;
  margin-bottom: 10px;
}
.open h1 {
  display: inline-block;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
}
</style>
