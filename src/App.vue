<template>
  <div class="flex">
    <Sidebar :active="active" />
    <div class="w-full">
      <i class='bx bx-menu text-3xl' @click="minimizeMenu"></i>
    </div>
  </div>
</template>

<script>
  import Sidebar from './layouts/Sidebar.vue'
  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        active: false
      }
    },
    methods: {
      minimizeMenu() {
        return this.active = !this.active
      }
    }
  }
</script>

<style>
</style>