<template>
    <div class="home-container">
        <PageHome></PageHome>
    </div>
</template>

<script>
import PageHome from './PageHome/index.vue';

export default {
  components: {
    PageHome,
  },
  methods: {
  },
};
</script>

<style scoped>
.home-container{
  margin-bottom: 52px;
}
</style>
