<script lang="ts">
import { defineComponent } from "vue";
import { useTimerStore, TimerState } from "../stores/timer";

export default defineComponent({
  setup() {
    return {
      timer: useTimerStore(),
      TimerState,
    };
  },
  computed: {
    hours() {
      return Array.from({ length: 24 }, (_, index) => index);
    },
    minutes() {
      return Array.from({ length: 60 }, (_, index) => index);
    },
    seconds() {
      return Array.from({ length: 60 }, (_, index) => index);
    },
  },
  methods: {
    updateHour(event: number) {
      this.timer.updateHour(event);
    },
    updateMinute(event: number) {
      this.timer.updateMinute(event);
    },
    updateSecond(event: number) {
      this.timer.updateSecond(event);
    },
  },
});
</script>

<template>
  <div id="input-group" :class="{ hide: timer.state !== TimerState.STOPPED }">
    <div class="picker-container">
      <VueScrollPicker
        :options="hours"
        @update:modelValue="updateHour($event)"
      />
      <p>hours</p>
    </div>
    <div class="picker-container">
      <VueScrollPicker
        :options="minutes"
        @update:modelValue="updateMinute($event)"
      />
      <p>minutes</p>
    </div>
    <div class="picker-container">
      <VueScrollPicker
        :options="seconds"
        @update:modelValue="updateSecond($event)"
      />
      <p>seconds</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
#input-group {
  padding: 2rem 0 0rem;
  display: flex;
  opacity: 1;
  transition: opacity 0.5s 0.4s ease-in-out, margin 0.4s ease-out;
  margin-top: 0px;
  &.hide {
    opacity: 0;
    margin-top: -128px;
    transition: opacity 0.2s ease-in-out, margin 0.4s 0.2s ease-out;
    pointer-events: none;
  }
}
.picker-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  position: absolute;
  margin-top: 0.25rem;
  font-size: 1.1rem;
}
</style>
