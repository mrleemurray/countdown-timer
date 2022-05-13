<script setup lang="ts">
import AnalogClock from "./AnalogClock.vue";
import DigitalClock from "./DigitalClock.vue";

</script>

<template>
  <div class="clock-face">
    <AnalogClock />
    <DigitalClock />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.clock-face {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
