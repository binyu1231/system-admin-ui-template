<script lang="ts" setup>
withDefaults(
  defineProps<{
    arrow?: boolean
    active?: boolean
  }>(),
  {
    active: false,
    arrow: false
  }
)
</script>

<template>
  <div class="cp-glass-button" :class="{ active }">
    <div class="cp-glass-button-inner btn-sm group" :class="{ active }">
    <!-- -->
    <span class="relative inline-flex items-center">
      <slot></slot>
      <span 
        v-if="arrow" 
        class="tracking-normal text-indigo-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
    </span>
    
  </div>
  </div>

</template>

<style lang="postcss">
.cp-glass-button {
  @apply inline-flex relative select-none;
}

.cp-glass-button.active::before {
  content: "";
  @apply absolute inset-0 bg-indigo-500 blur-md;
}
.cp-glass-button-inner {
  @apply 
    text-slate-300 
    hover:text-white 
    transition 
    duration-150 
    ease-in-out  
    [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] 
    /* [background:
      linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,
      _conic-gradient(theme(colors.slate.400),
      _theme(colors.slate.700)_25%,
      _theme(colors.slate.700)_75%,
      _theme(colors.slate.400)_100%)_border-box
    ]  */
    relative;
}

.cp-glass-button-inner::before {
  content: "";
  @apply
    absolute 
    inset-0 
    bg-slate-800/30 
    rounded-full 
    pointer-events-none;
}

.cp-glass-button-inner.active {
  
  @apply
    [background:linear-gradient(theme(colors.indigo.500),_theme(colors.indigo.500))_padding-box,_linear-gradient(theme(colors.indigo.500),_theme(colors.indigo.200)_75%,_theme(colors.transparent)_100%)_border-box] 
    /* 
    [background:
    linear-gradient(theme(colors.indigo.500),_theme(colors.indigo.500))_padding-box,
    _linear-gradient(theme(colors.indigo.500),
    _theme(colors.indigo.200)_75%,
    _theme(colors.transparent)_100%)_border-box
    ]  
    */
             
    shadow;
}

.cp-glass-button-inner.active::before {
  @apply 
    blur-md
  bg-slate-800;
}
</style>
