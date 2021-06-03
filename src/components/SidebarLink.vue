<template>
  <div class="sidebar-link flex text-white items-center mx-5 bg-gray-700 rounded-md">
    <!-- icon -->
    <i class='bx bx-home text-lg flex justify-center items-center w-10 h-10'></i>
    <p class="font-semibold" :class="{active}">
      Dashboard
    </p>
  </div>
</template>

<script>
  export default {
    props: ['active'],
  }
</script>

<style scoped>
  .sidebar-link p.active {
    display: none;
    transition: all 0.5s ease;
  }
</style>