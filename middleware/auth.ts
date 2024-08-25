export default defineNuxtRouteMiddleware((to, from) => {
   const isLoggedIn=false
    if(!isLoggedIn) {
        return navigateTo('/auth/login')
    }
     console.log({from,to})

})
