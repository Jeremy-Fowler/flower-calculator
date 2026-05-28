<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

onMounted(() => { addEventListener('keydown', handleKeyDown) })

onUnmounted(() => { removeEventListener('keydown', handleKeyDown) })

const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'Backspace']

const displayPrice = ref('')

const price = computed(() => parseFloat(displayPrice.value))

function updateTotal(key: string) {
  if (!keys.includes(key)) return

  switch (key) {
    case 'Backspace':
      if (displayPrice.value.length == 0) return
      displayPrice.value = displayPrice.value.slice(0, -1)
      break
    case '.':
      if (displayPrice.value.includes('.')) return
    default:
      displayPrice.value += key
  }
}

function handleKeyDown(event: KeyboardEvent) {
  const button = document.getElementById('calculator-key-' + event.key)
  if (!button) return
  button.focus({ focusVisible: false })
  button.click()
}

</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-3">
        <div class="glass text-center display-2 py-2">
          <span class="blinking-cursor">${{ displayPrice }}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4 mb-3" v-for="key in keys" :key="'calculator-key-' + key">
        <button @click="updateTotal(key)" :id="'calculator-key-' + key" class="w-100 glass display-2" type="button"
          :title="key">
          <span>{{ key == 'Backspace' ? '⌫' : key }}</span>
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.glass {
  background: rgba(255, 255, 255, 0.28);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  border: 1px solid rgba(255, 255, 255, 0.62);
  text-shadow: 1px 1px 5px rgb(245, 203, 210);
  transition: all 200ms ease-in-out;
}

.glass:focus {
  background: rgba(255, 255, 255, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.7px);
  -webkit-backdrop-filter: blur(9.7px);
  border: 1px solid rgba(255, 255, 255, 1);
}

.blinking-cursor::after {
  content: "|";
  margin-left: 5px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {

  from,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
