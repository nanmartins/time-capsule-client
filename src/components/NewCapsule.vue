<template>
  <div class="user-form-container">
    <!-- <h2>Create a Capsule</h2> -->
    <p v-if="message" class="message">{{ message }}</p>

    <form @submit.prevent="submitCapsule">
      <h1>New Capsule</h1>
      <div class="form-group">
        <label for="text">Message:</label>
        <textarea id="text" v-model="text" required></textarea>
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
    </form>
  </div>
</template>


<script setup>
import { ref } from "vue"
import { createCapsule } from "@/services.js"

const text = ref("")
const openAt = ref("")
const imageUrl = ref(null)
const message = ref("")

// Get the selected image
const handleImageUpload = (event) => {
  imageUrl.value = event.target.files[0]
};

// Send data to the server
const submitCapsule = async () => {
  if (!text.value || !openAt.value) {
    message.value = "Text and Open At fields are required"
    return
  }

  try {
    await createCapsule(text.value, openAt.value, imageUrl.value)

    message.value = "Capsule created successfully"
    text.value = ""
    openAt.value = ""
    imageUrl.value = null
  } catch (error) {
    message.value = error.message
  }
}

</script>


<style scoped>
.capsule-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
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

button {
  width: 100%;
  padding: 10px;
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
