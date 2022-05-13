<script lang="ts">
import { defineComponent } from "vue";
import { useTimerStore } from "../stores/timer";

export default defineComponent({
  setup() {
    return {
      timer: useTimerStore(),
    };
  },
  data() {
    return {
      currentHour: 0,
      currentMinute: 0,
      currentSecond: 0,
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
    updateHour() {
      this.timer.updateHour(this.currentHour);
    },
    updateMinute() {
      this.timer.updateMinute(this.currentMinute);
    },
    updateSecond() {
      this.timer.updateSecond(this.currentSecond);
    },
  },
});
</script>

<template>
  <div id="input-group">
    <div class="picker-container">
      <VueScrollPicker
        :options="hours"
        v-model="currentHour"
        @update:modelValue="updateHour"
      />
      <p>hours</p>
    </div>
    <div class="picker-container">
      <VueScrollPicker
        :options="minutes"
        v-model="currentMinute"
        @update:modelValue="updateMinute"
      />
      <p>minutes</p>
    </div>
    <div class="picker-container">
      <VueScrollPicker
        :options="seconds"
        v-model="currentSecond"
        @update:modelValue="updateSecond"
      />
      <p>seconds</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
#input-group {
  padding: 2rem 0;
  display: flex;
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
