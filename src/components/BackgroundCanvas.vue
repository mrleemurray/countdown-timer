<script setup lang="ts"></script>

<template>
  <div class="background"></div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.background {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $background_color;
  // background-image: linear-gradient(to bottom, #2e1a47, #28173e, #211435, #1c112c, #170c23);
}
</style>
