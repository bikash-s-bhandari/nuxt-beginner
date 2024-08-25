<template>
<div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
    <NuxtPage />
    </NuxtLayout>
</div>
</template>

<script setup>
useHead({
  title: 'Home Page',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

const runtimeConfig = useRuntimeConfig()

console.log(runtimeConfig.public.apiBase)//access public config from client side
console.log(runtimeConfig.apiSecret)//this is undefined becoz can only access server side 
</script>
