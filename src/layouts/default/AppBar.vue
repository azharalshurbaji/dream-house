<template>
  <v-app-bar app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />

    <v-app-bar-title class="hidden-sm-and-down">
      <v-icon icon="mdi-home" />
      <span class="text-h6"> Dream House </span>
    </v-app-bar-title>
    <v-btn 
      exact 
      to="/" 
      stacked 
      class="hidden-sm-and-down"
      > 
        Home 
    </v-btn>
    <v-btn 
      to="/products" 
      stacked 
      class="hidden-sm-and-down"
    > 
      Products 
    </v-btn>

    <v-btn 
      v-if="isLoggedIn" 
      to="/cart" 
      stacked 
      class="hidden-sm-and-down"
    >
      <v-badge
        v-if="itemsCount != 0"
        :content="itemsCount"
        color="red"
        floating
      />
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn 
      v-if="!isLoggedIn" 
      to="/sign-up" 
      stacked 
      class="hidden-sm-and-down"
    >
      Sign Up
    </v-btn>

    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      width="auto"
    >
      <template #activator="{ props }">
        <v-btn
          v-if="isLoggedIn"
          v-bind="props"
          class="hidden-sm-and-down"
          @click="dialog = true"
        >
          Sign out
        </v-btn>
        <v-btn 
          v-else 
          to="/login" 
          stacked 
          class="hidden-sm-and-down"
        >
          Login
        </v-btn>
      </template>
      <v-card>
        <v-card-text align="center">
          <v-icon
            size="x-large"
            class="my-2 pa-8 text-red-darken-1 border rounded-pill"
            icon="mdi-logout"
          />
          <div class="text-h6 pa-10">
            Are you sure to Sign out ?
          </div>
        </v-card-text>
        <v-card-actions class="my-5 justify-center">
          <v-btn 
            to="/login"
            variant="tonal"
            color="red" 
            @click="handleSignOut(),(dialog = false)"
          >
            Yes
          </v-btn>
          <v-btn 
            variant="tonal" 
            color="black"
            @click="dialog = false"
          > 
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list class="text-center">
      <v-app-bar-title class="text-center ma-2">
        <v-icon icon="mdi-home" />
        <span class="text-h6">Dream House</span>
        <v-divider class="my-5" />
      </v-app-bar-title>

      <v-list-item>
      <v-btn 
        v-if="isLoggedIn" 
        to="/cart" 
        stacked 
      >
        <v-badge
          v-if="itemsCount != 0"
          :content="itemsCount"
          color="red"
          floating
        />
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-list-item>
    
      <v-list-item>
        <v-btn 
          exact 
          to="/" 
          class="my-2"
          block
          variant="text"
          > 
            Home 
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn 
          to="/products" 
          class="my-2"
          variant="text"
        > 
          Products 
        </v-btn>
      </v-list-item>

      <v-list-item>
        <template v-slot:append>
          <v-list-item>
            <v-btn 
              v-if="!isLoggedIn" 
              to="/sign-up" 
              class="text-capitalize bg-black"
            >
              Sign Up
            </v-btn>
          </v-list-item>
          <div class="pa-2">
            <v-dialog
              v-model="dialog"
              transition="dialog-bottom-transition"
              width="auto"
            >
              <template #activator="{ props }">
                <v-btn
                  v-if="isLoggedIn"
                  block
                  class="bg-black text-capitalize"
                  v-bind="props"
                  @click="dialog = true"
                >
                  Sign out
                </v-btn>
                <v-btn 
                  v-else 
                  to="/login" 
                  variant="outlined"
                  class="text-capitalize"
                >
                  Sign in
                </v-btn>
              </template>
              <v-card>
                <v-card-text align="center">
                  <v-icon
                    size="x-large"
                    class="my-2 pa-8 text-red-darken-1 border rounded-pill"
                    icon="mdi-logout"
                  />
                  <div class="text-h6 pa-10">
                    Are you sure to Sign out ?
                  </div>
                </v-card-text>
                <v-card-actions class="my-5 justify-center">
                  <v-btn 
                    to="/login"
                    variant="tonal"
                    color="red" 
                    @click="handleSignOut(),(dialog = false)"
                  >
                    Yes
                  </v-btn>
                  <v-btn 
                    variant="tonal" 
                    color="black"
                    @click="dialog = false"
                  > 
                    No
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";
// // import { useRouter } from 'vue-router';

// // const router = useRouter;
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/login");
    alert("Successfully logged out");
    // // this.$router.replace('')
    // this.$router.push('/login')
    // console.log(error.code);
  });
};
</script>

<script>
import { mapState } from "pinia";
import { useCartStore } from "@/store/cart";

export default {
  data: () => ({
    dialog: false,
    drawer: false,
  }),
  computed: {
    ...mapState(useCartStore, ["itemsCount"]),
  },
  methods: {},
};
</script>

<style>
</style>