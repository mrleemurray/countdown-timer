<script lang="ts">
import { useTimerStore } from "../stores/timer";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const timer = useTimerStore();

    return {
      timer,
    };
  },
  computed: {
    currentSeconds() {
      return this.timer.totalSeconds;
    },
    remainingTime() {
      let hours = Math.floor((this.timer.totalSeconds % (60 * 60 * 24)) / (60 * 60));
      let minutes = Math.floor((this.timer.totalSeconds % (60 * 60)) / (60));
      let seconds = Math.floor((this.timer.totalSeconds % (60)) );
      return {
        hours,
        minutes,
        seconds,
      };
    },
  },
});
</script>

<template>
  <div class="time">
    <p>
      {{ remainingTime.hours }}<span class="separator">∶</span>{{ remainingTime.minutes
      }}<span class="separator">∶</span>{{ remainingTime.seconds }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.time {
  position: absolute;
  display: flex;
  justify-content: center;
}
p {
  font-size: 3rem;
}
.separator {
  // margin: 0.25rem 0.25rem;
}
</style>
