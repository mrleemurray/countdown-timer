<script lang="ts">
import { useTimerStore, TimerState } from "../stores/timer";

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const timer = useTimerStore();

    function start() {
      if (timer.state !== TimerState.RUNNING) {
        timer.start();
      } else {
        timer.pause();
      }
    }
    function stop() {
      timer.stop();
    }

    return {
      start,
      stop,
      timer,
      TimerState,
    };
  },
  computed: {
    validTimerState() {
      return (
        this.timer.currentSecond > 0 ||
        this.timer.currentMinute > 0 ||
        this.timer.currentHour > 0
      );
    },
    primaryButtonText() {
      let text = "";
      switch (this.timer.state) {
        case TimerState.STOPPED:
          text = "Start";
          break;
        case TimerState.STARTED:
          text = "Pause";
          break;
        case TimerState.PAUSED:
          text = "Resume";
          break;
        case TimerState.FINISHED:
          text = "Restart";
          break;
        default:
          text = "Start";
          break;
      }
      return text;
    }
  },
});
</script>

<template>
  <div
    class="controls"
    :class="{ running: timer.state === TimerState.RUNNING }"
  >
    <button @click="stop()">Cancel</button>
    <button class="primary" @click="start()" :disabled="!validTimerState">
      {{ primaryButtonText }}
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.controls {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 0px;
  transition: margin 0.2s ease-in-out;
  // position: absolute;
  &.running {
    margin-top: -96px;
  }
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
  }

  &.primary {
    background-color: $accent_color;
    color: $background_color;
    border: none;
    &:active {
      background-color: darken($accent_color, 10%);
    }
    &:disabled {
      background-color: desaturate($accent_color, 100%);
      color: $background_color;
    }
  }
}
</style>
