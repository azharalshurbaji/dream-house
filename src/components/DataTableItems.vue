<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" sm="12">
        <v-chip class="text-h6 font-weight-bold pa-5" variant="outlined">
          Number of Products:
          <span class="text-h5 ml-2">
            {{ getDataTableItemsCount }}
          </span>
        </v-chip>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="2" sm="12">
        <v-btn 
          prepend-icon="mdi-plus"
          color="black"
          class="mt-5 text-capitalize" 
          @click="dialog = true"
        > 
          Add New Product 
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog" width="auto" persistent>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="12" sm="12">
          <v-card class="border px-5">
            <v-btn
              icon="mdi-close"
              size="30"
              variant="tonal"
              class="mt-5"
              @click.prevent="closeDialog()"
            />
            <v-card-title>
              <p class="my-5 text-h4 font-weight-bold text-center">
                Add New Product
              </p>
            </v-card-title>
            <v-container>
              <v-form>
                <v-row justify="center" align="center">
                  <v-col cols="12" lg="6" sm="6">
                    <v-text-field
                      v-model="title"
                      label="Product Name"
                      color="yellow"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col cols="12" lg="6" sm="6">
                    <v-text-field
                      v-model="price"
                      prepend-inner-icon=""
                      label="price"
                      color="yellow"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col cols="12" lg="6" sm="6">
                    <v-text-field
                      v-model="description"
                      label="Description"
                      color="yellow"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col cols="12" lg="6" sm="6">
                    <v-text-field
                      v-model="category"
                      type="text"
                      prepend-inner-icon=""
                      label="category"
                      color="yellow"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col cols="12" lg="6" sm="6" align="center">
                    <div v-if="!uploadedThumbnail">
                      <input
                        type="file"
                        id="furnitureThumbnail"
                        placeholder="Furniture Image"
                        ref="thumbnail"
                        :class="{ 'form-data-err': formDataErr }"
                        @change="validateFurnitureThumbnail()"
                        @input="validateFurnitureThumbnail()"
                        @click="validateFurnitureThumbnail()"
                      />
                      <span v-if="formDataErr" class="err-feedback">
                        <br />
                        {{ formDataErrMsg }}
                      </span>
                    </div>
                    <div v-else>
                      <span class="text-success">
                        <v-icon icon="mdi-check-circle" />
                        Uploaded Furniture Thumbnail:
                      </span>
                      <v-img
                        :src="uploadedThumbnail"
                        alt="uploaded thumbnail"
                        width="150"
                        aspect-ratio="1"
                      />
                      <v-btn
                        title="Delete Image"
                        class="bg-red text-capitalize my-2"
                        @click="removeImage()"
                      >
                        Remove Thumbnail
                      </v-btn>
                    </div>
                    <!-- @change="validateFurnitureThumbnail($event)"
                @input="validateFurnitureThumbnail($event)" -->
                  </v-col>
                  <v-col cols="12" lg="8" sm="12">
                    <v-snackbar
                      v-model="snackbar"
                      :timeout="2500"
                      color="yellow-accent-4"
                      elevation="24"
                      location="right bottom"
                    >
                      <template #activator="{ props }">
                        <v-btn
                          v-bind="props"
                          block
                          color="white"
                          class="ma-2 bg-yellow text-capitalize"
                          @click.prevent="(dialog = false), addNewProduct()"
                        >
                          Add New Product
                        </v-btn>
                      </template>
                      Product added successfully.
                    </v-snackbar>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>

  <v-container>
    <v-row align="center" justify="center" class="">
      <v-col cols="12" lg="12" sm="12">
        <v-table fixed-header height="900" class="text-center">
          <thead>
            <tr>
              <th class="bg-grey-darken-4 text-center text-h6">id</th>
              <th class="bg-grey-darken-4 text-center text-h6">Name Product</th>
              <th class="bg-grey-darken-4 text-center text-h6">Price</th>
              <th class="bg-grey-darken-4 text-center text-h6">description</th>
              <th class="bg-grey-darken-4 text-center text-h6">category</th>
              <th class="bg-grey-darken-4 text-center text-h6">Thumbnail</th>
              <th class="bg-grey-darken-4 text-center text-h6">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(furniture, index) in furnitures"
              :key="furniture.id"
              :class="[index % 2 == 0 ? 'bg-grey-lighten-5' : 'bg-white']"
            >
              <td>
                <p class="text-body-1 font-weight-bold">
                  <!-- {{ i + 1 }} -->
                  {{ furniture.id }}
                </p>
              </td>
              <td>
                <v-card-title class="text-body-1 text-center font-weight-bold">
                  {{ furniture.title }}
                </v-card-title>
              </td>

              <td>
                <v-card-title class="text-body-1 text-center font-weight-bold">
                  <small>&dollar;</small>•<b>{{ furniture.price }}</b>
                </v-card-title>
              </td>

              <td>
                <v-card-title class="text-body-1 text-center">
                  {{ trucate(furniture.description) }}
                </v-card-title>
              </td>

              <td>
                <v-card-title class="text-center text-black-lighten-1">
                  {{ furniture.category }}
                </v-card-title>
              </td>

              <td>
                <v-img
                  :src="furniture.thumbnail"
                  :lazy-src="furniture.thumbnail"
                  aspect-ratio="1"
                  alt="img"
                  width="100"
                />
              </td>
              <td>
                <div class=" d-lg-flex justify-space-evenly align-items-center">
                  <v-btn
                    title="Remove Product" 
                    class="d-block" 
                    color="red-darken-2" 
                    variant="tonal"
                  >
                    <v-icon icon="mdi-delete-empty" />
                    <v-overlay
                      activator="parent"
                      location-strategy="connected"
                      scroll-strategy="block"
                    >
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
                        <v-card-actions
                          class="mb-8"
                        >
                          <v-btn
                            class="bg-red"
                            @click="removeFurnitures(furniture.id)"
                          >
                            Delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-overlay>
                  </v-btn>
                  <v-btn
                    class=""
                    title="Product Detailes"
                    color="black"
                    variant="outlined"
                    :to="{name: 'productDetailes' ,params:{ id: furniture.id}}"
                    @click="showDetailes(furniture)"
                  >
                    <v-icon icon="mdi-arrow-right" />
                  </v-btn>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapState, mapActions } from "pinia";
