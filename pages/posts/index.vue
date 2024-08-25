<template>
  <Head>
    <Title>Blog List</Title>
    <Meta name="description" content="this is blog list" />
  </Head>
  <div>this is post list page</div>

  <!-- <div>
    <ul>
      <li>
        <IconsBell/>
      <img src="/images/profile.jpeg" alt="Banner2" />
    </li>
    <li>
      <img src="assets/images/banner.png" alt="Banner1" />
    </li>
    <li>
      <img src="~/assets/images/banner2.png" alt="Banner2" />
    </li>
    </ul>
    
  </div> -->
  <div>
    <h3>Post List Form API</h3>
    <ul>
      <li v-for="post in data">
        <div>
          <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { data, pending, error, refresh } = await useFetch("/api/post");

console.log(data.value);
</script>

<style></style>
