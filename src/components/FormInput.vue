<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <input v-bind="$attrs" v-model="modelValue" class="form-input w-full" />
</template>
