<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <router-link v-if="$store.state.locale !== 'en'" :to="{ name: 'LANG', params: { LANG: $store.state.locale }}" class="navbar-brand">Dively</router-link>
      <router-link v-else :to="{ name: 'index' }" class="navbar-brand">Dively</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link v-if="$store.state.locale !== 'en'" :to="{ name: 'LANG-about', params: { LANG: $store.state.locale }}" class="nav-link">About</router-link>
          <router-link v-else :to="{ name: 'about' }" class="nav-link">About</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item language-nav">
          <span class="nav-link">Language</span>
          <div class="language-selector">
            <ul>
              <li v-for="language in languageList" @click="changeLanguage(language.code)">{{ language.text }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      languageList: [
        {
          'code': 'en',
          'text': 'English'
        }, {
          'code': 'fr',
          'text': 'French'
        }, {
          'code': 'de',
          'text': 'German'
        }
      ]
    }
  },
  methods: {
    changeLanguage (language) {
      var currentLanguage = this.$store.state.locale
      var currentPath = this.$route.path
      if (language !== currentLanguage) {
        if (currentLanguage === 'en') {
          this.$router.push('/' + language + this.$route.path)
        } else if (currentPath.indexOf('/' + currentLanguage) === 0) {
          this.$router.push(this.$route.path.replace(currentLanguage, language))
        }
      }
    }
  }
}
</script>