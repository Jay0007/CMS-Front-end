<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <v-snackbar
        v-model="$store.getters.getSnack.state"
        :color="$store.getters.getSnack.color"
        top
        :timeout="4500"
        absolute
        bottom
        elevation="24"
      >
        {{$store.getters.getSnack.content}}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            v-bind="attrs"
            @click="this.$store.commit('closeSnackbar')"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  created () {
    var full = window.location.host
    if (full.substring(0, 9) !== 'localhost') {
      this.$store.commit('setBaseUrl', 'https://' + full)
    } else {
      this.$store.commit('setBaseUrl', 'http://localhost:3000')
    }
  }
};
</script>
<style>

</style>

