<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Calendário</h1>
    
    <div class="grid grid-cols-7 gap-2">
      <div v-for="day in weekDays" :key="day" 
           class="text-center font-medium py-2">
        {{ day }}
      </div>
      
      <div v-for="date in monthDates" :key="date.value"
           class="aspect-square border rounded-lg p-2 hover:bg-gray-50 cursor-pointer"
           :class="{'bg-blue-50': date.hasEvent}">
        <div class="text-sm">{{ date.day }}</div>
        <div v-if="date.hasEvent" class="mt-1">
          <div class="text-xs bg-blue-100 text-blue-800 rounded px-1 py-0.5">
            {{ date.event }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const monthDates = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  value: `2023-08-${i + 1}`,
  hasEvent: [5, 12, 19].includes(i + 1),
  event: 'Consulta'
}))
</script>
