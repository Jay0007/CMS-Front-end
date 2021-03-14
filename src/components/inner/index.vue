<template>
  <v-app>
    <appBar/>
    <v-main class="pt-0" style="background-color: #F6F7F8">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import appBar from './app-bar/index'
export default {
  name: 'App',

  components: {
    appBar
  },

  data: () => ({
    //
  }),
  created() {

  }
};
</script>
