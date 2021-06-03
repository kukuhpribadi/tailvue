<template>
  <!-- <div class="bg-gray-900 h-screen flex flex-col gap-5" :class="[active ? 'w-20' :'w-72']"> -->
  <div class="sidebar bg-gray-900 w-72 h-screen flex flex-col gap-5" :class="{active}">
    <div class="sidebar-brand h-14 flex justify-center items-center">
      <h1 class="text-white font-extrabold text-3xl tracking-wider" v-html="brand"></h1>
    </div>
    <div class="sidebar-link flex flex-col gap-y-3">
      <SidebarLink :active="active" />
    </div>
  </div>
</template>

<script>
  import SidebarLink from '../components/SidebarLink.vue'
  export default {
    components: {
      SidebarLink
    },
    props: ['active'],
    data() {
      return {
        brand: ""
      }
    },
    updated() {
      if (this.active) {
        this.brand = "<i class='bx bx-laugh'></i>"
      } else {
        this.brand = "tailvue."
      }
    }
  }

</script>

<style scoped>
  .sidebar {
    transition: all 0.5s ease;
  }

  .sidebar.active {
    transition: all 0.5s ease;
    width: 80px;
  }
</style>