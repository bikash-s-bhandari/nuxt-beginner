<template>
  <div class="main">
   this is home page {{greet}}
  </div>
  <div>
    <Counter/>
    <Counter2/>
  </div>
</template>

<script lang="ts" setup>
const { $hello } = useNuxtApp() //from nuxt plugin
const greet = $hello('World')
</script>

<style>

</style>