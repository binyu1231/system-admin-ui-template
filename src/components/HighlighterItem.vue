<template>
  <div class="highlighter-item">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HighlighterItem'
})
</script>
<style lang="postcss">
.highlighter-item {
  @apply
    relative
    h-full 
    p-px 
    overflow-hidden
  ;
}
.highlighter-item::before {
  content: '';
  @apply 
    absolute 
    w-96 
    h-96 
    -left-48 
    -top-48
    bg-indigo-500 
    rounded-full 
    opacity-0
    pointer-events-none 
    transition-opacity 
    duration-500 
    translate-x-[var(--mouse-x)]
    translate-y-[var(--mouse-y)]
    z-30 
    blur-[100px]
}

.highlighter-item:hover::before {
  @apply opacity-20;
}
</style>
