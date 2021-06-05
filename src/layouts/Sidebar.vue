<template>
  <!-- <div class="bg-gray-900 h-screen flex flex-col gap-5" :class="[active ? 'w-20' :'w-72']"> -->
  <div class="sidebar bg-gray-900 w-72 min-h-screen flex flex-col gap-5 relative"
    :class="{sidebarActive, sidebarActiveFun}">
    <div class=" sidebar-brand mt-6 flex justify-center items-center">
      <h1 class="text-white font-extrabold text-3xl tracking-wider" v-html="brand"></h1>
    </div>
    <div class="flex flex-col gap-y-3">
      <SidebarLink iconlink="bx bx-home" namelink="Dashboard" />
      <SidebarLink iconlink="bx bx-cart-alt" namelink="E-Commerce" />
      <SidebarLink iconlink="bx bx-message-detail" namelink="Message" />
      <SidebarLink iconlink="bx bx-user" namelink="User" />
    </div>
  </div>
</template>

<script>
  import SidebarLink from '../components/SidebarLink.vue'

  export default {
    components: {
      SidebarLink
    },
    data() {
      return {
        sidebarActive: null,
        brand: ""
      }
    },
    computed: {
      sidebarActiveFun() {
        this.sidebarActive = this.$store.state.sidebarActive;
        this.sidebarActive ? this.brand = "<div class=''>tv.</div>" : this.brand = "tailvue.";
      }
    },

  }

</script>

<style scoped>
  .sidebar {
    transition: all 0.3s ease;
  }

  .sidebar.sidebarActive {
    transition: all 0.3s ease;
    width: 80px;
  }
</style>