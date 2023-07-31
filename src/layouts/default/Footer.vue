<template>
  <v-footer class="bg-black">
    <v-container>
      <v-row justify="space-between" >
        <!-- <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn> -->
        <v-col cols="12" lg="3" sm="3">
          <p class="text-h6 text-white font-weight-bold">
            <v-icon color="yellow">mdi-home</v-icon>
            Dream House
          </p>
          <p class="my-3 text-body-2 text-grey-lighten-2">
            If you are looking for new and distinctive furniture for your home or office, You can choose from various styles, colors, sizes and brands We offer you a wide range of furniture with high quality and affordable prices.
          </p>
          <v-btn 
            class="mx-2 btn-change-color"
            color="yellow" 
            variant="outlined" 
            size="small" 
            icon="mdi-facebook" 
          />
          <v-btn 
            class="mx-2 btn-change-color"
            color="yellow" 
            variant="outlined" 
            size="small" 
            icon="mdi-pinterest" 
          />
          <v-btn 
            class="mx-2 btn-change-color"
            color="yellow" 
            variant="outlined" 
            size="small" 
            icon="mdi-instagram" 
          />
        </v-col>

        <v-col cols="12" lg="2" sm="2">
          <p class="text-h6 text-white font-weight-bold">
            shop
          </p>
          <v-btn 
            variant="text" 
            class="text-capitalize"
            to="/"
          >
            home
          </v-btn>
            <br>
          <v-btn 
            variant="text" 
            class="text-capitalize"
            to="/products"
          >
            products
          </v-btn>
            <br>
          <router-link class="text-white" :to="{ name: '' , hash: '#quote-section' }">
            <v-btn
              variant="text"
              class="text-capitalize"
            >
              What people say about us
            </v-btn>
          </router-link>
            <br>
        </v-col>

        <v-col cols="12" lg="2" sm="2">
          <p class="text-h6 text-white font-weight-bold">
            Who Us ?
          </p>
          <v-btn variant="text" class="text-capitalize">
            our team
          </v-btn>
            <br>
          <v-btn variant="text" class="text-capitalize">
            services
          </v-btn>
            <br>
          <v-btn variant="text" class="text-capitalize">
            contact us
          </v-btn>
            <br>
          <v-btn variant="text" class="text-capitalize">
            about us
          </v-btn>
        </v-col>

        <v-divider />
        <v-col cols="12" lg="12" sm="12" class="text-center mt-4">
          <p>
            Copyright &copy; — <strong>Dream House</strong>
          </p>
          <span class="text-subtitle-2 font-weight-bold text-capitalize">
            designed and coded By 
            <strong>
              <v-btn variant="text" color="yellow">
                Azhar abd al-baqi al-shurbaji
              </v-btn>
            </strong>
            -- 2023
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
data: () => ({
  links: [
    'Home',
    'About Us',
    'Team',
    'Services',
    'Blog',
    'Contact Us',
  ],
}),
}
</script>

<style>

.btn-change-color
{
  transition: .5s;
}
.btn-change-color:hover
{
  background-color: #ffff00;
  color: #000 !important;
  border: 1px solid #000;
}

</style>