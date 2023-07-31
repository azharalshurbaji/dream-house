<template>
  <v-navigation-drawer 
    expand-on-hover 
    rail 
    permanent
    color="black"
    class="text-white"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-note-plus"
        title="Add New Product"
        value="addnewproduct"
        to="/data-table"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-home-variant-outline"
        title="Back To Home"
        value="backtohome"
        to="/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-cart-variant"
        title="Products"
        value="products"
        to="/products"
      ></v-list-item>
      <!-- prepend-icon="mdi-file-upload" -->
      
    </v-list>
  </v-navigation-drawer>

  <!-- <v-main style="height: 250px"></v-main> -->
</template>

<script>
export default {};
</script>

<style>
</style>