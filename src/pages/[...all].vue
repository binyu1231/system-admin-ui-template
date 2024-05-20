<script setup lang="ts">
const router = useRouter()
const route = useRoute()
function handleBackHome() {
  router.replace('/dashboard')
}

onBeforeMount(() => {
  if (route.path === '/') handleBackHome()
})



</script>
<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center gap-6">
    <GradientColorText class="text-2xl font-800">404 Not Found</GradientColorText>

    <GlassButton @click="handleBackHome">Go Home</GlassButton>
  </div>
</template>
