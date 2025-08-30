import { defineStore } from "pinia"
import { fetchOpenCapsules, fetchLockedCapsules, fetchCapsuleDetails, deleteCapsule, createCapsule } from "@/services"

export const useCapsuleStore = defineStore("capsuleStore", {
  state: () => ({
    openCapsules: [],
    lockedCapsules: [],
    selectedCapsule: null,
    countdown: "",
    loading: false,
    error: null,
  }),

  actions: {
    async loadCapsules() {
      this.loading = true
      try {
        this.openCapsules = await fetchOpenCapsules()
        this.lockedCapsules = await fetchLockedCapsules()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    async selectCapsule(capsule) {
      try {
        const details = await fetchCapsuleDetails(capsule._id)
        this.selectedCapsule = details
        this.countdown = ""
      } catch (err) {
        this.error = "Failed to load capsule details"
      }
    },

    selectLockedCapsule(capsule) {
      this.selectedCapsule = capsule
      this.startCountdown(capsule)
    },


    async addCapsule(title, message, openAt, image) {
      const response = await createCapsule(title, message, openAt, image)
      const newCapsule = response.capsule

      const now = new Date()

      if (new Date(newCapsule.openAt) <= now) {
        this.openCapsules = [...this.openCapsules, newCapsule];
      } else {
        this.lockedCapsules = [...this.lockedCapsules, newCapsule];
      }

      return newCapsule
    },


    async removeCapsule(capsuleId) {
      await deleteCapsule(capsuleId)
      this.openCapsules = this.openCapsules.filter(c => c._id !== capsuleId)
      this.lockedCapsules = this.lockedCapsules.filter(c => c._id !== capsuleId)
      this.selectedCapsule = null
      this.countdown = ""
    },

    // countdown for locked capsule
    startCountdown(capsule) {
      clearInterval(this._countdownInterval)
      const update = () => {
        const now = Date.now()
        const unlockTime = new Date(capsule.openAt).getTime()
        const timeLeft = unlockTime - now

        if (timeLeft <= 0) {
          clearInterval(this._countdownInterval)
          this.selectCapsule(capsule)
          return
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        this.countdown = `${days}d ${hours}h ${minutes}m`
      }

      update()
      this._countdownInterval = setInterval(update, 1000)
    }
  },

  getters: {
    unlockedCapsulesCount: (state) => state.openCapsules.length,
    lockedCapsulesCount: (state) => state.lockedCapsules.length,
  }
})
