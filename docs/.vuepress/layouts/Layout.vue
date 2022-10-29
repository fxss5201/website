<template>
  <ParentLayout>
    <template #page-bottom>
      <Footer></Footer>
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Footer from './../components/Footer.vue'
</script>
