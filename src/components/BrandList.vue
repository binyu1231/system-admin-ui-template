<script lang="ts" setup>
const configs = [
  {title: '园区入住率', en: 'OCCUPANCY RATE', count: 67.2, unit: '%' },
  {title: '园区耗电量', en: 'POWER CONSUMPTION', count: 100.4, unit: 'kwh' },
  {title: '平均室内温度', en: 'AVERAGE TEMPERATURE', count: 26.4, unit: '℃' },
  {title: '智能终端数量', en: 'INTELLIGENT TERMINALS', count: 7754, unit: '' },
]
</script>

<template>
  <Highlighter class="grid grid-cols-2 xl:grid-cols-4 gap-4 px-4">
    <HighlighterItem class="flex-1" v-for="(conf, i) in configs">
      <BrandCard :brand-index="i + 1" :title="conf.title" :en-title="conf.en" :count="conf.count" :unit="conf.unit" />
    </HighlighterItem>
  </Highlighter>
</template>

<style lang="postcss">
.brand-list {
  @apply;
}
</style>
