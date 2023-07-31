<template>
  <v-container>
    <v-row align="center" justify="center">
        <v-col cols="12" lg="12" sm="auto" align="center">
          <div v-if="itemsCount === 0" class="mt-32 grid place-items-center">
            <!-- <v-icon icon="mdi-cart-plus" />   -->
              <p class="text-center text-h4 text-black secondry-font">
                  Your cart is empty 
                  <!-- Add some items to the cart! -->
                </p>
                <p class="mt-4 font-bold text-h4 text-center">
                    ¯\_(ツ)_/¯
                </p>
              <v-btn
                color="yellow"
                class="mt-10 "
                append-icon="mdi-arrow-right"
                to="/products"
              >
                Shop Now
              </v-btn>
            </div>
            <div v-if="itemsCount != 0" class="mt-32 grid place-items-center">
                <p class="text-center text-h4 text-black secondry-font">
                    Your cart 
                </p>
                <p class="font-bold text-subtitle-2 text-center">
                  _____ .｡. o ★ o ★ .｡. _____
                </p>
            </div>
        </v-col>
      </v-row>
      <!-- Products Number in cart  -->
    <v-row align="center" justify="center">
        <v-col cols="12" lg="4" sm="auto">
            <div v-if="itemsCount != 0">
              <p class="text-h5 text-black secondry-font">
                Products Number:
                <span class="text-h6 font-weight-bold">
                  ({{ itemsCount }})
                </span>
              </p>
            </div>
        </v-col>
        <v-spacer></v-spacer>
        
    </v-row>
    
    <v-row align="center" justify="center">
        <v-col cols="12" lg="2" sm="auto" align="center">
          <v-btn 
            v-if="itemsCount != 0"
            :disabled="itemsCount <= 1"
            color="red"
            append-icon="mdi-delete"
            @click="resetCart"
          >
            Reset Cart
          </v-btn>
        </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="12" sm="auto">
        <v-table class="mb-10" fixed-header >
          <!-- <thead>
            <tr>
                <th class="text-left">Product</th>
                <th class="text-left">Info</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Totale Price</th>
                <th class="text-left">Deletes</th>
            </tr>
          </thead> -->

          <tbody>
              <tr v-for="item in cartItems" :key="item">
                <!-- <div class="d-lg-flex align-center justify-space-between"> -->
                  <!-- * Totale Price For Products -->
                <td>
                  <v-img
                    :src="item.thumbnail"
                    width="150"
                    :aspect-ratio="16 / 16"
                  />
                </td>
                <td>
                  <p class="mt-4 text-h6 text-capitalize secondry-font">
                      {{ item.title }}
                  </p>
                  <p class="mt-2 text-subtitle-2 text-grey-darken-1 text-capitalize">
                      {{ item.color }}
                  </p>
                </td>
                <td>
                  <p class="mt-4 text-h6 secondry-font">$•{{ item.price }}</p>
                </td>
                <td>
                  <!--^ Product Quantity -->
                  <v-sheet>
                    <v-btn
                      variant="text"
                      color="blue"
                      class="border"
                      size="small"
                      @click="item.quantity++"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <span class="text-h6 px-2">
                      {{ item.quantity }}
                    </span>
                    <v-btn
                      variant="text"
                      color="blue"
                      class="border"
                      size="small"
                      :disabled="item.quantity < 2"
                      @click="item.quantity--"
                    >
                      <v-icon>mdi-minus-thick</v-icon>
                    </v-btn>
                  </v-sheet>
                </td>
                <td>
                  <p class="mt-4 text-h6 font-weight-bold secondry-font">
                    Total Price:
                  </p>
                  <p class="mt-1 text-h6 text-grey-darken-1 secondry-font">
                    $•{{ item.quantity * item.price }}
                  </p>
                </td>
                <td>
                  <v-dialog
                    v-model="dialog" 
                    width="auto"
                  >
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      color="red"
                      icon="mdi-close"
                      size="small"
                      
                    />
                  </template>
                  <v-card align="center">
                    <v-card-title>
                      <v-icon 
                        size="x-large"
                        class="my-8 pa-8 text-red-darken-1 border rounded-pill"
                        icon="mdi-delete-empty"
                      /> 
                    </v-card-title>
                    <v-card-text class="mb-8">
                      Are you Sure Delete Product from your cart ?
                    </v-card-text>
                    <v-card-actions class="mb-8 d-lg-flex justify-space-evenly">
                      <v-btn 
                          class="bg-red" 
                          @click="dialog = false ,removeFromCart(index)"
                        >
                          Delete
                        </v-btn>
                        <v-btn 
                          color="black"
                          variant="tonal"
                          @click="dialog = false"
                        >
                          Cancel
                        </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                </td>
              </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-divider />

      <v-spacer></v-spacer>
      <!--? Totale Price For Products -->
      <v-col 
        cols="12" 
        lg="12" 
        sm="auto" 
        class="my-6 text-right"      
      >
        <div v-if="itemsCount != 0">
          <p class="text-h5 text-black font-weight-black font-title">
            Total amount:
          </p>
          <p class=" text-h6 mr-9">
            $•{{ totalAmount }}
          </p>
          <v-btn
            color="success"
            prepend-icon="mdi-arrow-right"
            class="my-4 mr-4"
          >
            CheckOut
          </v-btn>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCartStore } from "@/store/cart";
import { mapState, mapActions } from "pinia";

export default {
  data: () => ({
    dialog: false,
    totalItemsAmount: 0,

  }),
  computed: {
    ...mapState(useCartStore, ["cartItems", "itemsCount"]),

    totalAmount() {
      return this.cartItems.reduce((total ,item ) => {
        return total + item.price * item.quantity 
      } , 0);
    },
    
  // totalPrice() {
  //   return this.cart.reduce((total, product) => {
  //     return total + product.price * product.quantity;
  //   }, 0);
  // }

  },
  methods: {
    ...mapActions(useCartStore, ["removeFromCart" ,"resetCart"]),
  },
};
</script>

<style>
</style>