<script setup lang="ts">
import { BackgroundImage } from '@/models/background-image.js';
import { reactive } from 'vue';

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
  [new BackgroundImage('1561848355-890d054dc55a', '1652217992125-f4610ffaba3c')],
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
  [new BackgroundImage('')]
]

function getBackgroundImageForCurrentMonth() {
  const imagesForCurrentMonth = backgroundImages[new Date().getMonth()]

  if (!imagesForCurrentMonth) throw new Error("No month found!")

  const randomImage = imagesForCurrentMonth[Math.floor(Math.random() * imagesForCurrentMonth.length)]

  if (!randomImage) throw new Error("No image found!")

  return randomImage
}

const backgroundImage = reactive(getBackgroundImageForCurrentMonth() ?? new BackgroundImage('1561848355-890d054dc55a', '1652217992125-f4610ffaba3c'))

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
  background-image: v-bind('backgroundImage.portrait');
  background-size: cover;
  background-position: center;
}

@media (min-width: 992px) {
  main {
    background-image: v-bind('backgroundImage.landscape');
  }
}
</style>
