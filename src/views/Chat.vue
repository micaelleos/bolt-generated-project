<template>
  <div class="h-[calc(100vh-4rem)] flex">
    <!-- Sidebar -->
    <div :class="[
      'bg-white border-r transition-all duration-300 overflow-hidden',
      isSidebarOpen ? 'w-80' : 'w-0 lg:w-80'
    ]">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">Perguntas Sugeridas</h2>
        <div class="space-y-2">
          <button
            v-for="(question, index) in suggestedQuestions"
            :key="index"
            @click="askQuestion(question)"
            class="w-full p-3 text-left text-sm rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {{ question }}
          </button>
        </div>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="flex-1 flex flex-col bg-gray-50">
      <!-- Chat Header -->
      <div class="bg-white border-b p-4 flex items-center justify-between">
        <h1 class="text-lg font-semibold">Chat com Assistente</h1>
        <button 
          @click="toggleSidebar"
          class="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div 
        ref="messagesContainer"
        class="flex-1 overflow-y-auto p-4 space-y-4"
      >
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'max-w-[80%] rounded-lg px-4 py-2 animate-fade-in',
            message.isBot ? 
              'bg-white shadow-sm ml-0 mr-auto' : 
              'bg-blue-600 text-white ml-auto mr-0'
          ]"
        >
          <p>{{ message.text }}</p>
          <span 
            class="text-xs mt-1 block"
            :class="message.isBot ? 'text-gray-500' : 'text-blue-100'"
          >
            {{ message.time }}
          </span>
        </div>
      </div>

      <!-- Input Area -->
      <div class="bg-white border-t p-4">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input
            v-model="newMessage"
            type="text"
            class="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200"
            placeholder="Digite sua mensagem..."
          >
          <button 
            type="submit"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <span>Enviar</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const messages = ref([
  { 
    text: 'Olá! Como posso ajudar você hoje?',
    isBot: true,
    time: new Date().toLocaleTimeString()
  }
])

const suggestedQuestions = [
  'Qual o status atual do meu processo?',
  'Quando será minha próxima audiência?',
  'Quais documentos preciso apresentar?',
  'Como funciona o processo de perícia?',
  'Quanto tempo dura o processo em média?',
  'Quais são as etapas do processo?',
  'Como posso agendar uma reunião?',
  'Quais são os custos envolvidos?'
]

const newMessage = ref('')
const messagesContainer = ref(null)
const isSidebarOpen = ref(window.innerWidth >= 1024)

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  
  const userMessage = {
    text: newMessage.value,
    isBot: false,
    time: new Date().toLocaleTimeString()
  }
  
  messages.value.push(userMessage)
  newMessage.value = ''
  scrollToBottom()
  
  setTimeout(() => {
    const botMessage = {
      text: "Vou ajudar você com isso. Por favor, aguarde enquanto analiso sua solicitação.",
      isBot: true,
      time: new Date().toLocaleTimeString()
    }
    messages.value.push(botMessage)
    scrollToBottom()
  }, 1000)
}

const askQuestion = (question) => {
  newMessage.value = question
  sendMessage()
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

onMounted(() => {
  scrollToBottom()
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      isSidebarOpen.value = true
    }
  })
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
