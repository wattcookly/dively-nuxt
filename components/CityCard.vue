<template>
  <div class="col-4">
    <router-link v-if="$store.state.locale !== 'en'" :to="{ name: 'LANG-dive-in-slug', params: { LANG: $store.state.locale, slug: city.slug }}">
      <div class="card city-card">
        <img :src="city.img">
        <span>{{ city.name }}</span>
      </div>
    </router-link>
    <router-link v-else :to="{ name: 'dive-in-slug', params: { slug: city.slug }}">
      <div class="card city-card">
        <img :src="city.img">
        <span>{{ city.name }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['city']
}
</script>

<style scoped lang="scss">
.city-card {
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 200px;
  img {
    position: absolute;
    width: 100%;
    object-fit: cover;
  }
  span {
    position: relative;
    color: white;
    font-size: 2rem;
  }
}
</style>
