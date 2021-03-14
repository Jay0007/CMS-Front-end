<template>
  <v-card elevation='1' class="mb-8">
    <v-card-title class="pt-3 pb-0 px-5" style="font-size: 16px">
      My courses
    </v-card-title>

    <v-container class="px-5 pt-0">
      <v-row >
        <v-col cols='4' v-for="(n,index) in courses" :key="index">
          <v-card hover outlined class="d-flex flex-column flexcard" height = "100%" @click="$router.push({path: `/app/home/${n.subject}`})">
            <v-img
              :src= n.image
              max-height="100"
            ></v-img>
            <v-card-text v-if="n.term!=''">
              <span>
                ({{n.term}}) {{n.subjectCode}}
              </span>
            </v-card-text>
            <v-card-text>
              {{n.subject}}
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-badge
                content="6"
                color="green"
                overlap
              >
                <v-icon>mdi-message</v-icon>
              </v-badge>
            </v-card-actions>
          </v-card>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions class="pt-0 pb-5">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color='primary' v-bind="attrs" v-on="on">
            View All Courses ({{courses.length}})
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark flat elevation="2" class="px-15 pt-0" height="104px">
            <v-toolbar-title class="ml-5" disabled><subtitle-1 style="font-size:140%"> All Courses</subtitle-1></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false" class="mr-5">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-row class="px-15">
            <v-col cols='4' class="ml-5">
              <v-text-field
                hide-details
                solo
                label="Find a course"
                clearable
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    text
                    color="primary"
                    dark
                    v-on="on "
                  >
                    Dropdown
                    <v-icon>
                      mdi-menu-down
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
          <v-container>
            <v-row class="justify-space-between">
              <v-col cols='3' v-for="(n,index) in courses" :key="index">
                <v-card hover outlined class="d-flex flex-column flexcard" height = "100%">
                  <v-img
                    :src= n.image
                    max-height="100"
                  ></v-img>
                  <v-card-text v-if="n.term!=''">
                    <span>
                      ({{n.term}}) {{n.subjectCode}}
                    </span>
                  </v-card-text>
                  <v-card-text>
                    {{n.subject}}
                  </v-card-text>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-badge
                      content="6"
                      color="green"
                      overlap
                    >
                      <v-icon>mdi-message</v-icon>
                    </v-badge>
                  </v-card-actions>
                </v-card>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>

</template>
<script>
export default {
  data: () => ({
    dialog: false,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ],
    courses: null
  }),
  methods: {

  },
  computed: {

  },
  created: function(){
    this.courses = this.$store.state.courses
  }
}

</script>
<style scoped>

</style>
