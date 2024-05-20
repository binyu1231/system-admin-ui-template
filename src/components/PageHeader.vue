<script lang="ts" setup>
import { routes } from '../router';
const router = useRouter()
const route = useRoute()
const { signout } = useSystemAccess()

async function handleSignout() {
  await signout()
  router.replace('/access/signin')
}
</script>

<template>
  <div class="cp-page-header">
    <!-- -->
    <div class="flex w-full">
      <div class="cp-page-header-title">
        <GradientHead :level="3" class="text-nowrap">
          物联网智慧园区
        </GradientHead>
        <GradientColorText class="text-xl font-700 text-nowrap">
          IoT Smart Park System
        </GradientColorText>
      </div>
      <ul class="cp-page-header-nav">
        <li v-for="rt in routes">
          <RouterLink :to="rt.default || rt.path">
            <GlassButton 
              :active="route.path.startsWith(rt.path)">
              {{ rt.name }}
            </GlassButton>
          </RouterLink>
        </li>
      </ul>

      <div class="cp-page-header-opt">
        <GlassButton arrow @click="handleSignout">
          退出
        </GlassButton>
      </div>
    </div>

  </div>
</template>

<style lang="postcss">
.cp-page-header {
  @apply flex items-center h-20 pl-28 pr-8;
}

.cp-page-header-title {
  @apply  flex items-center gap-4;
}

.cp-page-header-nav {
  @apply ml-10 flex-1 flex justify-end items-center gap-4;
}

.cp-page-header-opt {
  @apply ml-10 flex items-center;
}
</style>
