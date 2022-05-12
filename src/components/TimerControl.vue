<script setup lang="ts">
// defineProps<{
//   msg: string;
// }>();
</script>

<template>
  <div class="controls">
    <button @click="cancel">Cancel</button>
    <button @click="start">Start</button>
  </div>
</template>

<style scoped lang="scss">
.controls {
  display: flex;
  justify-content: center;
}
</style>
