<template>
  <div class="relative bg-gray-100 overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <appNav />

      <router-view />
    </div>
  </div>
</template>

<script>
import appNav from "@/components/nav.vue";
export default {
components: {
  appNav,
}
}
</script>>