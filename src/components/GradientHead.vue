<script lang="ts" setup>
withDefaults(defineProps<{ 
  level: 1 | 2 | 3 | 4
}>(), { level: 1 })
</script>

<template>
    <!-- -->
    <h1 v-bind="$attrs" class="cp-gradient-head" :class="['head' + level]">
      <slot></slot>
    </h1>
</template>

<style lang="postcss">
.cp-gradient-head {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60;
}
</style>
