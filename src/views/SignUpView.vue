<template>
  <!-- class="fill-height" -->
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="12" sm="12">
        <h1 class="text-center text-h4 font-weight-bold">
          Sign
          <span class="text-yellow">
            Up
          </span>
          <sup>
            <v-icon 
            class="text-h6"
            size="small" 
            icon="mdi-checkbox-multiple-marked-outline"
          />
          </sup>
          <!-- <v-divider
            :thickness="2"
            width="70"
            
            class="ml-auto border-opacity-100"
            color=""
            
          ></v-divider> -->
        </h1>
        <p class="my-2 text-center text-h6 text-grey-darken-2">
          Create your new account
        </p>
        <p class="text-grey-darken-4 font-bold text-subtitle-2 text-center">
          _____ .｡. .｡. _____
        </p>
      </v-col>
    </v-row>
    <!-- Milliseconds to wait before opening component. Only applies to hover and focus events. -->
    <v-row align="center" justify="center">
      <v-col cols="12" lg="12" sm="12" align="center">
        <v-hover>
          <template #default="{isHovering , props}">
            <v-btn
              v-bind="props"
              :color="isHovering ? 'yellow' : undefined"
              variant="outlined"
              icon="mdi-google"
              class="my-2"
              @click="signInWithGoogle"
            />
          </template>
        </v-hover>
        
        <v-hover>
          <template #default="{isHovering , props}">
            <v-btn
              v-bind="props"
              :color="isHovering ? 'yellow' : undefined"
              variant="outlined"
              icon="mdi-facebook"
              class="my-2 mx-4"
            />
          </template>
        </v-hover>
        
        <h1 class="my-2 text-center text-body-2 text-grey-darken-1 font-weight-bold">
          _____ .｡. or use your Email for registeration .｡. _____
        </h1>
      </v-col>
    </v-row>
    
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" sm="4" class="mr-10">
        <v-img
          src="@/assets/hero/m-5.png"
          alt="m-1"
          contain
        />
      </v-col>
      <v-col cols="12" lg="5" sm="6" align="center">
        <v-form>
          <v-text-field 
            v-model="email"
            variant="outlined"
            color="yellow-darken-1"
            type="email"
            class="px-3 pb-2"
            label="Email"
            prepend-inner-icon="mdi-email"
          />
          <v-text-field 
            v-model="password"
            variant="outlined"
            color="yellow-darken-1"
            class="px-3 py-2"
            label="Password"
            prepend-inner-icon="mdi-lock"
            :type="fieldType"
            >
          </v-text-field>
          <v-checkbox
            v-model="checkbox"
            label="Show Password"
            value="Show Password"
            class=""
            @click.stop="switchField"
          />
          <!-- to="/feed" -->
          <div class="d-sm-flex justify-space-between">
            <v-btn
              variant="tonal"
              class="mb-3 text-capitalize"
              to="/"
            >
              Cancel
            </v-btn>
            <v-btn
              elevation="0"
              class="mb-3 ml-4 text-capitalize bg-yellow"
              @click="register"
            >
              Sign Up
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="12" sm="12" align="center">
        <p class="my-4 text-center text-h6 text-grey-darken-1 secondry-title">
          Your have account?
          <v-btn
            variant="text"
            to="/login" 
            class="font-weight-bold text-black text-decoration-underline">
            Login 
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    
    data: () => ({
        fieldType: 'password',
        checkbox: false,
    }),

    methods: {
         switchField() {
          this.fieldType = this.fieldType === 'password' ? 'text' : 'password' ;
        },
    },
}
</script>

<script setup>
import { ref } from 'vue';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import router from '@/router';

// import { useRouter } from 'vue-router';


const email = ref("");
const password = ref("");

//& got a reference to our  vue router
// const router = useRouter

// Get Values Email & Password and return Promise(.then)
const register = () => {
  //need .value because ref ()
  createUserWithEmailAndPassword(getAuth() ,email.value ,password.value)
    .then((data) => {
      console.log(data);
      console.log("Successfully registered!");
      //& redirect to the feed
      
      // // this.$router.replace('')
      // this.$router.push('/')
      router.push("/")
    })
    .catch( (error) => {
      console.log(error.code);
      alert(error.message)
    })
};
// Allow a user to login with their Google Account
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth() ,provider)
    .then( (result) => {
      console.log(result.user);
      router.push("/")
    })
    .catch( (error) => {
      // handel error
      console.log(error.code);
    })
};

</script>

<style>

</style>