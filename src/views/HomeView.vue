<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
   <sidebar :nav="items"></sidebar>
    <v-container>
      {{$store.state.menu.selectedNavItem}}
    </v-container>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
  },
  computed: {

  },
  data: () => ({
    items: [
      { icon: "fas fa-user" },
      { icon: "fas fa-book" },
      { icon: "fas fa-search" },
      { icon: "fas fa-chart-line" },
    ],
  }),
};
</script>
