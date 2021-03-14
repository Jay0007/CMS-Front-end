<template>
<div>
  <v-card elevation='1' class="mb-8">
    <v-card-title class="pt-3 pb-0 px-5" style="font-size: 16px">
      Announcements
    </v-card-title>
    <v-list-item v-for="(i,index) in computedCategories" :key="index">
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{i.title}}</v-list-item-title>
        <v-list-item-subtitle>{{i.body}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="20"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn text color='primary'>
        Show All Announcements
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>
<script>
export default {
  data: () => ({
    announcements : []
  }),
  created: function () {
    // , { 'headers': { 'auth-token': localStorage.getItem('auth-token') } }
    this.$axios.get('http://localhost:3000/postman-announcements')
      .then(response => {
        this.announcements = response.data
      })
  },
  methods: {

  },
  computed:{ computedCategories(){ return this.announcements } }
}

</script>
<style scoped>

</style>
