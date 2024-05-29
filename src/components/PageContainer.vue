<script lang="ts" setup>
import { useSlots } from 'vue'
defineProps<{
  hiddenDeco?: boolean
}>()

const slots = useSlots()
</script>

<template>
  <div class="cp-page-container">
    

    <div v-if="!hiddenDeco" 
      class="cp-page-cont-deco z-10 dark:bg-gray-800 select-none w-100vw fixed inset-0 h-100vh overflow-hidden">
      <Particles class="absolute inset-0"  />
      
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <img src="../assets/images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
      </div>
      <!-- Radial gradient -->
      <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div class="absolute inset-0 translate-z-0 bg-indigo-500 rounded-full blur-[120px] opacity-30"></div>
        <div class="absolute w-64 h-64 translate-z-0 bg-indigo-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      


      <div class="absolute inset-0 transform translate-x-150% -translate-y-40% pointer-events-none w-[40vw] h-[40vw] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
        <div class="h-[200%] animate-endless">
          <div class="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
          <div class="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.indigo.500)_48px,_theme(colors.indigo.500)_49px)]"></div>
          <div class="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
          <div class="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.indigo.500)_48px,_theme(colors.indigo.500)_49px)]"></div>
        </div>
      </div>

      <svg class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md" width="480" height="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
            <stop offset="0%" stop-color="#A855F7" />
            <stop offset="76.382%" stop-color="#FAF5FF" />
            <stop offset="100%" stop-color="#6366F1" />
          </linearGradient>
        </defs>
        <g fill-rule="evenodd">
          <path class="pulse" fill="url(#pulse-a)" fill-rule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"></path>
          <path class="pulse pulse-1" fill="url(#pulse-a)" fill-rule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"></path>
          <path class="pulse pulse-2" fill="url(#pulse-a)" fill-rule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"></path>
        </g>
      </svg>
    </div>
    <div class="md:block fixed -left-6 -top-4 ml-5 pointer-events-none z-20"
      aria-hidden="true">
      <img 
        src="../assets/images/auth-decorator.png" 
        class="max-w-none" 
        width="140" 
        alt="Page Illustration">
    </div>
    <PageHeader class="z-20" />
    <div v-if="slots.default" class="relative flex flex-col z-20 flex-1 overflow-y-auto">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="postcss">
.animate-endless {
  animation: endless 20s linear infinite;
}
.cp-page-container {
  @apply w-full flex flex-col overflow-hidden;
}

.cp-page-container.bg-deco {
  @apply ;
}
</style>
