
<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h3>User Profile</h3>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="updateProfile">
          <v-text-field
            label="Name"
            v-model="name"
            required
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="email"
            disabled
          ></v-text-field>
          <v-text-field
            label="Photo URL"
            v-model="photoURL"
          ></v-text-field>
          <v-btn type="submit" color="primary">Save</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      email: "",
      photoURL: "",
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.name = user.displayName;
        this.email = user.email;
        this.photoURL = user.photoURL;
        this.getUserData(user.uid);
      } 
      // else {
      //   this.$router.push("/login");
      // }
    });
  },
  methods: {
    async getUserData(uid) {
      const db = getFirestore();
      const docRef = doc(db, "profiles", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.name = docSnap.data().name;
      }
    },
    async updateProfile() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, {
          displayName: this.name,
          photoURL: this.photoURL,
        });
        const db = getFirestore();
        const docRef = doc(db, "profiles", user.uid);
        await setDoc(docRef, { name: this.name }, { merge: true });
        this.$toast.success("Profile updated successfully");
      }
    },
  },
};
</script>

<style scoped>
</style>



<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Select a category"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <v-radio-group v-model="selectedSort">
          <v-radio label="Price" value="price"></v-radio>
          <v-radio label="Rating" value="rating"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-chip-group v-model="selectedProducts" multiple>
          <v-chip
            v-for="product in filteredProducts"
            :key="product.id"
            :value="product.id"
            close
          >
            {{ product.name }} - {{ product.price }} - {{ product.rating }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: null,
      selectedSort: null,
      selectedProducts: [],
      categories: ["Electronics", "Books", "Clothes"],
      products: [
        { id: 1, name: "Laptop", category: "Electronics", price: 1000, rating: 4.5 },
        { id: 2, name: "Headphones", category: "Electronics", price: 50, rating: 4 },
        { id: 3, name: "Novel", category: "Books", price: 10, rating: 3.5 },
        { id: 4, name: "T-shirt", category: "Clothes", price: 15, rating: 4.2 },
        { id: 5, name: "Camera", category: "Electronics", price: 500, rating: 4.8 },
        { id: 6, name: "Jeans", category: "Clothes", price: 40, rating: 3.9 },
      ],
    };
  },
  computed: {
    filteredProducts() {
      // filter products by selected category
      let filtered = this.products.filter(
        (product) => product.category === this.selectedCategory
      );
      // sort products by selected sort option
      if (this.selectedSort) {
        filtered.sort((a, b) => b[this.selectedSort] - a[this.selectedSort]);
      }
      return filtered;
    },
  },
};
</script> -->

<!-- <template>
    <div id="app">
      <v-app id="inspire">
        <v-container>
          <v-checkbox
            v-for="product in products"
            :key="product.id"
            :label="product.name"
            :value="product.id"
            v-model="selectedProducts"
          ></v-checkbox>
          <v-btn @click="sortProducts">Sort Products</v-btn>
          <div v-for="product in sortedProducts" :key="product.id">
            {{ product.name }} - {{ product.price }}
          </div>
        </v-container>
      </v-app>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: "Laptop", price: 1000 },
          { id: 2, name: "Phone", price: 500 },
          { id: 3, name: "Tablet", price: 700 },
          { id: 4, name: "Headphones", price: 300 },
        ],
        selectedProducts: [],
        sortedProducts: [],
      };
    },
    methods: {
      sortProducts() {
        this.sortedProducts = this.products.filter((product) =>
          this.selectedProducts.includes(product.id)
        );
      },
    },
  };
  </script> -->