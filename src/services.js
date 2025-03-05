import axios from 'axios';

const authUrl = 'https://time-capsule-server-omega.vercel.app/api/auth'
const capsulesUrl = 'https://time-capsule-server-omega.vercel.app/api/capsules'
// const authUrl = 'http://localhost:3000/api/auth';

// Login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${authUrl}/login`, { email, password })
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.msg || 'Error logging in')
    } else {
      throw new Error('Error logging in')
    }
  }
}

// Register
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${authUrl}/register`, { name, email, password })
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.msg || 'Error registering')
    } else {
      throw new Error('Error registering')
    }
  }
}

// Get user
export const getUser = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('User not authenticated, please sign in.')

    const response = await axios.get(`${authUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error getting user')
  }
}

////////////////////////////////////////CAPSULES SERVICES ///////////////////////////////////////

// Create capsule
export const createCapsule = async (title, message, openAt, image) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) throw new Error("User not authenticated. Please sign in.")

    const formData = new FormData()
    formData.append('title', title)
    formData.append('message', message)
    formData.append('openAt', openAt)
    if (image) {
      formData.append('image', image)
    }

    const response = await axios.post(`${capsulesUrl}/create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })

    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error creating capsule")
  }
}


// Get open capsules
export const fetchOpenCapsules = async () => {
  try {
    const token = localStorage.getItem("token")
    if (!token) throw new Error("User not authenticated. Please sign in.")

    const response = await axios.get(`${capsulesUrl}/open`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error fetching open capsules")
  }
}


// Get locked capsules
export const fetchLockedCapsules = async () => {
  try {
    const token = localStorage.getItem("token")
    if (!token) throw new Error("User not authenticated. Please sign in.")

    const response = await axios.get(`${capsulesUrl}/locked`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || "Error fetching locked capsules")
  }
}

// Get capsule details
export const fetchCapsuleDetails = async (capsuleId) => {
  try {
    const response = await axios.get(`${capsulesUrl}/${capsuleId}`)
    return response.data
  } catch (error) {
    throw new Error("Failed to fetch capsule details")
  }
}
