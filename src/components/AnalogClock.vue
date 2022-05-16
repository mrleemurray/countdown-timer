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
      console.info(rawTimeFraction);
      console.info(this.timer.secondsElapsed);
      console.info(this.timer.targetTimeInSeconds);
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
        inactive:
          timer.state !== TimerState.RUNNING ||
          timer.state === TimerState.PAUSED,
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
/* Sets the containers height and width */
.base-timer {
  position: relative;
  display: flex;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  box-shadow: 0 0 4px 4px #00000022;
  outline: 1px solid #ffffff00;
  outline-offset: -12px;
  transition: all 0.5s ease-in-out;
}

/* Removes SVG styling that would hide the time label */
.base-timer__circle {
  fill: none;
  stroke: none;
}

/* The SVG path that displays the timer's progress */
.base-timer__path-elapsed {
  stroke-width: 3px;
  stroke: #ffffff33;
}

.base-timer__path-remaining {
  stroke-width: 3px;
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

.pulse {
  animation: pulse-animation 1.5s 1s infinite ease,
    secondary-pulse 2.5s 1.5s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px #ffffff33;
  }
  100% {
    box-shadow: 0 0 0 40px #00000000;
  }
}

@keyframes secondary-pulse {
  0% {
    outline: 1px solid $accent_color;
    outline-offset: -12px;
  }
  100% {
    outline: 1px solid #ffffff00;
    outline-offset: 24px;
  }
}

#indicator {
  position: absolute;
  width: 9px;
  height: 50%;
  left: calc(50% - 6px);
  transform-origin: bottom;
  transition: 1s linear all;

  &::before {
    content: "";
    position: absolute;
    width: 9px;
    height: 36px;
    left: -4.5px;
    top: -12px;
    border-radius: 4.5px;
    background-color: $accent_color;
    opacity: 1;
    transition: 0.5s ease all;
  }
  &.inactive::before {
    top: 0px;
    height: 9px;
    border-radius: 0px;
    opacity: 0;
    transition: 0.5s 1s ease all;
  }
}
</style>
