

<script setup lang="ts">
// refer to https://github.com/ankurk91/vue-flatpickr-component
import FlatPickr from 'vue-flatpickr-component'
import { Mandarin } from "flatpickr/dist/l10n/zh.js"

function dateEqual(dateLikeA: any, dateLikeB: any) {
  if (!isDefined(dateLikeA) || !isDefined(dateLikeB)) return false
  return (new Date(dateLikeA)).getTime() === (new Date(dateLikeB)).getTime()
}

function datesEqual(datesA: any[], datesB: any[]) {
  return datesA.every((d, i) => dateEqual(d, datesB[i]))
}

defineOptions({ name: 'RangeDatepicker' })
const emits = defineEmits<{
  'update:modelValue': [date: Date[]]
}>()

const props = withDefaults(
  defineProps<{
    align?: string
    placeholder?: string,
    modelValue?: Date[],
    defaultValue?: Date[]
  }>(),
  {}
)

const config = ref({
  locale: Mandarin,
  mode: 'range',
  static: true,
  monthSelectorType: 'static',
  dateFormat: 'Y/m/d',
  // defaultDate,
  prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
  nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
})

const innerDate = ref<Date[]>(props.defaultValue || [])

watch(() => props.modelValue, (newVal) => {
  if (!newVal || newVal.length !== 2 || datesEqual(newVal, innerDate.value)) return
  innerDate.value = newVal
})


function handleDateChange(dates: Date[]) {
  if (dates.length !== 2 || datesEqual(dates, props.modelValue || [])) return
  emits('update:modelValue', dates)
}

</script>
<template>
  <div class="relative">
    <FlatPickr
      :modelValue="innerDate"
      @on-change="handleDateChange"
      :config="config" 
      :placeholder="placeholder"
      class="form-input shadow shadow-[0_0_4px_0_#a855f7] rounded pl-9! dark:bg-slate-800 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200 font-medium w-[15.5rem]" 
    ></FlatPickr>
    <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
      <svg class="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 ml-3" viewBox="0 0 16 16">
        <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
      </svg>
    </div>    
  </div>
</template>