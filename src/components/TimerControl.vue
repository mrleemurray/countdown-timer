<script lang="ts">
import { useTimerStore } from "../stores/timer";

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const timer = useTimerStore();

    function startTimer() {
      timer.startCountdown();
    }
    function stopTimer() {
      timer.stopCountdown();
    }

    return {
      startTimer,
      stopTimer,
    };
  },
});
</script>

<template>
  <div class="controls">
    <button @click="stopTimer">Cancel</button>
    <button class="primary" @click="startTimer">Start</button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.controls {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

button {
  font-size: 1.1rem;
  width: 100px;
  height: 50px;
  border-radius: 50px;
  background-color: transparent;
  color: $foreground_color;
  border: 2px solid $foreground_color;
  box-shadow: 0 0 0 2px #00000022;

  &:active {
    background-color: darken($accent_color, 20%);
    // color: $background_color;
  }

  &.primary {
    background-color: $accent_color;
    color: $background_color;
    border: none;
    &:active {
      background-color: darken($accent_color, 10%);
    }
  }
}
</style>
