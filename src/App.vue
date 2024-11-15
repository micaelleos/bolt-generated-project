<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link to="/" class="flex items-center text-xl font-bold text-blue-600">
              LawBot
            </router-link>
          </div>
          <div class="flex space-x-4">
            <router-link to="/" class="flex items-center px-3 text-gray-700 hover:text-blue-600">
              Dashboard
            </router-link>
            <router-link to="/chat" class="flex items-center px-3 text-gray-700 hover:text-blue-600">
              Chat
            </router-link>
            <router-link to="/calendar" class="flex items-center px-3 text-gray-700 hover:text-blue-600">
              Calendar
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto px-4 py-6">
      <router-view></router-view>
    </main>
  </div>
</template>
