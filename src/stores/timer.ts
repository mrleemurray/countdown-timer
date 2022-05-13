import { defineStore } from "pinia";

export const useTimerStore = defineStore({
  id: "timer",
  state: () => ({
    currentHour: 11,
    currentMinute: 20,
    currentSecond: 30,
    isRunning: false,
    totalSeconds: 0,
    timer: -1,
  }),
  actions: {
    startCountdown() {
      this.updateTotalSecondsRemaining();
      this.timer = setInterval(() => {
        this.totalSeconds--;
        console.info(this.totalSeconds);
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.timer);
      this.timer = -1;
    },
    updateHour(hour: number) {
      this.currentHour = hour;
      this.updateTotalSecondsRemaining();
    },
    updateMinute(minute: number) {
      this.currentMinute = minute;
      this.updateTotalSecondsRemaining();
    },
    updateSecond(second: number) {
      this.currentSecond = second;
      this.updateTotalSecondsRemaining();
    },
    updateTotalSecondsRemaining() {
      this.totalSeconds =
        this.currentHour * 3600 + this.currentMinute * 60 + this.currentSecond;
    }
  },
});
