import { defineStore } from "pinia";

let timer = -1;
export enum TimerState {
  RUNNING,
  STOPPED,
  PAUSED,
  FINISHED,
}

export const useTimerStore = defineStore({
  id: "timer",
  state: () => ({
    currentHour: 0,
    currentMinute: 0,
    currentSecond: 0,
    state: TimerState.STOPPED,
    totalSeconds: 0,
    setTime: 0,
  }),
  actions: {
    start() {
      if (this.state !== TimerState.PAUSED) {
        this.updateTotalSecondsRemaining();
      }
      if (this.totalSeconds > 0) {
        timer = setInterval(() => {
          this.totalSeconds--;
          if (this.totalSeconds <= 0) {
            this.state = TimerState.FINISHED;
            clearInterval(timer);
          }
        }, 1000);
        this.state = TimerState.RUNNING;
      }
    },
    stop() {
      this.updateTotalSecondsRemaining();
      clearInterval(timer);
      this.state = TimerState.STOPPED;
    },
    pause() {
      clearInterval(timer);
      this.state = TimerState.PAUSED;
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
      this.setTime = this.totalSeconds;
    },
  },
});
