<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div>VueJS Form Bindings Challenge</div>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col cols="12">
            <v-card class="ma-6 mx-auto" tile outlined max-width="800px">
              <div class="title pa-4">Challenge Statement</div>
              <v-divider></v-divider>
              <div class="pa-4 body-2">
                Create a product price form with the following fields: Original
                Price, Discount Percentage, Discount Value, Final Price.
              </div>
              <div class="px-4 pb-4 body-2">
                Implement a multi-way sync between the discount fields and the
                original price & actual price fields. The 3 fields "Original
                Price", "Discount Percentage" & "Discount Value" can be edited
                in any order, the actual price is a read-only field, it should
                always reflect the correct price based on the inputs.
                Furthermore, if one of the discount types is edited, the other
                one should update automatically.
              </div>
              <div class="px-4 pb-4 body-2">
                Use Vuetify components when building the form.
              </div>
              <div class="px-4 pb-4 caption">
                For context: This "product price form" is in reality only part
                of a full invoice form, when building the full form, there's
                quantity fields, ability to add/remove products, tax fields,
                invoice totals, etc. The challenge statement has been simplified
                to keep the time requirements low for such a challenge.
              </div>
            </v-card>
          </v-col>
          <v-col cols="12">
            <!--  -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    //
  },

  data: () => ({
    //
  }),
};
</script>
