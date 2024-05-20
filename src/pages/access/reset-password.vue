<script lang="ts" setup>
const router = useRouter()

function changePassword() {
  router.replace('/access/signin')
}
</script>

<template>
  <main class="grow">

    <section class="relative">

      <!-- Illustration -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true">
        <img src="../../assets/images/auth-illustration.svg" class="max-w-none" width="1440" height="450" alt="Page Illustration">
      </div>

      <div class="md:block absolute left-1/2 -translate-x-1/2 ml-5 mt-50 pointer-events-none -z-10"
        aria-hidden="true">
        <img 
          src="../../assets/images/auth-decorator.png" 
          class="max-w-none" 
          width="360" 
          alt="Page Illustration">
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">

          <!-- Page header -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <!-- Logo -->
            <div class="mb-5">
              <router-link class="inline-flex" to="/">
                <div
                  class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                  <img class="relative" src="../../assets/images/logo.svg" width="42" height="42" alt="Stellar">
                </div>
              </router-link>
            </div>
            <!-- Page title -->
            <GradientHead :level="2">
              修改密码
            </GradientHead>
            <GradientHead :level="4">
              Reset your password
            </GradientHead>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">

            <form>
              <div class="space-y-4">
                <div>
                  <FormLabel for="text" icon="ant-design:user-outlined">
                    用户名
                  </FormLabel>
                  <input id="text" class="form-input w-full" type="text" required />
                </div>
                <div>
                  <div class="flex justify-between">
                    <FormLabel for="password" icon="ant-design:key-outlined">
                      密码
                    </FormLabel>
                 
                  </div>
                  <input id="password" class="form-input w-full" type="password" autocomplete="on" required />
                </div>
                <div>
                  <div class="flex justify-between">
                    <FormLabel icon="ant-design:key-outlined">
                      确认密码
                    </FormLabel>
                  </div>
                  <input id="password" class="form-input w-full" type="password" autocomplete="on" required />
                </div>
              </div>
              <div class="mt-6">
                <Button @click="changePassword" class="w-full">
                  确认修改
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>

  </section>

</main></template>

<style lang="postcss">
.signin {
  
}</style>
