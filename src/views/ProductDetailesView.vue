<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="6" sm="12">
                <h1 class="mb-8 text-h4 text-center font-weight-bold text-capitalize secondry-font">
                    Overview
                </h1>
            </v-col>
        </v-row>
        <v-row align="start" justify="center">
            <v-col cols="12" lg="6" sm="6" class="">
              <v-responsive>
                <!-- cycle -->
                <v-carousel
                  :continuous="false"
                  :show-arrows="false"
                  hide-delimiter-background
                  delimiter-icon="mdi-square"
                  height="300"
                >
                  <v-carousel-item>
                    <v-img
                      :aspect-ratio="4/4"
                      :src="furnitureDetailes.thumbnail"
                      class=""
                    />
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-img
                      :aspect-ratio="16/10"
                      :src="furnitureDetailes.images[0]"
                      alt="not"
                      class=""
                    />
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-img
                      :aspect-ratio="16/10"
                      :src="furnitureDetailes.images[1]"
                      alt="not"
                      class=""
                    />
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-img
                      :aspect-ratio="16/10"
                      :src="furnitureDetailes.images[2]"
                      alt="not"
                      class=""
                    />
                  </v-carousel-item>
                </v-carousel>
                
                <!-- <GalleryThumbLoop v-bind="furnitureDetailes" /> -->
              </v-responsive>
            </v-col>
            <v-col cols="12" lg="4" sm="12" class="mx-6">
              <v-responsive>
                <p class="text-h4 text-black text-capitalize secondry-font">
                  {{ furnitureDetailes.title }} {{ furnitureDetailes.category }},
                  {{ furnitureDetailes.color }}:
                </p>
              </v-responsive>
              <v-responsive>
                <p class="text-subtitle-1 ">
                  <RatingSection />
                  
                </p>
              </v-responsive>
              <v-responsive>
                <p class="mt-4 text-h6 font-weight-bold text-capitalize secondry-font">
                  $•{{ furnitureDetailes.price }}
                </p>
              </v-responsive>

              <v-divider width="200" />

              <v-responsive class="mt-5">
                <p class="text-subtitle-1 font-weight-bold text-black">
                  categorie: 
                  <span class="text-subtitle-2 text-grey-darken-2">
                    {{ furnitureDetailes.category }}
                  </span>
                </p>
              </v-responsive>
              <v-responsive>
                <p class="text-subtitle-1 font-weight-bold text-black">
                  color: 
                  <span class="text-subtitle-2 text-grey-darken-2">
                    {{ furnitureDetailes.color }}
                  </span>
                </p>
              </v-responsive>

              <v-divider width="200" class="mt-5" />

              <v-responsive>
                <div class="d-sm-flex justify-space-between mt-6">
                  <v-btn 
                    variant="outlined"
                    class="hover-outlined-btn"
                    width="140"
                    prepend-icon="mdi-arrow-right"
                  >
                    Buy Now
                  </v-btn>

                  <v-snackbar
                    :timeout="2500"
                    color="yellow-accent-3"
                    elevation="24"
                    location="right bottom"
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        v-bind="props" 
                        elevation="2"
                        width="160"
                        prepend-icon="mdi-cart"
                        class="bg-black hover-btn"
                        @click="addToCartInProductDetailesPage(furnitureDetailes)"
                      >
                        Add to cart
                      </v-btn>
                    </template>
                    <p class="text-h5 text-center">
                        ✔
                    </p>
                    <p class="text-h5 text-center text-black font-weight-bold secondry-font">
                        Add product to cart
                    </p>
                </v-snackbar>
                </div>
              </v-responsive>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="10" sm="12">
            <v-responsive>
                <h1 class="my-2 text-h5 text-black text-center">
                  Description 
                </h1>
              </v-responsive>
            <v-responsive>
                <p class="my-2 text-body-2 text-grey-darken-1">
                  {{ furnitureDetailes.description }}
                </p>
              </v-responsive>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>

import furnitureDetailes from '@/store/furnitureDetailes';
// import GalleryThumbLoop from '@/components/GalleryThumbLoop.vue'
import RatingSection from '@/components/RatingSection.vue'
import { mapActions, mapState  } from 'pinia';
import { useCartStore } from '@/store/cart'

export default {

  components: {
    // GalleryThumbLoop,
    RatingSection,
  },
    data: () => ({
        
    }),
    computed: {
      thumbnail(){
        return this.chairs.thumbnail
      },
      images() {
        return this.furnitureDetailes.images[0],
              this.furnitureDetailes.images[1],
              this.furnitureDetailes.images[2]
      },
      ...mapState(furnitureDetailes , ['furnitureDetailes']),
    },

    methods: {
      ...mapActions(useCartStore ,["addToCartInProductDetailesPage"]),

      
    },

}
</script>

<style>

</style>