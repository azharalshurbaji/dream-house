<template>
  <v-container class="mt-5">
    <v-row>
        <v-col cols="12" lg="3" sm="6" class="mx-auto">
            <h1 class="text-h4 font-weight-bold text-capitalize secondry-font">
                crafted with exellent material.
            </h1>
            <p class="my-3 text-body-2 text-grey-darken-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quis aliquam. Modi magnam facere similique numquam itaque tenetur eligendi laudantium maxime! Asperiores labore enim totam.
            </p>
            <v-btn 
              class="my-3 bg-grey-darken-4 rounded-pill"
              append-icon="mdi-arrow-right"
            >
              Explore
            </v-btn>
        </v-col>
        <v-col 
          v-for="chair in chairs"
          :key="chair.id"
          cols="12" 
          lg="3" 
          sm="6"
        >
          <!--  -->
          <v-hover >
            <template #default="{isHovering , props}">
              <!-- :color="isHovering ? 'grey-lighten-2 && elevation-5' : undefined " -->
              <v-sheet
                v-bind="props"
                :color="isHovering ? 'grey-lighten-4' : undefined "
                class="mx-auto border rounded-xl my-10"
                width="200"
                height="240"
                align="center"
              >
                <v-img 
                :src="chair.thumbnail"
                width="200"
                class="mt-n16"
              />
              <p class="my-2 text-center font-weight-medium text-button-1">
                {{ chair.title }}
              </p>
              <p class="mb-2 text-center font-weight-bold text-caption">
                $•{{ chair.price }}
              </p>
                <!-- <v-hover>
                  <v-btn 
                    class="mt-2 bg-grey-darken-4 rounded-pill" 
                    :class="{ 'show-btns' : isHovering }"
                    icon="mdi-plus"
                    size="small"
                  />
                </v-hover> -->
                <v-btn 
                  class="mt-2 bg-grey-darken-4 rounded-pill" 
                  icon="mdi-plus"
                  size="small"
                  :to="{name: 'productDetailes' ,params:{ id: chair.id}}"
                  @click="showDetailesChair(chair)"
                />
              </v-sheet>
            </template>
          </v-hover>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'pinia'
import c1 from "../assets/chairs/c1.png"
import cs1 from "@/assets/chairs/cs1.jpg"
import c2 from "../assets/chairs/c2.png"
import c3 from "../assets/chairs/c3.png"
import furnitureDetailes from '@/store/furnitureDetailes'

export default {
    data:() => ({
      chairs: [
        {
          id: 31,
          thumbnail: c1,
          images: [
            cs1
          ],
          title: 'Mid-century Chair',
          price: '200',
          category: 'chair',
          color: 'yellow',
          description: 'Furnishings are the things that decorate a home and make it more comfortable and beautiful. Common furnishings are carpets, curtains, pillows, pillows, sheets, throws, blankets, and towels. Furnishings vary in colors, shapes, sizes, materials and prices. Furnishings can be chosen according to personal taste, according to the fashion of decoration, or according to the season. Furniture must be kept clean and changed from time to time to maintain the health of residents and air quality in the home.'
        },
        {
          id: 32,
          thumbnail: c2,
          title: 'Egg Chair',
          price: '500',
          category: 'chair',
          color: 'white',
          description: 'Furnishings are the things that decorate a home and make it more comfortable and beautiful. Common furnishings are carpets, curtains, pillows, pillows, sheets, throws, blankets, and towels. Furnishings vary in colors, shapes, sizes, materials and prices. Furnishings can be chosen according to personal taste, according to the fashion of decoration, or according to the season. Furniture must be kept clean and changed from time to time to maintain the health of residents and air quality in the home.'
        },
        {
          id: 33,
          thumbnail: c3,
          title: 'Barrel Chair',
          price: '400',
          category: 'chair',
          color: 'green',
          description: 'Furnishings are the things that decorate a home and make it more comfortable and beautiful. Common furnishings are carpets, curtains, pillows, pillows, sheets, throws, blankets, and towels. Furnishings vary in colors, shapes, sizes, materials and prices. Furnishings can be chosen according to personal taste, according to the fashion of decoration, or according to the season. Furniture must be kept clean and changed from time to time to maintain the health of residents and air quality in the home.'
        },
      ]
    }),
    computed: {
      thumbnail(){
        return this.chairs.thumbnail
      },
    },
    methods: {
      ...mapActions(furnitureDetailes , ["showDetailesChair"])
    },
}
</script>

<style>

.show-btns {
    color: #141414 !important;
    background-color: rgba(0, 0, 0, .1) !important;
    backdrop-filter: blur(12px) !important;
    border: 2px solid #141414 !important;
}

</style>