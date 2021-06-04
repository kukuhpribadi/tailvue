<template>
  <!-- <div class="bg-gray-900 h-screen flex flex-col gap-5" :class="[active ? 'w-20' :'w-72']"> -->
  <div class="sidebar bg-gray-900 w-72 min-h-screen flex flex-col gap-5 relative" :class="{active}">
    <div class="sidebar-brand mt-6 flex justify-center items-center">
      <h1 class="text-white font-extrabold text-3xl tracking-wider" v-html="brand"></h1>
    </div>
    <div class="flex flex-col gap-y-3">
      <SidebarLink :active="active" iconlink="bx bx-home" namelink="Dashboard" />
      <SidebarLink :active="active" iconlink="bx bx-cart-alt" namelink="E-Commerce" />
      <SidebarLink :active="active" iconlink="bx bx-message-detail" namelink="Message" />
      <SidebarLink :active="active" iconlink="bx bx-user" namelink="User" />
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
        brand: "tailvue."
      }
    },
    updated() {
      if (!this.active) {
        this.brand = "tailvue."
      } else {
        this.brand = "<i class='bx bx-laugh'></i>"
      }
    }
  }

</script>

<style scoped>
  .sidebar {
    transition: all 0.3s ease;
  }

  .sidebar.active {
    transition: all 0.3s ease;
    width: 80px;
  }
</style>