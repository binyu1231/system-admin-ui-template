<script lang="ts" setup>
import { isBoolean, isString, isDefind } from '@coloration/kit'
const emits = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()

const props = defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  modelValue: {
    type: [String, Boolean, Number, Array]
  },
  value: {
    type: [String, Boolean, Number]
  },
  checked: {
    type: [Boolean],
    default: undefined
  }
})

const _check = ref(props.checked || false)

watchEffect(() => {
  const mv: any = props.modelValue
  let checkStatus = false

  if (isBoolean(props.checked)) {
    checkStatus = props.checked as boolean

  }
  else if (isDefind(mv)) {
    if (isBoolean(mv)) {
      checkStatus = mv
    }
    else if (mv === props.value || mv?.findIndex?.((v: any) => v === props.value) >= 0) {
      checkStatus = true
    }
  }

  if (_check.value !== checkStatus) _check.value = checkStatus
})


function handleModelValueChange (e: any) {
  const modelValue: any = props.modelValue

  if (isString(modelValue)) {

    const value = modelValue === e.target.value ? '' : e.target.value
    emits('update:modelValue', value)
  }
  else if (isBoolean(modelValue)) {
    emits('update:modelValue', e.target.checked)
  }
  else if (modelValue.findIndex) {
    const newValue = modelValue.slice()
    const idx = newValue?.findIndex((v: any) => v === e.target.value)
    if (idx < 0) {
      newValue.push(e.target.value)
      
    }
    else {
      newValue.splice(idx, 1)
    }

    emits('update:modelValue', newValue)
  }
}
</script>

<template>
<label class="cp-checkbox" :class="[disabled ? 'disabled' : '']">
<!-- -->
  <input 
    @change="handleModelValueChange"
    class="hidden" 
    type="checkbox" 
    :value="value"
    :checked="_check"
    :disabled="disabled" 
    v-bind="$attrs" />
  <div v-if="_check" class="select-none flex items-center justify-center w-6 h-6 bg-slate-900 rounded-full">
    <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path class="fill-indigo-500" fill-opacity=".24" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Z" />
      <path class="fill-indigo-400" fill-rule="nonzero" d="M13 6.586 14.414 8l-5.747 5.748-3.081-3.081L7 9.252l1.667 1.667z" />
    </svg>
  </div>
  <div v-else class="w-6 h-6 box-border border-[4px] rounded-full border-slate-900"></div>

  <span class="text-slate-300 text-sm"><slot></slot></span>
</label>
   
</template>

<style lang="postcss">
.cp-checkbox {
  @apply inline-flex gap-2 items-center cursor-pointer;
}
</style>
