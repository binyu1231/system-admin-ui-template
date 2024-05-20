<script setup lang="ts">
const router = useRouter()

function handleBackHome() {
  router.replace('/dashboard')
}
</script>
<template>
  <div>
    <div>404 Not Found</div>

    <GlassButton @click="handleBackHome">Go Home</GlassButton>
  </div>
</template>
