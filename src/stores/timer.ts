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
    secondsElapsed: 0,
    targetTimeInSeconds: 0,
  }),
  actions: {
    start() {
      if (this.state !== TimerState.PAUSED) {
        this.resetTimer();
      }
      if (this.secondsElapsed < this.targetTimeInSeconds) {
        timer = setInterval(() => {
          this.secondsElapsed += 1;
          if (this.secondsElapsed >= this.targetTimeInSeconds) {
            this.state = TimerState.FINISHED;
            clearInterval(timer);
          }
        }, 1000);
        this.state = TimerState.RUNNING;
      }
    },
    stop() {
      this.resetTimer();
      clearInterval(timer);
      this.state = TimerState.STOPPED;
    },
    pause() {
      clearInterval(timer);
      this.state = TimerState.PAUSED;
    },
    updateHour(hour: number) {
      this.currentHour = hour;
      this.resetTimer();
    },
    updateMinute(minute: number) {
      this.currentMinute = minute;
      this.resetTimer();
    },
    updateSecond(second: number) {
      this.currentSecond = second;
      this.resetTimer();
    },
    resetTimer() {
      this.secondsElapsed = 0;
      this.targetTimeInSeconds =
        this.currentHour * 3600 + this.currentMinute * 60 + this.currentSecond;
    },
  },
});
