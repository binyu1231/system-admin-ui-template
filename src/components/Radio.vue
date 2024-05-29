<script lang="ts" setup>
import { isBoolean, isDefind, isNumber, isString } from '@coloration/kit'
import { PropType, ref, watchEffect } from 'vue'

const emits = defineEmits<{
  (e: 'update:modelValue', v: any): void
}>()

const props = defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  modelValue: {
    type: [String, Boolean, Number],
    default: undefined
  },
  value: {
    type: [String, Boolean, Number],
    default: undefined,
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
    checkStatus = mv === props.value
  }


  if (_check.value !== checkStatus) _check.value = checkStatus
})


function handleModelValueChange (e: any) {
  const mv: any = props.modelValue
  let selfValue: any = e.target?.value

  if (isString(mv)) {
    if (mv !== selfValue) {
      emits('update:modelValue', selfValue)
    }
  }
  else if (isNumber(mv)) {
    selfValue = Number(selfValue)
    if (mv !== selfValue) {
      emits('update:modelValue', selfValue)
    }
  }
  else if (isBoolean(mv)) {
    
    try {
      selfValue = JSON.parse(selfValue)
    }
    catch {
      // 
    }
    if (isBoolean(selfValue) && mv !== selfValue) {
      emits('update:modelValue', selfValue)
    }
 
  }
}


</script>
<template>

<label class="cp-radio inline-flex gap-2 items-center cursor-pointer" :class="[disabled ? 'disabled' : '']">
  <input 
    @change="handleModelValueChange"
    class="hidden" 
    type="radio" 
    :value="value"
    :checked="_check"
    :disabled="disabled" 
    v-bind="$attrs" />
  
  <div v-if="_check" class="w-6 h-6 bg-indigo-500 box-border border-[6px] rounded-full border-slate-900"></div>

  <div v-else class="w-6 h-6 box-border border-[4px] rounded-full border-slate-900"></div>

  <span class="text-slate-300 text-sm"><slot></slot></span>
</label>
</template>
<style lang="postcss">

</style>