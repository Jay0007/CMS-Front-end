<template>
  <v-container fluid class="px-15">
    <v-row dense class="justify-space-around pt-7">
      <v-col cols='8' class="pl-12 pr-9">
        <courses/>
        <announcemnts/>
      </v-col>
      <v-col cols= '4' class="pl-7 pr-11">
        <support/>

        <tools/>

        <v-card elevation='4' class="mb-8">
          <v-card-title>
            My courses
          </v-card-title>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import courses from './courses'
import announcemnts from './announcements'
import support from './support'
import tools from './tools'
export default {
  components: {
    courses,
    announcemnts,
    support,
    tools
  },
  data: () => ({

  }),
  methods: {

  },
  computed: {

  }
}

</script>
<style scoped>

</style>
