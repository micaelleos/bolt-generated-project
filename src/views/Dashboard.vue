<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Detalhes do Caso</h1>
      <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
        Ativo
      </span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Informações Principais -->
      <div class="lg:col-span-2 space-y-6">
        <div class="card">
          <h2 class="text-xl font-semibold mb-4">Resumo do Caso</h2>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600">Número do Processo</p>
                <p class="font-medium">0123456-78.2023.8.26.0100</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Tipo de Ação</p>
                <p class="font-medium">Ação Civil Pública</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Data de Entrada</p>
                <p class="font-medium">15/08/2023</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Vara</p>
                <p class="font-medium">3ª Vara Cível</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-xl font-semibold mb-4">Partes do Processo</h2>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600">Autor</p>
              <p class="font-medium">João da Silva</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Réu</p>
              <p class="font-medium">Empresa XYZ Ltda.</p>
            </div>
            <div>
              <p class="text-sm text-gray-600">Advogado Responsável</p>
              <p class="font-medium">Dr. Carlos Eduardo Santos</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-xl font-semibold mb-4">Últimos Andamentos</h2>
          <div class="space-y-4">
            <div v-for="(event, index) in timeline" :key="index" class="flex gap-4">
              <div class="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
              <div class="flex-1">
                <div class="flex justify-between">
                  <p class="font-medium">{{ event.title }}</p>
                  <p class="text-sm text-gray-500">{{ event.date }}</p>
                </div>
                <p class="text-sm text-gray-600">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <div class="card">
          <h2 class="text-xl font-semibold mb-4">Status Atual</h2>
          <div class="space-y-4">
            <div v-for="(status, index) in caseStatuses" :key="index">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-medium">{{ status.title }}</span>
                <span class="px-2 py-1 rounded-full text-xs" :class="status.class">
                  {{ status.status }}
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" :style="{ width: status.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-xl font-semibold mb-4">Próximas Audiências</h2>
          <div class="space-y-3">
            <div v-for="(hearing, index) in hearings" :key="index" 
                 class="p-3 bg-gray-50 rounded-lg">
              <p class="font-medium">{{ hearing.type }}</p>
              <p class="text-sm text-gray-600">{{ hearing.date }}</p>
              <p class="text-sm text-gray-600">{{ hearing.location }}</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="text-xl font-semibold mb-4">Documentos Importantes</h2>
          <div class="space-y-2">
            <div v-for="(doc, index) in documents" :key="index" 
                 class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
              <span class="text-sm">{{ doc.name }}</span>
              <button class="text-blue-600 hover:text-blue-800">
                Visualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const caseStatuses = [
  { 
    title: 'Análise Inicial', 
    status: 'Concluído', 
    class: 'bg-green-100 text-green-800',
    progress: 100
  },
  { 
    title: 'Produção de Provas', 
    status: 'Em Andamento', 
    class: 'bg-yellow-100 text-yellow-800',
    progress: 60
  },
  { 
    title: 'Perícia', 
    status: 'Pendente', 
    class: 'bg-gray-100 text-gray-800',
    progress: 0
  }
]

const timeline = [
  { 
    title: 'Contestação Apresentada', 
    date: '15/08/2023',
    description: 'Réu apresentou contestação dentro do prazo legal'
  },
  { 
    title: 'Despacho Judicial', 
    date: '10/08/2023',
    description: 'Juiz determinou a citação do réu'
  },
  { 
    title: 'Petição Inicial', 
    date: '01/08/2023',
    description: 'Processo distribuído e autuado'
  }
]

const hearings = [
  {
    type: 'Audiência de Conciliação',
    date: '25/08/2023 às 14:00',
    location: 'Sala 305 - Fórum Central'
  },
  {
    type: 'Perícia Técnica',
    date: '30/08/2023 às 10:00',
    location: 'Sede da Empresa XYZ'
  }
]

const documents = [
  { name: 'Petição Inicial.pdf' },
  { name: 'Procuração.pdf' },
  { name: 'Contestação.pdf' },
  { name: 'Documentos Pessoais.pdf' }
]
</script>
