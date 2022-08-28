<template>
  <v-navigation-drawer
    app
    color="#222f3e"
    mini-variant
    mini-variant-width="80"
    dark
  >
    <v-avatar class="d-block text-center mx-auto mt-4" size="40">
      <v-icon color="#49D9A0" large>fab fa-atlassian</v-icon>
    </v-avatar>
    <v-divider class="mx-3 my-5"></v-divider>
    <v-list flat class="mt-5">
      <v-list-item-group v-model="selectItem">
        <v-list-item
          v-for="(item, i) in nav"
          :key="i"
          active-class="border"
          :ripple="false"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <v-btn icon :ripple="false">
        <v-badge bordered overlap color="red" dot>
          <v-icon>far fa-bell</v-icon>
        </v-badge>
      </v-btn>
      <br />
      <v-avatar>
        <v-img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHbNHQHfcwPug/profile-displayphoto-shrink_100_100/0/1658723595847?e=1666828800&v=beta&t=0qOiLz7iCWh9eok1InWcolLymM4-N1EQmT5I1OIU9-g"
        ></v-img>
      </v-avatar>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "sidebar",
  props: {
    nav: {
      required: true,
      type: Array,
    },
  },
  data: () => ({
    selectItem: null,
    itemName: "user",
    drawer: null,
  }),
  watch: {
    selectItem(val) {
      this.getMenuNavName(val)

    },
  },
  created(){
    this.$store.dispatch('menu/navigate', this.itemName)
  },
  methods: {
    getMenuNavName: function (val) {
      switch (val) {
        case 0:
          this.itemName = "user";
          break;
        case 1:
          this.itemName = "resources";
          break;
        case 2:
          this.itemName = "search";
          break;
        case 3:
          this.itemName = "reports";
          break;
        default:
          this.itemName = 'user';
      }
      this.$store.dispatch('menu/navigate', this.itemName)
    },
  },
};
</script>

<style>
.border {
  margin-left: 12px;
  margin-right: 12px;
  background: #49d9a0;
  border-radius: 50%;
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
</style>
