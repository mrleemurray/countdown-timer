<script setup lang="ts">
// defineProps<{
//   msg: string;
// }>();
</script>

<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="48" />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
/* Sets the containers height and width */
.base-timer {
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  box-shadow: 0 0 4px 4px #00000022;
  outline: 1px solid #ffffff66;
  outline-offset: -12px;
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

.pulse {
  animation: pulse-animation 1.5s infinite ease;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px #ffffff33;
  }
  100% {
    box-shadow: 0 0 0 40px rgba(0, 0, 0, 0);
  }
}
</style>
