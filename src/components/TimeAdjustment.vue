<script lang="ts">
// import type { VueScrollPickerOption } from "vue-scroll-picker";
import { defineComponent } from "vue";
// import type { PropType } from "vue";

export default defineComponent({
  components: {
    // VueScrollPicker,
  },
  props: {
    // options: {
    //   type: Array as PropType<VueScrollPickerOption[]>,
    //   default: () => [],
    // },
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
      return Array.from({ length: 23 }, (_, index) => index);
    },
    minutes() {
      return Array.from({ length: 59 }, (_, index) => index);
    },
    seconds() {
      return Array.from({ length: 59 }, (_, index) => index);
    },
  },
});
</script>

<template>
  <div id="input-group">
    <VueScrollPicker :options="hours" v-model="currentHour" />
    <VueScrollPicker :options="minutes" v-model="currentMinute" />
    <VueScrollPicker :options="seconds" v-model="currentSecond" />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
#input-group {
  display: flex;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

vue-scroll-picker > .vue-scroll-picker-layer-bottom {
  border-top: 1px solid #ff00ff !important;
}
</style>
