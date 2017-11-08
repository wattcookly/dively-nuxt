<template>
  <section>
    <div class="jumbotron">
      <h1 class="title">
        Dively
      </h1>
      <h2 class="lead">
        {{ $t("home.introduction") }}
      </h2>
    </div>
    <div class="body-container">
      <div class="row">
        <city-card 
          v-for="city in cityList"
          v-bind:key="city.slug"
          :city="city" />
        </city-card>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import CityCard from '@/components/CityCard'

export default {
  data () {
    return {
      cityList: []
    }
  },
  asyncData ({ params, error }) {
    return axios.get('https://3mlit45rwh.execute-api.ap-southeast-1.amazonaws.com/v0/locations/get-all').then((response) => {
      return {
        cityList: response.data.locationList
      }
    }).catch(function (e) {
      error({ statusCode: 404, message: '404 Page Not Found' })
    })
  },
  components: {
    CityCard
  }
}
</script>

<style>

</style>
