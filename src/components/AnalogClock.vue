<script lang="ts">
import { useTimerStore, TimerState } from "../stores/timer";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const timer = useTimerStore();
    return {
      timer,
      TimerState,
    };
  },
  computed: {
    renderTimePercentage() {
      const dashArray = `${
        ((this.timer.totalSeconds / this.timer.setTime) *
        282).toFixed(0)} 282`;
      console.info(dashArray);
      return dashArray;
    },
    indicatorRotation() {
      const rotation =
        ((this.timer.totalSeconds / this.timer.setTime) * 360);
        console.info(rotation)
      return `transform: rotate(${rotation}deg);`;
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
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="48" />
        <path
          id="base-timer-path-remaining"
          :stroke-dasharray="renderTimePercentage"
          class="base-timer__path-remaining"
          d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
        ></path>
      </g>
    </svg>
    <div id="indicator" :style="indicatorRotation"></div>
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

  & svg {
    transform: scaleX(-1);
  }
}

/* Removes SVG styling that would hide the time label */
.base-timer__circle {
  fill: none;
  stroke: none;
}

/* The SVG path that displays the timer's progress */
.base-timer__path-elapsed {
  stroke-width: 4px;
  stroke: #ffffff33;
}

.base-timer__path-remaining {
  /* Just as thick as the original ring */
  stroke-width: 3.5px;

  /* Rounds the line endings to create a seamless circle */
  stroke-linecap: round;

  /* Makes sure the animation starts at the top of the circle */
  // transform: ;
  transform-origin: center;

  /* One second aligns with the speed of the countdown timer */
  transition: 1s linear all;

  /* Allows the ring to change color when the color value updates */
  stroke: currentColor;
  transform: rotate(90deg) scale(1.065);
}

.pulse {
  animation: pulse-animation 1.5s infinite ease,
    secondary-pulse 2.5s 0.5s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px #ffffff33;
  }
  100% {
    box-shadow: 0 0 0 40px rgba(0, 0, 0, 0);
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
  width: 12px;
  height: 50%;
  left: calc(50% - 6px);
  transform-origin: bottom;
  transition: 1s linear all;

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 48px;
    left: 0;
    top: 0;
    border-radius: 6px;
    background-color: $accent_color;
  }
}
</style>
