<template>
  <section class="background-sec">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="12" sm="auto">
          <h1 class="text-center text-h4 font-weight-bold">Welcome Back</h1>
          <p class="mb-2 font-bold text-subtitle-2 text-center">
            _____ .｡. o ★ o ★ .｡. _____
          </p>
          <p class="text-center text-body-1 text-grey-darken-1 text-capitalize">
            login to your account
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="6" sm="12">
          <v-form>
            <v-sheet
              v-if="errorMsg"
              class="my-6 py-6 bg-red-lighten-5 error-msg-box"
            >
              <p class="text-center text-red font-weight-bold">
                ❌ {{ errorMsg }}
              </p>
            </v-sheet>
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
            />
            <v-checkbox
              v-model="checkbox"
              label="Show Password"
              value="Show Password"
              class=""
              @click.stop="switchField"
            />
            <v-btn
              block
              class="my-5 bg-black hover-btn text-capitalize"
              @click="register"
            >
              Login
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="12" sm="12" align="center">
          <p class="my-2 text-center text-body-2 text-grey-darken-1 font-weight-bold">
            ________________ .｡. OR .｡. ________________
          </p>
          <v-responsive>
            <div class=" my-6">
              <v-hover>
                <template #default="{isHovering , props}">
                  <v-btn
                    v-bind="props"
                    :color="isHovering ? 'yellow-darken-2' : undefined"
                    variant="tonal"
                    height="50"
                    prepend-icon="mdi-google"
                    class="my-2 text-capitalize font-weight-bold"
                    @click="signInWithGoogle"
                  >
                      Sign with Google
                  </v-btn>
                </template>
              </v-hover>
              <v-hover>
                <template #default="{isHovering , props}">
                  <v-btn
                    v-bind="props"
                    :color="isHovering ? 'yellow-darken-2' : undefined"
                    variant="tonal"
                    height="50"
                    prepend-icon="mdi-facebook"
                    class="my-2 text-capitalize mx-4"
                  >
                      Sign with Facebook
                  </v-btn>
                </template>
              </v-hover>
            </div>
          </v-responsive>
          <p class="my-4 text-center text-h6 text-grey-darken-1 secondry-title">
            Don't have account?
            <v-btn
              variant="text"
              to="/sign-up"
              class="text-body-1 font-weight-bold text-black text-decoration-underline"
            >
              Create account
            </v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword, 
    signInWithPopup 
  } from "firebase/auth";
import router from "@/router";
// // import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errorMsg = ref(); // Error Massege

// got a reference to our  vue router
// // const router = useRouter

// Get Values Email & Password and return Promise(.then)
const register = () => {
  //need .value because ref ()
  const auth = getAuth(); //from firebase/auth
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      // console.log(data);
      console.log("Successfully signed in!");
      console.log(auth.currentUser);

      //? redirect to the feed
      router.push("/");
      // this.$router.push('/')
    })
    .catch((error) => {
      console.log(error.code);

      switch (error.code) {
        case "auth/invalid-email":
          errorMsg.value = "Invalid email";
          break;

        case "auth/user/not-found":
          errorMsg.value = "No account with that email was found";
          break;

        case "auth/wrong-password":
          errorMsg.value = "Incorrect password";
          break;

        default:
          errorMsg.value = "Email or password was incorrect";
          break;
      }
      // alert(error.message)
    });
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

<script>
export default {
  data: () => ({
    fieldType: "password",
    checkbox: false,
  }),

  methods: {
    switchField() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
    },
  },
};
</script>


<style>

.error-msg-box
{
  /* border: 1px solid #ff000086 !important; */
  transition: .5s;
}

</style>