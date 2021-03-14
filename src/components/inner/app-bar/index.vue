<template>
  <v-app-bar app flat elevation="2" class="pt-0 topbar" color="#2874F0">
      <v-btn height="auto" width="6em" x-large tile icon class="homeButton mr-1 ml-4" @click="$router.push('/')" :ripple = "false">
        <v-img contain width="100%" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_043837.png" :aspect-ratio="1.7"></v-img>
      </v-btn>
      <v-text-field
        class="searchfield"
        font-size ="14px"
        dense
        hide-details
        solo
        label="Search for products brands and more"
        append-icon = "mdi-magnify"
      ></v-text-field>
      <v-spacer></v-spacer>
    <div class="pt-0 px-3">
      <v-btn dark tile icon fill-height class="homeButton" :ripple = "false">
        Yash
        <v-icon left>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <div class="pt-0 px-3">
      <v-btn dark tile icon fill-height class="homeButton ml-5" :ripple = "false">
        More
        <v-icon left>mdi-chevron-down</v-icon>
      </v-btn>

    </div>
    <div class="pt-0 px-3">
      <v-btn dark tile icon fill-height class="homeButton ml-5" :ripple = "false">
        <v-icon left>mdi-cart</v-icon>
        cart
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-bar",

  data: () => ({})
};
</script>
<style>
.mynameButton {
  border-top: 3px solid transparent;
  /* height: 104px!important; */
}
.mynameButton:hover {
  border-top: 3px solid #006fbf;
}
.v-btn:before {
  background-color: transparent;
}
/* .homeButtonIcon:hover{
  color: #004489 !important;
  border-top-color: blue;
  border-top-width: 10px;
} */
.homeButtonIcon {
  color: #494c4e;
}
.homeButton {
  border-top: 3px solid transparent;
  height: 104px !important;
  /* border-top-left-radius: 50%; */
  /* border-top-right-radius: 50% */
}
.homeButton:hover {
  border-top: 3px solid #006fbf;
}
.homeButton:hover .homeButtonIcon {
  border-top-width: 10px;
}
.v-toolbar__content {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.topbar {
  border-top: 1px solid #1b3d75 !important;
  padding-left: 120px;
  padding-right: 120px
}
.myname {
  font-family: "Lato", "Lucida Sans Unicode", "Lucida Grande";
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 19px;
  color: #494c4e;
  text-transform: capitalize;
}
.mynameButton:hover .myname {
  color: #006fbf;
}
.searchfield{
  margin-left: 15px!important;
  max-width: 500px!important
}
.searchfield .v-label{
  font-size: 14px!important
}
.searchfield .v-icon{
  color : blue!important
}
</style>
