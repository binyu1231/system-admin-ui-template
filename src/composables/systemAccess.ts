import { useStorage } from '@vueuse/core'

export interface User {
  account: string
  password: string
  role: Role['id']
  name: string
}

export interface Role {
  id: number,
  name: string
}

export function useSystemAccess () {

  const state = useStorage<{ user: User | null}>(
    'U_SYSTEM_ACCESS', 
    { user: null  }
  )

  const roles: Role[] = [
    { id: 1, name: '角色1' },
    { id: 2, name: '角色2' },
  ]
  const users: User[] = [
    { 
      role: 1, 
      account: '66810', 
      password: '66810', 
      name: '操作员1'
    },
    { 
      role: 2, 
      account: '77324', 
      password: '77324', 
      name: '操作员2'
    },
  ]

  const isSignin = computed(() => !!state.value.user)
  const role = computed(() => {
    return roles.find(r => state.value.user?.role) || null
  })

 
  function signin(account: string, password: string) {

    return new Promise((resolve, reject) => {
      if (state.value.user) resolve('登录成功')
      // const _user = true
      const u = users.find(r => r.account === account)

      if (!u) return reject('没有此用户')
      if (u.password !== password) return reject('密码错误')

      state.value.user = u

      resolve('登录成功')
    })
  }

  function signout() {
    return new Promise((resolve, reject) => {

      state.value.user = null

      return resolve('退出登录')
    })
  }


  return {
    isSignin,
    role,
    users,
    signin,
    signout,
    state
  }

}