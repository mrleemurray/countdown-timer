<script lang="ts">
import { useTimerStore, TimerState } from "../stores/timer";
import { defineComponent } from "vue";

const NUM_DASHES = 303;

export default defineComponent({
  setup() {
    const timer = useTimerStore();
    return {
      timer,
      TimerState,
    };
  },
  computed: {
    renderTimePercentage(): string {
      const dashOffset = `stroke-dashoffset: ${
        (this.calculateTimeFraction() * NUM_DASHES).toFixed(0)
      };`;
      return dashOffset;
    },
    indicatorRotation(): string {
      const rotation = 1 - this.calculateTimeFraction() * 360;
      return `transform: rotate(${rotation}deg);`;
    },
  },
  methods: {
    calculateTimeFraction() {
      const rawTimeFraction =
        this.timer.secondsElapsed / this.timer.targetTimeInSeconds;
      const timeFraction =
        rawTimeFraction -
        (1 / this.timer.targetTimeInSeconds) * (1 - rawTimeFraction);
      console.info(timeFraction);
      return rawTimeFraction;
    },
  },
});
</script>

<template>
  <div
    class="base-timer"
    :class="{ pulse: timer.state === TimerState.FINISHED }"
  >
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="48.5" />
        <circle
          class="base-timer__path-remaining"
          :class="{
            inactive: timer.state !== TimerState.RUNNING,
            active:
              timer.state === TimerState.RUNNING ||
              timer.state === TimerState.PAUSED,
          }"
          cx="50"
          cy="50"
          r="48.5"
          :style="renderTimePercentage"
        />
      </g>
    </svg>
    <div
      id="indicator"
      :class="{
        inactive: timer.state !== TimerState.RUNNING,
        hidden:
          timer.state === TimerState.FINISHED ||
          timer.state === TimerState.STOPPED,
      }"
      :style="indicatorRotation"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.base-timer {
  position: relative;
  display: flex;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  box-shadow: 0 0 4px 4px #00000022;
  transition: all 0.5s ease-in-out;
  &.pulse {
    animation: pulse-animation 1.5s 1s infinite ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 0 1px $accent_color;
    border-radius: 50%;
    transition: all 0.5s ease-out;
    opacity: 0;
  }
  &.pulse::after {
    animation: secondary-pulse-animation 2.5s 1.5s infinite;
  }
}

.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__path-elapsed {
  stroke-width: $path_width;
  stroke: $path_elapsed_color;
}

.base-timer__path-remaining {
  stroke-width: $path_width;
  stroke-dasharray: 303;
  stroke-dashoffset: 303;
  transform-origin: center;

  stroke: $accent_color;
  transform: rotate(-90deg);

  stroke-opacity: 0;

  &.active {
    stroke-opacity: 1;
    transition: 1s linear stroke-dashoffset, 1s linear stroke-opacity;
  }

  &.inactive {
    transition: 1s linear stroke-dashoffset, 0.1s 1s linear stroke-opacity;
  }
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px #ffffff33;
  }
  100% {
    box-shadow: 0 0 0 40px #00000000;
  }
}

@keyframes secondary-pulse-animation {
  0% {
    opacity: 0;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
  1% {
    opacity: 1;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
  100% {
    opacity: 0;
    top: -36px;
    left: -36px;
    bottom: -36px;
    right: -36px;
  }
}

#indicator {
  position: absolute;
  width: 32px;
  height: 50%;
  left: calc(50% - 16px);
  transform-origin: bottom;
  transition: 1s linear all;

  &::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    left: 0px;
    top: -10px;
    border-radius: 50%;
    background-color: $accent_color;
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
    transition: 0.5s ease all;
  }
  &.inactive::before {
    transform: scale(0);
    opacity: 0;
    transition: 0.5s 1s ease all;
  }
}
</style>
