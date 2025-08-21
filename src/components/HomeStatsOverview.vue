<template>
  <div class="home-stats-overview">
    <div v-for="stat in statsList" :key="stat.label" class="home-stat-card">
      <h3>{{ stat.value }}<span>+</span></h3>
      <p>{{ stat.label }}</p>
    </div>
    <div class="home-stat-card">
      <h3>99.9%</h3>
      <p>Uptime</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchStats } from '@/services.js'

const statsList = ref([])

function roundToNearest(num) {
  if (num < 10) return 10
  const len = num.toString().length
  const base = Math.pow(10, len - 1)
  return Math.round(num / base) * base
}

// Always add a '+' at the end
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(num >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k+'
  }
  return num
}

async function getStats() {
  try {
    const data = await fetchStats()

    const stats = {
      users: roundToNearest(data.users),
      capsulesCreated: roundToNearest(data.capsulesCreated),
      capsulesOpened: roundToNearest(data.capsulesOpened)
    }

    statsList.value = [
      { label: 'Users Registered', value: formatNumber(stats.users) },
      { label: 'Capsules Created', value: formatNumber(stats.capsulesCreated) },
      { label: 'Capsules Opened', value: formatNumber(stats.capsulesOpened) }
    ]
  } catch (err) {
    console.error('Error fetching stats:', err)
  }
}

onMounted(getStats)
</script>

<style scoped>
.home-stats-overview {
  display: flex;
  justify-content: center;
  gap: 64px;
  padding: 40px 0;
  flex-wrap: wrap;
  width: 100%;
}

.home-stat-card {
  padding: 20px 30px;
  text-align: center;
}

.home-stat-card h3 {
  font-family: "Geist", sans-serif;
  display: flex;
  align-items: end;
  justify-self: center;
  font-size: 38px;
  font-weight: 900;
  color: var(--color-highlight);
  margin-bottom: 8px;
}

span {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 4px;
}

.home-stat-card p {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: var(--color-text);
}
</style>
