<template>
  <div class="flex">
    <Sidebar />
    <div class="w-full">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './layouts/Sidebar.vue'
  import Navbar from './layouts/Navbar.vue'
  export default {
    components: {
      Sidebar,
      Navbar
    },
  }
</script>

<style>
</style>