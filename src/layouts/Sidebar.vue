<template>
  <!-- <div class="bg-gray-900 h-screen flex flex-col gap-5" :class="[active ? 'w-20' :'w-72']"> -->
  <div class="sidebar bg-gray-900 w-72 min-h-screen flex flex-col gap-5 relative" :class="{active, sidebarActiveFun}">
    <div class=" sidebar-brand mt-6 flex justify-center items-center">
      <h1 class="text-white font-extrabold text-3xl tracking-wider" v-html="brand"></h1>
    </div>
    <div class="flex flex-col gap-y-3">
      <!-- dashboard -->
      <div class="sidebar-link text-white mx-5 rounded-md h-10 hover:bg-gray-800 cursor-pointer"
        :class="{active, sidebarActiveFun}">
        <router-link to="/" class="flex items-center">
          <i class="bx bx-home text-lg flex items-center justify-center w-10 h-10 absolute"></i>
          <p class="tracking-wide ml-10">
            Dashboard
          </p>
        </router-link>
      </div>
      <!-- ecommerce -->
      <div class="sidebar-link text-white mx-5 rounded-md h-10 hover:bg-gray-800 cursor-pointer"
        :class="{active, sidebarActiveFun}">
        <router-link to="/ecommerce" class="flex items-center">
          <i class="bx bx-cart-alt text-lg flex items-center justify-center w-10 h-10 absolute"></i>
          <p class="tracking-wide ml-10">
            E-commerce
          </p>
        </router-link>
      </div>
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
        active: null,
        brand: ""
      }
    },
    computed: {
      sidebarActiveFun() {
        this.active = this.$store.state.sidebarActive;
        this.active ? this.brand = "<div class=''>tv.</div>" : this.brand = "tailvue.";
      }
    },

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

  .sidebar-link {
    line-height: 2.5rem;
  }

  .sidebar-link p {
    white-space: nowrap;
    transition: all 0.5s ease;
  }

  .sidebar-link.active p {
    opacity: 0;
    transition: all 0.5s ease;
  }
</style>