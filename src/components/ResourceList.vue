<template>
  <div>
    <v-item-group mandatory class="mt-8">
      <v-sheet>
        <v-switch
          v-model="adquired"
          :label="`Recursos Adquiridos: ${adquired === true ? 'Sim' : 'Não'}`"
        ></v-switch>
      </v-sheet>
    </v-item-group>
    <v-item-group mandatory class="mt-n3">
      <v-sheet>
        <v-data-table
          :headers="adquired === true ? headers : headersNoAdquired"
          :items="getResources"
          :items-per-page="getResources.length"
          class="elevation-1"
          v-on="dialog"
        >
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.name }}</td>
              <td>{{ row.item.price }}</td>
              <td>{{ row.item.os }}</td>
              <td>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="purple"
                  @click="dialog = !dialog"
                >
                  <v-icon dark>mdi-cart</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-sheet>
    </v-item-group>
    <v-row justify="center"> </v-row>
    <modal-alocate-form :dialog="dialog"></modal-alocate-form>
  </div>
</template>

<script>
import ModalAlocateForm from "@/components/ModalAlocateForm.vue";
export default {
  components: { ModalAlocateForm },
  name: "resource-list",
  props: {
    ModalAlocateForm,
  },
  data: () => ({
    adquired: false,
    dialog: false,
    headers: [
      {
        text: "Recursos",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Preço", value: "price" },
      { text: "Devolução", value: "duedate" },
      { text: "OS", value: "os" },
    ],
    headersNoAdquired: [
      {
        text: "Recursos",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Preço", value: "price" },
      { text: "OS", value: "os" },
      { text: "", value: "action" },
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
      console.log(this.adquired);
      return this.resources.filter(
        (resource) => resource.adquired === this.adquired
      );
    },
  },
};
</script>

<style>
</style>
