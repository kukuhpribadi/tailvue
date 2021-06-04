<template>
  <div class="flex">
    <Sidebar :active="active" />
    <div class="w-full">
      <Navbar @mini="minimize" />
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
    data() {
      return {
        active: false
      }
    },
    methods: {
      minimize() {
        console.log('ok')
        return this.active = !this.active
      }
    }
  }
</script>

<style>
</style>