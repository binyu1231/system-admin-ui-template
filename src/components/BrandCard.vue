<script lang="ts" setup>
withDefaults(
  defineProps<{
    brandIndex?: number
    title: string
    enTitle: string
    count?: number | string
    unit: string
  }>(),
  {
    brandIndex: 1,
    count: '--',
  }
)
</script>

<template>
  <div class="cp-brand-card">
    <!-- -->
    <div
      class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
      aria-hidden="true">
      <div
        class="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-indigo-500 transition-colors duration-500 ease-in-out blur-[60px]">
      </div>
    </div>


    <div class="flex p-3 pr-6 h-full gap-2">
      <img :src="`/carousel-icon-0${brandIndex}.svg`" width="56" height="56" alt="Icon 01">
      <div class="grow">
        <div class="font-bold text-lg mb-1 text-nowrap">{{ title }}</div>
        <GradientColorText class="font-700 text-nowrap">{{ enTitle }}</GradientColorText>
      </div>
      <div class="flex items-center gap-1">
        <div class="lg:text-xl xl:text-2xl 2xl:text-4xl text-base font-700">{{ count }}</div>
        <div class="xl:pt-1 2xl:pt-2 text-base text-slate-4 font-700 lg:text-lg">{{ unit }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.cp-brand-card {
  @apply
  relative 
  h-full 
  border-1
  rounded-lg
  border-gray-700
  overflow-hidden
  bg-slate-900 bg-opacity-60 z-20 overflow-hidden;
}
</style>
