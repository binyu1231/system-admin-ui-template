<script setup lang="ts">
defineOptions({
  name: 'Database',
})

const colLength = Array.from({ length: 20 })
const columns = ref(colLength.map((_, i) => {
  return {
    name: `${i % 10 + 1}-${Math.floor(i / 10) + 1}`,
    key: i
  }
}))
const data = ref(Array.from({ length: 10 }).map((_, i) => {
  return colLength.reduce((acc, _, j) => {
    (acc as any)[j] = 178.2
    return acc
  }, { date: '2024/03/29' })
}))

columns.value.unshift({ name: 'Date', key: 'date' as any })

const useStatus = ref(true)
const groupValue = ref('1')
const selectedDateRange = ref<Date[]>([])

</script>

<template>
  <PageContainer>
    <BrandList />
    <Highlighter class="pt-10 px-5 pt-4">
    <HighlighterItem class="grid grid-cols-1 gap-6 px-5 pt-4">
      <TableContainer :columns="columns" :data="data">
        <template #option>
          <div class="flex">
            <div class="grid grid-cols-[100px_minmax(900px,_1fr)] gap-2 flex-1">
              <FormLabel class="text-lg">
                Date
              </FormLabel>
              <div>
                <div class="flex gap-2">
                  <select id="referrer" class=" form-select text-sm py-2 shadow shadow-[0_0_4px_0_#a855f7]" required>
                    <option>Google</option>
                    <option>Medium</option>
                    <option>GitHub</option>
                  </select>

                  <RangeDatepicker 
                    v-model="selectedDateRange" 
                    placeholder="请选择日期"
                    />

                    <!-- :default-value="[new Date(new Date().setDate(new Date().getDate() - 6)), new Date()]"  -->
                </div>
              </div>

              <FormLabel>
                Status
              </FormLabel>
              <div class="flex gap-4">
                <Checkbox v-model="useStatus">
                  Usefull
                </Checkbox>
              </div>
              <FormLabel>
                Group
              </FormLabel>
              <div class="flex gap-4">
                <Radio value="1" v-model="groupValue">Group 1</Radio>
                <Radio value="2" v-model="groupValue">Group 2</Radio>
              </div>
            </div>

            <div class="flex flex-col gap-2 w-40">
              <Button arrow size="sm" class="w-full">Search</Button>
              <Button arrow size="sm" class="w-full" type="lite">Download</Button>
            </div>
          </div>
        </template>
      </TableContainer>
    </HighlighterItem>
  </Highlighter>
    <div class="grid grid-cols-1 gap-6 px-5 pt-4">

      
    </div>

  </PageContainer>
</template>
