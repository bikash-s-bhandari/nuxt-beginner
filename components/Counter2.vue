<template>
  <div>
    <h3>Using pinia store</h3>

    <p>Name: {{ name }}</p>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
  </div>
  <div>
    <button @click="store.increment" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increment</button>
    <button  @click="store.decrement" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrement</button>
  
  </div>
</template>

<script lang="ts" setup>
const store = useCounterStore()
const { name, count,doubleCount } = storeToRefs(store)

</script>

<style>

</style>