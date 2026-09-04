<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <div>
    <Header />

    <div>
      <Sidebar />

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>