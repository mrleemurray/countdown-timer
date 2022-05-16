<script lang="ts">
import { useTimerStore, TimerState } from "../stores/timer";

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const timer = useTimerStore();

    function start() {
      if (
        timer.state === TimerState.STOPPED ||
        timer.state === TimerState.PAUSED
      ) {
        timer.start();
      } else if (timer.state === TimerState.FINISHED) {
        timer.stop();
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
    validTimerState(): boolean {
      return (
        this.timer.currentSecond > 0 ||
        this.timer.currentMinute > 0 ||
        this.timer.currentHour > 0 ||
        this.timer.state === TimerState.FINISHED
      );
    },
    primaryButtonText(): string {
      let text = "";
      switch (this.timer.state) {
        case TimerState.STOPPED:
          text = "Start";
          break;
        case TimerState.RUNNING:
          text = "Pause";
          break;
        case TimerState.PAUSED:
          text = "Resume";
          break;
        case TimerState.FINISHED:
          text = "Done";
          break;
        default:
          text = "Start";
          break;
      }
      return text;
    },
  },
});
</script>

<template>
  <div
    class="controls"
    :class="{ running: timer.state !== TimerState.STOPPED }"
  >
    <button
      v-if="
        timer.state !== TimerState.STOPPED &&
        timer.state !== TimerState.FINISHED
      "
      @click="stop()"
    >
      Cancel
    </button>

    <button
      class="primary"
      :class="{
        large:
          timer.state === TimerState.STOPPED ||
          timer.state === TimerState.FINISHED,
      }"
      @click="start()"
      :disabled="!validTimerState"
    >
      {{ primaryButtonText }}
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.controls {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 0px;
  z-index: 999;
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
  flex-grow: 0;
  transition: flex-grow 0.2s ease, background-color 0.2s ease, opacity 0.2s ease;

  &:active {
    background-color: darken($accent_color, 20%);
  }

  &.primary {
    align-self: end;
    background-color: $accent_color;
    color: $background_color;
    border: none;
    &:active {
      background-color: darken($accent_color, 10%);
    }
    &:disabled {
      background-color: desaturate($accent_color, 100%);
      opacity: 0.5;
      color: $background_color;
    }
  }

  &.large {
    flex-grow: 1;
    align-self: end;
  }
}
</style>
