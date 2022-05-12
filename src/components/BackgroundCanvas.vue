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
}
</style>
