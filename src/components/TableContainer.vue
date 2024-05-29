<script lang="ts" setup>
withDefaults(
  defineProps<{
    data: any[],
    columns: any[],
    headVisible?: boolean,
    rounded?: boolean
  }>(),
  {
    rounded: true,
    headVisible: true,

  }
)

const slots = useSlots()
</script>

<template>
  <div class="cp-table-container">
    <div>
      
    </div>
    <div v-if="slots.option" class="relative pt-4 pb-2 px-2 w-full bg-slate-800 bg-op-80">
      <Particles class="absolute inset-0 z-0" />
      <div class="relative z-10">
        <slot name="option">

        </slot>
      </div>
    </div>
    <table class="w-full">

      <thead v-if="headVisible">

        <slot name="header">
          <tr class="cp-table-head">
            <th v-for="col in columns">
              <GradientColorText v-if="col.colorText" :class="col.class">{{ col.name }}</GradientColorText>
              <span v-else :class="col.class"> {{ col.name }} </span>
            </th>
          </tr>
        </slot>
      </thead>
      <!-- -->
      <tbody>
        <tr class="cp-table-row" v-for="row in data">
          <td v-for="col in columns">
            <GradientColorText v-if="col.colorText" :class="col.class">{{ row[col.key] }}</GradientColorText>
            <span v-else :class="col.class"> {{ row[col.key] }} </span>
          </td>
        </tr>
      </tbody>
      <slot name="foot"></slot>
    </table>
  </div>
</template>

<style lang="postcss">
.cp-table-container {
  @apply rounded-md overflow-hidden text-md relative;
}




.cp-table-container thead {
  @apply bg-slate-800  bg-op-80;
}

.cp-table-container thead th {
  @apply py-2 text-right px-2 font-500;
}

.cp-table-row:nth-of-type(odd) td {
  @apply bg-op-60 bg-slate-800;
}

.cp-table-row:nth-of-type(even) td {
  @apply bg-op-20 bg-indigo-500;
}

.cp-table-row td {
  @apply py-1 px-2 text-right border-slate-700 border-r font-300;

}

.cp-table-row td:last-of-type {
  @apply border-none;
}
</style>
