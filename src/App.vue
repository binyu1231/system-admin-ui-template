<template>
  <!-- font-sans -->
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
// @ts-ignore
import AOS from 'aos'
import { toggleDark, useSystemAccess } from '~/composables'
import { useRouter } from 'vue-router'

const { isSignin } = useSystemAccess()

const router = useRouter()
// const route = useRoute()

onMounted(() => {
  toggleDark(true)
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 500,
    easing: 'ease-out-cubic',
  })

  if (!isSignin.value) {
    router.replace('/access/signin')
  }

})



</script>