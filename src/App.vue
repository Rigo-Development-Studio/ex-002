<script setup lang="ts">
import { ref, computed } from 'vue'

const projectName = ref('ex-002 Evaluation Studio')
const checks = ref([
  { id: 1, name: 'Repository Structure', status: 'Passed', description: 'All core project configurations verified.' },
  { id: 2, name: 'TypeScript & Type Checking', status: 'Passed', description: 'Strict type checking enabled and verified.' },
  { id: 3, name: 'Unit & Integration Tests', status: 'Passed', description: 'Vitest test suite running successfully.' }
])

const passedCount = computed(() => checks.value.filter(c => c.status === 'Passed').length)
</script>

<template>
  <main class="container">
    <header class="header">
      <h1>{{ projectName }}</h1>
      <p class="subtitle">Evaluating recent changes, project files, and system integrity.</p>
    </header>

    <section class="card-grid">
      <div v-for="check in checks" :key="check.id" class="card">
        <div class="card-header">
          <h2>{{ check.name }}</h2>
          <span class="badge success">{{ check.status }}</span>
        </div>
        <p>{{ check.description }}</p>
      </div>
    </section>

    <footer class="footer">
      <p>Integrity Status: <strong>{{ passedCount }} / {{ checks.length }} Checks Passed</strong></p>
    </footer>
  </main>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #1f2937;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 1.1rem;
  color: #4b5563;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-header h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 9999px;
}

.badge.success {
  background-color: #d1fae5;
  color: #065f46;
}

.footer {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  color: #4b5563;
}
</style>
