<script setup lang="ts">
defineOptions({
  name: 'Dashboard',
})

const columns = ref([
  { name: 'No.', key: 'no', colorText: true, class: 'font-700' },
  { name: 'Visitor', key: 'visitor' },
  { name: 'Revenues', key: 'revenues' },
  { name: 'Sales', key: 'sales' },
  { name: 'Conversion', key: 'conversion' },
  { name: 'Account', key: 'account' },
  { name: 'Date', key: 'date' },
  { name: 'Company', key: 'company' },
])
const data = ref([
  { no: 1, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 2, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 3, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 4, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 5, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 6, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 7, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 8, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 9, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
  { no: 10, visitor: 2400, revenues: 3897, sales: 267, conversion: '4.7%', account: 'Revolut', date: '22/01/2022', company: 'Form Builder CP' },
])


</script>

<template>
  <PageContainer>
    <BrandList />
    <Highlighter class="grid grid-cols-2 gap-6 px-5 pt-4">
      <HighlighterItem>
        <TableContainer :columns="columns" :data="data">
          <template #foot>
            <DemoTableFoot />
          </template>
        </TableContainer>
      </HighlighterItem>
      <HighlighterItem>
        <TableContainer :columns="columns" :data="data">
          <template #foot>
            <DemoTableFoot />
          </template>
        </TableContainer>
      </HighlighterItem>
      <HighlighterItem>
        <TableContainer :columns="columns" :data="data">
          <template #foot>
            <DemoTableFoot />
          </template>
        </TableContainer>
      </HighlighterItem>
      <HighlighterItem>
        <TableContainer :columns="columns" :data="data">
          <template #foot>
            <DemoTableFoot />
          </template>
        </TableContainer>
      </HighlighterItem>
    </Highlighter>

    
  </PageContainer>
</template>
