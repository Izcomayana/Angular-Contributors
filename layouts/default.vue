<template>
  <div class="home-layout">
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
.home-layout {
    background: #0d1117;
    color: white;
  }
</style>