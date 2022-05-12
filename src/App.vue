<script setup lang="ts">
import AnalogClock from "./components/AnalogClock.vue";
import TimeAdjustment from "./components/TimeAdjustment.vue";
import DigitalClock from "./components/DigitalClock.vue";
import TimerControl from "./components/TimerControl.vue";
import BackgroundCanvas from "./components/BackgroundCanvas.vue";
</script>

<template>
  <main>
    <AnalogClock />
    <DigitalClock />
    <TimeAdjustment />
    <TimerControl />
    <BackgroundCanvas />
  </main>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/variables.scss";

#app {
  // max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  // padding: 2rem;

  // font-weight: normal;
}

// header {
//   line-height: 1.5;
// }

// .logo {
//   display: block;
//   margin: 0 auto 2rem;
// }

// a,
// .green {
//   text-decoration: none;
//   // color: hsla(160, 100%, 37%, 1);
//   color: $variable_name;
//   transition: 0.4s;
// }

// @media (hover: hover) {
//   a:hover {
//     background-color: hsla(160, 100%, 37%, 0.2);
//   }
// }

@media (min-width: 1024px) {
  // body {
  //   display: flex;
  //   place-items: center;
  // }

  // #app {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   padding: 0 1rem;
  // }

  // header {
  //   display: flex;
  //   place-items: center;
  //   padding-right: calc(var(--section-gap) / 2);
  // }

  // header .wrapper {
  //   display: flex;
  //   place-items: flex-start;
  //   flex-wrap: wrap;
  // }

  // .logo {
  //   margin: 0 2rem 0 0;
  // }
}
</style>
