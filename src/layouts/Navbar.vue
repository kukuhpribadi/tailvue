<template>
  <div class="h-14 shadow-lg">
    <div class="mx-3 h-full flex items-center">
      <i class='bx bx-menu text-3xl' @click="minimizeSidebar"></i>
      <!-- <h1>{{count}}</h1> -->
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      minimizeSidebar() {
        this.$store.commit('changeSidebarMenu');
      }
    },

  }
</script>