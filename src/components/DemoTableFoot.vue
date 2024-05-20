<script lang="ts" setup>

</script>

<template>
  <tfoot>
    <tr>
      <th class="p-2 bg-slate-800 text-right">
        <GradientColorText>Total</GradientColorText>
      </th>
      <th class="p-2 bg-slate-800 text-right">
        <input class="form-input w-20 text-right h-8 shadow-[0_0_4px_0_#a855f7] -mr-2 font-300"  value="1234" />
      </th>
      <th colspan="4" class="p-2 bg-slate-800 text-right">
        <GradientColorText>Average</GradientColorText>
      </th>
      <th class="p-2 bg-slate-800 text-right">
        <span class="text-green-400">123456</span>
      </th>
      <th class="p-2 bg-slate-800 text-right">
        <span class="text-orange-400">123456</span>
      </th>
    </tr>
  </tfoot>
</template>

<style lang="postcss">
.demo-table-foot {
  @apply;
}
</style>
