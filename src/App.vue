<script setup lang="ts">
import { BackgroundImage } from '@/models/background-image.js';
import { computed } from 'vue';

const backgroundImages: BackgroundImage[][] = [
  // January
  [new BackgroundImage('')],
  // February
  [new BackgroundImage('')],
  // March
  [new BackgroundImage('')],
  // April
  [new BackgroundImage('')],
  // May
  [new BackgroundImage('https://images.unsplash.com/photo-1561848355-890d054dc55a')],
  // June
  [new BackgroundImage('')],
  // July
  [new BackgroundImage('')],
  // August
  [new BackgroundImage('')],
  // September
  [new BackgroundImage('')],
  // October
  [new BackgroundImage('')],
  // November
  [new BackgroundImage('')],
  // December
  [new BackgroundImage('')],
]

const backgroundImageForCurrentMonth = computed(() => {
  const imagesForCurrentMonth = backgroundImages[new Date().getMonth()]

  if (!imagesForCurrentMonth) throw new Error("No month found!")

  const randomImage = imagesForCurrentMonth[Math.floor(Math.random() * imagesForCurrentMonth.length)]

  if (!randomImage) throw new Error("No image found!")

  return randomImage
})
</script>

<template>
  <header></header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped lang="scss">
main {
  background-image: v-bind('backgroundImageForCurrentMonth.portrait');
  min-height: 100dvh;
  background-size: cover;
}
</style>
