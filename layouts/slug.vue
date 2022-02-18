<template>
  <div class="slug-layout">
    <Header />
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
  import Header from '../components/Header';
  import AppHeader from '../components/AppHeader';

  export default {
    components: {
      Header,
      AppHeader
    }
  }
</script>

<style >
  .slug-layout {
    background: #0d1117;
    color: white;
  }

  @media (max-width: 400px) {
    /* .slug-layout {
      height: 100vh;
    } */
  }
</style>