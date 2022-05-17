<script lang="ts">
import ClockFace from "./components/ClockFace.vue";
import TimeAdjustment from "./components/TimeAdjustment.vue";
import TimerControl from "./components/TimerControl.vue";
import BackgroundCanvas from "./components/BackgroundCanvas.vue";

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    let passwordCorrect = false;
    return {
      passwordCorrect,
    };
  },
  components: {
    ClockFace,
    TimeAdjustment,
    TimerControl,
    BackgroundCanvas,
  },
  mounted() {
    const passwordInput: unknown = this.$refs["password"];
    if (passwordInput) {
      (passwordInput as HTMLInputElement).focus();
    }
  },
  methods: {
    validatePassword(event: Event) {
      const passwordInput: unknown = this.$refs["password"];
      if (passwordInput) {
        const password = (passwordInput as HTMLInputElement).value;
        this.passwordCorrect = password === import.meta.env.VITE_PASSWORD;
      }
      event.preventDefault();
    },
  },
});
</script>

<template>
  <main v-if="passwordCorrect">
    <ClockFace />
    <TimeAdjustment />
    <TimerControl />
    <BackgroundCanvas />
  </main>
  <section v-else>
    <form @submit="validatePassword($event)">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        ref="password"
        aria-label="password"
      />
    </form>
  </section>
</template>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/variables.scss";

#app {
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: $app_width;
}
main {
  width: 100%;
  height: 100%;
}
label {
  margin-right: 1em;
}
form {
  display: flex;
  flex-direction: column;
  color: black;
}
</style>
