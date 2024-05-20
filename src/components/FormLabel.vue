<script lang="ts" setup>
import { Icon } from '@iconify/vue';
defineProps<{
  icon?: string
}>()
</script>

<template>
  <label class="cp-form-label" v-bind="$attrs">
    <!-- -->
    <Icon v-if="icon" class="cp-form-label-icon" :icon="icon" />
    <slot></slot>
  </label>
</template>

<style lang="postcss">
.cp-form-label {
  @apply block text-sm text-slate-300 font-medium mb-1 flex items-center;
}

.cp-form-label-icon {
  @apply mr-1;
}
</style>
