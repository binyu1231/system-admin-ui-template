<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: 'base' | 'md' | 'sm' | 'lg'
    type?: 'normal' | 'lite',
  }>(),
  {
    type: 'normal'
  }
)

const btnClassName = computed(() => {
  const sizeName = props.size === 'sm' 
    ? 'btn-sm' 
    : props.size === 'lg'
      ? 'btn-lg'
      : 'btn' 
  return [sizeName, props.type]
})
</script>

<template>
  <button class="cp-button group" v-bind="$attrs" :class="btnClassName">
    <slot></slot>
    <span class="cp-button-arrow group-hover:translate-x-0.5">-&gt;</span>
  </button>
</template>

<style lang="postcss">
.cp-button {
  @apply 
    text-sm 
    text-white 
    bg-indigo-500  
    hover:bg-indigo-600 
    shadow-sm 
    transition 
    duration-150 
    ease-in-out;
}

.cp-button.lite {
  @apply 
  text-slate-900 
  bg-gradient-to-r 
  from-white/80 
  via-white 
  to-white/80 
  hover:bg-white;
}

.cp-button-arrow {
  @apply tracking-normal text-indigo-300 transition-transform duration-150 ease-in-out ml-1;
}


</style>
