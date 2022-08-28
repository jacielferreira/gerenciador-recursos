<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <sidebar :nav="items"></sidebar>
    <v-container>
      <v-row class="text-left">
        <v-col class="mb-n2">
          <h3 style="color: grey">Dashboard</h3>
        </v-col>
      </v-row>
      <v-item-group mandatory class="mt-8">
        <v-sheet color="#222f3e" dark>
          <v-container>
            <v-breadcrumbs :items="paths"></v-breadcrumbs>
          </v-container>
        </v-sheet>
      </v-item-group>
      <v-item-group
        v-show="$store.state.menu.selectedNavItem === 'user'"
        mandatory
        class="mt-12"
      >
        <v-sheet color="rgba(0,0,0,0)">
          <v-row justify="center">
            <v-col
              v-for="(item, index) in getResources"
              :key="index"
              cols="12"
              md="2"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#49D9A0' : 'white'"
                  class="d-flex align-center rounded-xl"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="mt-10">
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : '#49D9A0'"
                              >fas fa-book</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >{{item.name.toUpperCase()}}</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>{{item.duedate}}</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-sheet>
      </v-item-group>
      <resource-list
        v-show="$store.state.menu.selectedNavItem === 'resources'"
      ></resource-list
    ></v-container>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import ResourceList from "@/components/ResourceList.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    ResourceList,
  },

  data: () => ({
    adquired: null,
    items: [
      { icon: "fas fa-user" },
      { icon: "fas fa-book" },
      { icon: "fas fa-search" },
      { icon: "fas fa-chart-line" },
    ],
    paths: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: "Home",
        disabled: true,
        href: "/",
      },
    ],
    resources: [
      {
        name: "Cloud Storage",
        price: 159,
        duedate: "2022-09-01",
        os: "Android OS",
        adquired: true,
      },
      {
        name: "Database",
        price: 10,
        duedate: "2023-10-01",
        os: "Android OS, IOS",
        adquired: true,
      },
      {
        name: "Firewall",
        price: 2000,
        duedate: "2022-10-01",
        os: "Android OS, IOS, Windows OS",
        adquired: true,
      },
      {
        name: "Backup",
        price: 10000,
        duedate: "2022-09-01",
        os: "All",
        adquired: false,
      },
      {
        name: "Backup Photos",
        price: 5000,
        duedate: "2022-09-01",
        os: "Android OS",
        adquired: true,
      },

    ],
  }),
  computed: {
    getResources() {
      return this.resources.filter((resource) => resource.adquired === true);
    },
  },
};
</script>
