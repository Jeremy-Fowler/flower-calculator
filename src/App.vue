<script setup lang="ts">
import { BackgroundImage } from '@/models/background-image.js';
import { reactive } from 'vue';

type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

const backgroundImages: BackgroundImage[][] = [
  // January 0
  [
    new BackgroundImage('1590700198862-f812474f4e0a', '1591965293810-880cee6e10f7'),
    new BackgroundImage('1612696191609-d66477ac7d3b', '1619258059605-e949f84f1bf8')
  ],
  // February 1
  [
    new BackgroundImage('1528758054211-22aa4c5300db'),
    new BackgroundImage('1615744455875-7ad33653e8c4', '1555094429-5899fe0e9801'),
    new BackgroundImage('1496062031456-07b8f162a322', '1530906622963-8a60586a49c7'),
  ],
  // March 2
  [
    new BackgroundImage('1614966383767-3171670366b3', '1648064340062-c3a6ad660297'),
    new BackgroundImage('1698750579494-73bc627d1c8e', '1580551844010-58a0a669be6e'),
    new BackgroundImage('1587814213271-7a6625b76c33', '1521508567009-a6d821b3db22'),
  ],
  // April 3
  [
    new BackgroundImage('1587471577460-bdb4891711ce', '1566146991394-b09a95e80d17'),
    new BackgroundImage('1559406994-913e66cdc5ad', '1601277264651-7c904284df62'),
    new BackgroundImage('1531766229611-c6adb976727b', '1499278758973-526e44fe17ac'),
  ],
  // May 4
  [
    new BackgroundImage('1561848355-890d054dc55a', '1652217992125-f4610ffaba3c'),
    new BackgroundImage('1699192923989-bb2fb0c1fb35', '1614179741597-c24532a179a4'),
    new BackgroundImage('1656366631858-6d5ba6f5a58c', '1626976109816-08cef8600d7d'),
  ],
  // June 5
  [
    new BackgroundImage('1630791605465-932d9c9ec2b4', '1629838876835-6daf5e5b2357'),
    new BackgroundImage('1710249947526-b79c3a1776a3', '1550676049-420da94eaeee'),
    new BackgroundImage('1733845281208-a023e42794e9', '1694620133074-44180d9bd5ca'),
  ],
  // July 6
  [
    new BackgroundImage('1629730097828-c9246577a3b3', '1567061426127-c16e990ee5ef'),
    new BackgroundImage('1690692837567-6d911da8b292', '1562695490-7e2181301699'),
  ],
  // August 7
  [
    new BackgroundImage('1660812137504-ba7c6ec6691d', '1628789966585-f4ef58e80d66'),
    new BackgroundImage('1656166830293-7acac0cba58b', '1623395734629-c6bad67928b2'),
    new BackgroundImage('1716799863678-d6dcb40b4dd0'),
  ],
  // September 8
  [
    new BackgroundImage('1566630077570-5e30623fff01', '1604065600238-d118e51fb42b'),
    new BackgroundImage('1615927631583-2a487b196be6', '1631462684417-8342331fdf4b')
  ],
  // October 9
  [
    new BackgroundImage('1505209605347-ebcf06fac11a'),
    new BackgroundImage('1694730024085-cdddb2b09ca8'),
    new BackgroundImage('1724485755151-d81ff7a28269'),
    new BackgroundImage('1538843586417-c6a03b5230ff'),
    new BackgroundImage('1561978248-bffcdd0457ad'),
  ],
  // November 10
  [
    new BackgroundImage('1635604028002-b474fb8d8173'),
    new BackgroundImage('1710580935626-91c0319cb1b4'),
    new BackgroundImage('1632225247056-8d70265675f7'),
    new BackgroundImage('1666513387827-f16e52ee4ef1'),
  ],
  // December 11
  [
    new BackgroundImage('1601827008690-4b4e716fd556'),
    new BackgroundImage('1481450112092-f00a4c77e381'),
    new BackgroundImage('1545303234-0063837ea931'),
    new BackgroundImage('1554202218-95c83bad561c'),
    new BackgroundImage('1598273953244-af803c254447'),
    new BackgroundImage('1670437631501-3b63d702e2d7'),
    new BackgroundImage('1692883952024-c6de94404e32'),
    new BackgroundImage('1637771892661-c15429d90b75'),
  ]
]

function getBackgroundImageForCurrentMonth(month: Month = new Date().getMonth() as Month) {
  const imagesForCurrentMonth = backgroundImages[month]

  const randomImage = imagesForCurrentMonth![Math.floor(Math.random() * imagesForCurrentMonth!.length)]

  return randomImage!
}

const backgroundImage = reactive(getBackgroundImageForCurrentMonth())

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
