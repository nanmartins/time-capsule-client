<template>
  <div class="user-form-container">
    <!-- <h2>Create a Capsule</h2> -->
    <p v-if="message" class="message">{{ message }}</p>

    <form @submit.prevent="createCapsule">
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
import { ref } from "vue";

const text = ref("");
const openAt = ref("");
const image = ref(null);
const message = ref("");

// Get the selected image
const handleImageUpload = (event) => {
  image.value = event.target.files[0];
};

// Send data to the server
const createCapsule = async () => {
  if (!text.value || !openAt.value) {
    message.value = "Text and Open At fields are required";
    return;
  }

  const formData = new FormData();
  formData.append("text", text.value);
  formData.append("openAt", openAt.value);
  if (image.value) {
    formData.append("image", image.value);
  }

  try {
    const response = await fetch("https://time-capsule-server-omega.vercel.app/api/capsules/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      message.value = "Capsule created successfully";
      text.value = "";
      openAt.value = "";
      image.value = null;
    } else {
      message.value = data.error || "Error creating capsule";
    }
  } catch (error) {
    message.value = "Error connecting to the server";
  }
};
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
}

button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.message {
  color: #d9534f;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
