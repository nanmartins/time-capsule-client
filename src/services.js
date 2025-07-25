
import api from '@/api'

// Login
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error logging in')
  }
}

// Register
export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post('/auth/register', { name, email, password })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error registering')
  }
}

// Get user
export const getUser = async () => {
  try {
    const response = await api.get('/auth/profile')
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error getting user')
  }
}

//////////////////////////////////////// CAPSULES SERVICES ///////////////////////////////////////

// Create capsule
export const createCapsule = async (title, message, openAt, image) => {
  try {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('message', message)
    formData.append('openAt', openAt)
    if (image) {
      formData.append('image', image)
    }

    const response = await api.post('/capsules/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error creating capsule')
  }
}

// Get open capsules
export const fetchOpenCapsules = async () => {
  try {
    const response = await api.get('/capsules/open')
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error fetching open capsules')
  }
}

// Get locked capsules
export const fetchLockedCapsules = async () => {
  try {
    const response = await api.get('/capsules/locked')
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error fetching locked capsules')
  }
}

// Get capsule details
export const fetchCapsuleDetails = async (capsuleId) => {
  try {
    const response = await api.get(`/capsules/${capsuleId}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch capsule details')
  }
}

// Delete capsule
export const deleteCapsule = async (capsuleId) => {
  try {
    const response = await api.delete(`/capsules/${capsuleId}`)
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.response?.data?.error || 'Error deleting capsule'
    )
  }
}
