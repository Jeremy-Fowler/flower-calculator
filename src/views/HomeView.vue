<script setup lang="ts">
import { onMounted, ref } from 'vue';

onMounted(() => { addEventListener('keydown', handleKeyDown) })

const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'Backspace']

const total = ref('')

function updateTotal(key: string) {
  if (!keys.includes(key)) return

  switch (key) {
    case 'Backspace':
      if (total.value.length == 0) return
      total.value = total.value.slice(0, -1)
      break
    case '.':
      if (total.value.includes('.')) return
    default:
      total.value += key
  }
}

function handleKeyDown(event: KeyboardEvent) {
  const button = document.getElementById('calculator-key-' + event.key)
  if (!button) return
  button.focus()
  button.click()
}

</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <div class="glass-card text-center display-2 py-2">
          <span>${{ total }}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4 mb-3" v-for="key in keys" :key="'calculator-key-' + key">
        <button @click="updateTotal(key)" :id="'calculator-key-' + key" class="btn btn-light w-100" type="button">
          {{ key }}
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.glass-card {
  background: rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  border: 1px solid rgba(255, 255, 255, 0.62);
}
</style>
