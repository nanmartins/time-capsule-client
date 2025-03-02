<template>
  <div class="new-capsule-form">
    <!-- <h2>Create a Capsule</h2> -->
    <form @submit.prevent="submitCapsule">
      <h1>New Capsule</h1>

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

const title = ref("")
const message = ref("")
const openAt = ref("")
const imageUrl = ref(null)
const errorMessage = ref("")

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
  max-width: 320px;
  margin: 0;
}

form {
  box-shadow: none;
  border-radius: 0;
}

.form-group {
  margin-bottom: 15px;
}


label {
  font-weight: bold;
  display: block;
}

textarea, input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  resize: none;
  height: 100px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
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
</style>
