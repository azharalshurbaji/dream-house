<template>
    <section class="">
        <v-container class="fill-height">
            <v-row align="center" justify="center" class="d-flex flex-wrap-reverse">
                <v-col cols="12" lg="4" sm="6">
                    <h1 class="text-h3 mt-10 text-capitalize hero-font">
                        <!-- modern interior design studio -->
                        roseanna moddern sofa
                    </h1>
                    <p class="my-4 text-body-2 text-grey-darken-1">
                        If you are looking for new and distinctive furniture for your home or office, You can choose from various styles, colors, sizes and brands We offer you a wide range of furniture with high quality and affordable prices.
                    </p>
                    <v-btn 
                        class="bg-yellow-accent-2"
                        append-icon="mdi-arrow-right"
                    >
                        Shop Now
                    </v-btn>
                </v-col>
                <v-col cols="12" lg="5" sm="6">
                    <v-img
                        src="@/assets/hero/m-5.png"
                        lazy-src="@/assets/hero/m-5.png"
                        alt="m-1"
                        class="w-auto"
                    />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@500&family=Karla:wght@500&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Asap+Condensed&display=swap'); */

.hero-font {
    font-family: 'Vidaloka', serif !important;
}
.secondry-font {
    font-family: 'Arimo', sans-serif !important;
    /* font-family: 'Palanquin Dark', sans-serif !important; */
}
/* .font-title {
    font-family: 'Asap Condensed', sans-serif !important;
} */


</style>