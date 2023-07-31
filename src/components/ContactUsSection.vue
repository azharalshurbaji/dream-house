<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" lg="12" sm="12">
          <p class="text-h4 text-center text-black font-weight-bold hero-font">
            Contact Us
          </p>
          <p class="font-bold text-subtitle-2 text-center">
            _____ .｡. o ★ o ★ .｡. _____
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" lg="6" sm="6">
          <v-sheet class="" rounded>
            <v-card flat class="mx-auto px-6 py-8">
              <v-form ref="form" @submit.prevent="sendEmail">
                <v-text-field
                  v-model="fullName"
                  type="text"
                  :readonly="loading"
                  :rules="[required]"
                  clearable
                  label="fullName"
                  variant="outlined"
                  placeholder="Enter your fullName"
                />
                <v-text-field
                  v-model="email"
                  type="email"
                  :readonly="loading"
                  :rules="[required]"
                  class="my-3"
                  clearable
                  label="Email"
                  variant="outlined"
                  placeholder="Enter your Email"
                ></v-text-field>

                <v-textarea
                  v-model="message"
                  type="message"
                  :readonly="loading"
                  :rules="[required]"
                  clearable
                  label="Message"
                  variant="outlined"
                  placeholder="Enter your message"
                />

                <br />
                <v-dialog
                  v-model="dialog"
                  transition="dialog-top-transition"
                  width="auto"
                >
                <!-- :style="{ cursor: !form ? 'not-allowed' : '' }" -->
                  <template v-slot:activator="{ props }">
                    <v-btn
                      :disabled="!this.email || !this.fullName || !this.message"
                      v-bind="props"
                      :loading="loading"
                      block
                      contenteditable="false"
                      color="black"
                      size="large"
                      type="submit"
                      variant="elevated"
                    >
                        Send Message
                    </v-btn>
                  </template>
                  <v-card class="px-8" align="center">
                    <v-btn 
                      class="my-5 "
                      variant="tonal"
                      density="comfortable"
                      size="x-small"
                      icon="mdi-close"
                      @click="dialogClose"
                    />
                    <v-card-title>
                        <!-- we are pleased to be at your service -->
                        <lord-icon
                            src="https://cdn.lordicon.com/lupuorrc.json"
                            trigger="loop"
                            delay="1000"
                            colors="primary:#121331,secondary:#ffff00"
                            style="width:250px;height:250px" 
                        />
                    </v-card-title>
                    <v-card-text>
                        <p class="text-center text-h4">
                            Success !
                        </p>
                        <p class="text-center text-subtitle-1 text-grey-darken-2">
                            your request has been sent successfully
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-form>
            </v-card>
          </v-sheet>
        </v-col>
        <v-col cols="12" lg="5" sm="6" class="mt-5">
          <p class="my-8 text-h5 text-black font-weight-bold secondry-font">
            Welcome to our Shop we are pleased to be at your service ...
          </p>
          <div class="my-5" location="left center">
            <v-icon 
              icon="mdi-phone-plus" 
              variant="outlined" 
              class="pa-5 rounded-pill border"
            />
            <v-btn
              href="tel:+963 000 000 000"
              size="large"
              variant="text"
              class=""
            >
              +963 000-000-000
            </v-btn>
              <br>
            <v-icon 
              icon="mdi-gmail" 
              variant="outlined" 
              class="my-4 pa-5  rounded-pill border"
            />
            <v-btn
              href="mailto:DreamHouse@gmail.com"
              size="large"
              variant="text"
              class="text-button text-capitalize"
            >
              DreamHouse@gmail.com
            </v-btn>
              <br>
            <v-icon 
              icon="mdi-google-maps" 
              variant="outlined" 
              class="pa-5 rounded-pill border"
            />
            <v-btn
              size="large"
              variant="text"
              class="text-button text-capitalize"
            >
              Damascus - CityCenter
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

export default {
  data: () => ({
    form: false,
    email: null,
    fullName: null,
    message: null,
    loading: false,
    dialog: false,
  }),

  methods: {

    onSubmit() {
      if (!this.email || !this.fullName || !this.message) {
        this.dialog = false
      }
        if (!this.form) return;
      this.loading = true
      setTimeout(
        () => (
          (this.email = []),
          (this.fullName = []),
          (this.message = []),
          (
            this.loading = false,
            this.dialog = true
          )),2000
      );
    },
    required(v) {
      return !!v || "Field is required";
    },

    dialogClose() {
      this.dialog = false
      this.email = [],
      this.fullName = [],
      this.message = []
    },
  },
};
</script>

<style>
.border-btn {
  border: 1px solid #ffd000 !important;
}
v-btn:disabled {
  cursor: not-allowed !important;
}
</style>