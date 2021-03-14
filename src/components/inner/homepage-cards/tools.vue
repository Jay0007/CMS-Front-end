<template>
<div>
  <v-card elevation='1' class="mb-8">
    <v-card-title class="pt-3 pb-0 px-5" style="font-size: 16px">
      Support
    </v-card-title>
    <v-list nav>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i" class="my-0">
          <v-list-item-content class="py-0">
            <v-list-item-title v-text="item.text" class="primary--text title py-0"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- <v-list-item class="px-0" color="red">
      <v-list-item-content class="px-0" color="red">
        <v-list-item-title class="pt-3 pb-0 px-5" style="font-size: 16px" >Where is my course?</v-list-item-title>
      </v-list-item-content>
    </v-list-item> -->
  </v-card>
</div>
</template>
<script>
export default {
  data: () => ({
    announcements : [],
    item: 0,
    items: [
      { text: 'Awards'},
      { text: 'ePortfolio'},
      { text: 'LinkedIn Learning'}
    ]
  }),
  created: function () {
  },
  methods: {

  },
}

</script>
<style scoped>

</style>
