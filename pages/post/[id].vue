<template>
  <div>
    this is post details with id {{ $route.params.id }} {{ route.params.id }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style></style>
