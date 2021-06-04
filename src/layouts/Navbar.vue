<template>
  <div class="h-14 shadow-lg">
    <div class="mx-3 h-full flex items-center">
      <i class='bx bx-menu text-3xl' @click="$emit('mini')"></i>
    </div>
  </div>
</template>

<script>
  export default {
    // props: [''],
    // methods: {
    //   minimizeMenu() {
    //     return this.active = !this.active
    //   }
    // }
  }
</script>