import { useDataTableStore } from "@/store/dataTable";
import furnitureDetailes from "@/store/furnitureDetailes";

export default {
  data: () => ({
    snackbar: false,
    dialog: false,

    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",

    thumbnail: null,
    uploadedThumbnail: "",
    isThumbnailValidate: false,
    formDataErr: false,
    formDataErrMsg: "",
  }),

  computed: {
    ...mapState(useDataTableStore, ["furnitures", "getDataTableItemsCount"]),
  },

  created() {
    this.loadFurnitures();
  },

  methods: {
    ...mapActions(useDataTableStore, [
      "loadFurnitures",
      "removeFurnitures",
      "trucate",
    ]),

  ...mapActions(furnitureDetailes , ["showDetailes"]),

  closeDialog() {
    this.dialog = false
    this.title = "",
    this.price = "",
    this.description = "",
    this.category = "",
    this.uploadedThumbnail = null;
  },

    validateFileExtensions(id) {
      // Verify the value Id
      let fileInput = document.getElementById(id);
      // value the Id
      let filePath = fileInput.value;
      // Allowing File Type
      let allowExtensions = /(\.jpg|\.png|\.jpeg|\.gif)$/i;
      if (!allowExtensions.exec(filePath)) {
        return false;
      } else {
        return true;
      }
    },
    // Display Image
    createImage(file) {
      // new uploadedThumbnail();
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedThumbnail = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    // Remove Image
    removeImage() {
      this.uploadedThumbnail = "";
      setTimeout(() => {
        this.validateFurnitureThumbnail();
      }, 500);
    },
    validateFurnitureThumbnail() {
      // console.log(e.target.value);
      if (this.$refs.thumbnail.files[0]) {
        if (this.validateFileExtensions("furnitureThumbnail") == true) {
          this.formDataErr = false;
          this.isThumbnailValidate = true;
          this.formDataErrMsg = "";
          this.createImage(this.$refs.thumbnail.files[0]);
        } else {
          this.formDataErr = true;
          this.isThumbnailValidate = false;
          // When the image Extension False
          this.formDataErrMsg =
            "furniture Thumbnail has to  be : Jpg, PNG ,Jpeg or Gif";
        }
      } else {
        this.formDataErr = true;
        this.isThumbnailValidate = false;
        // When the image is not there
        this.formDataErrMsg = "Must Select thumbnail furniture !";
      }
    },

    //^ Function For Add New Product
    addNewProduct() {
      // Create a new FormData object
      const formData = new FormData();

      // Add the selected image file to the FormData object
      formData.append("thumbnail", this.uploadedThumbnail);

      // Send a POST request to the JSON server to add the new product
      if( !this.title || 
          !this.price || 
          !this.description || 
          !this.category || 
          !this.uploadedThumbnail )
        {
          alert("Please Check the Entries")
          this.snackbar = false
          this.dialog = true
        } 
        else {

          this.axios
            .post(
              "http://localhost:3001/furnitures",
              {
                id: this.furnitures.length + 1,
                title: this.title,
                price: this.price,
                description: this.description,
                category: this.category,
                thumbnail: this.uploadedThumbnail,
              },
              formData
            )
            // fetch('http://localhost:3001/furnitures' ,{
            //   method: 'POST',
            //   body: formData
            // })
            // .then(response => response.json())
    
            .then((response) => {
              // .then(response => {
              //   const newProduct = response.data =
              //   {
              //     title: this.title,
              //     price: this.price,
              //     category: this.category,
              //     // img: this.img,
              //   }
              this.furnitures.push(response.data);
              console.log(response.data);
              (this.title = ""),
                (this.price = ""),
                (this.description = ""),
                (this.category = "");
              this.uploadedThumbnail = null;
    
              // this.thumbnail = imgUrl
              // this.furnitures.push(data)
              // this.title = ''
              // this.price = ''
              // this.description = ''
            })
            .catch((error) => {
              // If there was an error uploading the image, display an error message
              console.log(error);
              alert("Error Loading Product !");
            });
        }
    },

    // addNewProduct() {
    //   if(!this.title || !this.price || !this.description)
    //   {
    //     alert("Please Full the feilds")
    //     this.snackbar = false
    //   } else{
    //     // const id = this.dataTableItems.length + 1
    //     const newProduct = {
    //       // id: id,
    //       title: this.title,
    //       price: this.price,
    //       description: this.description,
    //       img: this.img,
    //     }
    //     this.furnitures.push(newProduct);
    //     this.title = '',
    //     this.price = '',
    //     this.description = ''
    //     // this.img = ''
    //     }
    // },
  },
};
</script>
  
<style>
/* .v-overlay__scrim{
  background: transparent !important;
}
v-dialog {
  background: transparent !important;
} */

.form-data-err {
  border: 1px solid #f00;
  color: #f00;
  padding: 10px;
}
.err-feedback {
  color: #f00;
}

.updating {
  text-decoration: line-through;
}
</style>