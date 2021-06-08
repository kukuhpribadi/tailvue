<template>
  <div class="h-14 py-8 shadow-lg">
    <div class="ml-3 mr-5 h-full flex items-center justify-between">
      <!-- left menu -->
      <div>
        <i class='bx bx-menu text-3xl cursor-pointer' @click="minimizeSidebar"></i>
      </div>
      <!-- end left menu -->
      <!-- right menu -->
      <div class="flex items-center gap-7">
        <div>
          <i class='bx bx-search'></i>
        </div>
        <div>
          <i class='bx bx-bell'></i>
        </div>
        <div>
          <i class='bx bx-envelope'></i>
        </div>
        <div class="flex items-center gap-2">

          <div class="rounded-full overflow-hidden shadow h-8 w-8">
            <img src="img/4.jpg">
          </div>
          <div>
            Jessica
          </div>
        </div>

      </div>
      <!-- end right menu -->
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