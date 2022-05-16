<script lang="ts">
import { useTimerStore, TimerState } from "../stores/timer";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const timer: any = useTimerStore();
    return {
      timer,
      TimerState,
    };
  },
  computed: {
    remainingTime(): any {
      const remainingSeconds =
        this.timer.targetTimeInSeconds - this.timer.secondsElapsed;
      let hours = this.padNumber(
        Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60))
      );
      let minutes = this.padNumber(
        Math.floor((remainingSeconds % (60 * 60)) / 60)
      );
      let seconds = this.padNumber(Math.floor(remainingSeconds % 60));
      return {
        hours,
        minutes,
        seconds,
      };
    },
  },
  methods: {
    padNumber(number: number): string {
      return number < 10 ? `0${number}` : `${number}`;
    },
  },
});
</script>

<template>
  <div class="time">
    <p>
      {{ remainingTime.hours
      }}<span
        class="separator"
        :class="{ blink: timer.state === TimerState.RUNNING }"
        >∶</span
      >{{ remainingTime.minutes
      }}<span
        class="separator"
        :class="{ blink: timer.state === TimerState.RUNNING }"
        >∶</span
      >{{ remainingTime.seconds }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.time {
  position: absolute;
  display: flex;
  justify-content: center;
  user-select: none;
}
p {
  font-size: 3rem;
}
.separator {
  &.blink {
    animation: blink 1s ease-out infinite;
  }
}

@keyframes blink {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
}
</style>
