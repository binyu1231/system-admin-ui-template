<script lang="ts" setup>
import { useSystemAccess } from '~/composables'

const router = useRouter()
const { signin } = useSystemAccess()

const username = ref('')
const password = ref('')

function handleSignin() {
  if (!username.value) return window.alert('用户名不能为空')
  if (!password.value) return window.alert('密码不能为空')
  console.log(username.value, password.value)
  signin(username.value, password.value)
  .then(() => {
    router.replace('/dashboard')
  })
  .catch(e => {
    window.alert(e)
  })
}


</script>

<template>
  <main class="grow overflow-hidden">

    <section class="relative">
      <Particles class="absolute inset-0 -z-10" />
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
              商业数据洞察系统
            </GradientHead>
            <GradientHead :level="4">
              Business Insight System
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
                  <FormInput 
                    v-model="username" 
                    id="text" 
                    type="text" 
                    required />
                </div>
                <div>
                  <div class="flex justify-between">
                    <FormLabel for="password" icon="ant-design:key-outlined">
                      密码
                    </FormLabel>
                    <HyperLink to="/access/reset-password">忘记密码?</HyperLink>
                  </div>
                  <FormInput
                    v-model="password" 
                    id="password" 
                    type="password" required />
                </div>
              </div>
            </form>
            <div class="mt-6">
                <Button @click="handleSignin" class="w-full">
                  登录
                </Button>
              </div>
            <div class="text-center mt-4">
              <div class="text-sm text-slate-400">
                <HyperLink to="">
                  I Need You技术发展有限公司
                </HyperLink>
                提供技术支持
              </div>
            </div>

            <!-- Divider -->
            <!-- <div class="flex items-center my-6">
              <div class="border-t border-slate-800 grow mr-3" aria-hidden="true"></div>
              <div class="text-sm text-slate-500 italic">or</div>
              <div class="border-t border-slate-800 grow ml-3" aria-hidden="true"></div>
            </div> -->

            <!-- Social login -->
            <!-- <div class="flex space-x-3">
              <button
                class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
                <span class="relative">
                  <span class="sr-only">Continue with Twitter</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                    <path
                      d="m4.34 0 2.995 3.836L10.801 0h2.103L8.311 5.084 13.714 12H9.482L6.169 7.806 2.375 12H.271l4.915-5.436L0 0h4.34Zm-.635 1.155H2.457l7.607 9.627h1.165L3.705 1.155Z" />
                  </svg>
                </span>
              </button>
              <button
                class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
                <span class="relative">
                  <span class="sr-only">Continue with GitHub</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                    <path
                      d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
                  </svg>
                </span>
              </button>
            </div> -->

          </div>

        </div>
      </div>

  </section>

</main></template>

<style lang="postcss">
.signin {
  
}</style>
