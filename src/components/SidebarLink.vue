<template>
  <div class="sidebar-link text-white mx-5 rounded-md h-10 hover:bg-gray-800 cursor-pointer"
    :class="{active, sidebarActiveFun}">
    <div class="flex items-center">
      <i :class="iconlink" class="text-lg flex items-center justify-center w-10 h-10 absolute"></i>
      <p class="tracking-wide ml-10">
        {{namelink}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['iconlink', 'namelink'],
    data() {
      return {
        active: null
      }
    },
    computed: {
      sidebarActiveFun() {
        this.active = this.$store.state.sidebarActive
      }
    },
  }
</script>

<style scoped>
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