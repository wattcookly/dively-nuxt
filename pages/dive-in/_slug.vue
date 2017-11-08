<template>
  <section>
    <div class="jumbotron">
      <h1 class="title">
        Diving in {{ locationName }}
      </h1>
    </div>
    <div class="body-container">
      
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get('https://3mlit45rwh.execute-api.ap-southeast-1.amazonaws.com/v0/locations/get-location-info?location_slug=' + params.slug).then((response) => {
      return {
        locationName: response.data.locationName
      }
    })
  }
}
</script>

<style>

</style>
