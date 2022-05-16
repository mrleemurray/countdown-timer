<script setup lang="ts">
import ClockFace from "./components/ClockFace.vue";
import TimeAdjustment from "./components/TimeAdjustment.vue";
import TimerControl from "./components/TimerControl.vue";
import BackgroundCanvas from "./components/BackgroundCanvas.vue";
</script>

<template>
  <main>
    <ClockFace />
    <TimeAdjustment />
    <TimerControl />
    <BackgroundCanvas />
  </main>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/variables.scss";

#app {
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

main {
  width: 100%;
  height: 100%;
}
</style>
