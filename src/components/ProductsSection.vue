<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="12" sm="12">
                <v-text-field
                    v-model="searchValue"
                    clearable
                    variant="outlined"
                    color="black"
                    label="Search..."
                    append-inner-icon="mdi-magnify"
                />
            </v-col>
        </v-row>

        <v-row align="center" justify="center">
            <!-- <v-btn @click="deleteFilters">Deleet filter</v-btn> -->
            <!-- <v-col cols="12" lg="1" sm="3">
                <v-select 
                    v-model="allItems"
                    :items="['all']" 
                    label="all"    
                />
            </v-col> -->
            
            <v-col cols="12" lg="4" sm="3">
                <v-sheet class="">
                    <v-select
                        variant="outlined"
                        clearable
                        label="Type Furniture"
                        v-model="itemsTitle"
                        :items="[
                            'chestefield',
                            'egg chair',
                            'mid-century',
                            'occasional',
                            'wingback',
                            'scalloped',
                        ]"
                        class="rounded-circle"
                    />
                </v-sheet>
            </v-col>
            <v-col cols="12" lg="4" sm="3">
                <v-sheet class="">
                    <v-select
                        variant="outlined"
                        clearable
                        label="Color"
                        v-model="itemsColor"
                        :items="[
                            'red',
                            'green',
                            'blue',
                            'white',
                            'black',
                            'purple',
                            'yellow',
                            'silver',
                            'other',
                        ]"
                        class="rounded-circle"
                    />
                </v-sheet>
            </v-col>
            <v-col cols="12" lg="4" sm="3">
                <v-sheet class="">
                    <v-select
                        variant="outlined"
                        clearable
                        label="Category"
                        v-model="itemsCategory"
                        :items="[
                            'sofa',
                            'chair',
                        ]"
                        class="rounded-circle"
                    />
                </v-sheet>
            </v-col>
        </v-row>
        <div v-if="LoaddingSpinner">
            <LoaddingSpinner />
        </div>
        <div v-else>
            <v-row align="center" justify="center">
                <!-- ? Search errorMsg -->
                <div class="my-16 error-msg" v-if="searchValue &&! filteredFurnitures.length">
                    
                    <p class="text-h4 text-center text-grey-darken-1">
                        {{ errorMsg }}
                    </p>
                    <p class="text-h4 text-center text-grey-darken-1">
                        ಥ_ಥ
                    </p>
                </div>
                <!-- <v-col cols="12" lg="2" sm="auto" class="border"> -->
                    <!-- <p class="text-h5">Colors:</p>
                    <v-chip-group v-model="selectedChips">
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="''"
                            class=""
                        >
                            all
                        </v-chip>
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'red'"
                            class="chip-foucs bg-red"
                        /> 
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'green'"
                            class="chip-foucs bg-green"
                        />
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'blue'"
                            class="chip-foucs bg-blue"
                        />
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'yellow'"
                            class="chip-foucs bg-yellow"
                        />
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'purple'"
                            class="chip-foucs bg-purple"
                        />
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'white'"
                            class="chip-foucs bg-white border"
                        />
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'black'"
                            class="chip-foucs bg-black"
                        />
                        <v-chip
                            rounded="e-lg s-lg"
                            :value="'grey'"
                            class="chip-foucs bg-grey"
                        />
                        
                    </v-chip-group>

                    <v-radio-group v-model="selectedCategory">
                        <v-radio
                            rounded="e-lg s-lg"
                            :value="''"
                            label="all"
                        >
                        </v-radio>
                        <v-radio
                            rounded="e-lg s-lg"
                            :value="'chair'"
                            label="chair"
                        >                            
                        </v-radio>
                        <v-radio
                            rounded="e-lg s-lg"
                            :value="'sofa'"
                            label="sofa"
                        >                            
                        </v-radio>
                    </v-radio-group>

                    <v-sheet
                        class="my-10"
                    >
                        <v-select
                            variant="outlined"
                            label="Type"
                            v-model="itemsTitle"
                            :items="[
                                'all',
                                'chestefield chair',
                                'egg chair',
                                'mid-century chair',
                                'occasional chair',
                                'wingback chair',
                                'scalloped chair',
                            ]"
                            width="40"
                            height="40"
                            class="rounded-circle"
                        />
                    </v-sheet> -->

                <!-- <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="''"
                    label="all"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'red'" color="red"
                    label="red"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'green'" color="green"
                    label="green"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'blue'" color="blue"
                    label="blue"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'yellow'" color="yellow"
                    label="yellow"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'purple'" color="purple"
                    label="purple"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'white'" color="black" class=""
                    label="white"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'black'" color="black"
                    label="black"
                />
                <v-checkbox
                    hide-details
                    v-model="selectedChips"
                    :value="'grey'" color="grey"
                    label="grey"
                /> -->
        
        
                    <!-- <v-chip v-for="chip in filteredChips" :key="chip.color" :value="chip">
                        {{ chip.color }}
                        {{ chip.name }}
                    </v-chip>
                    <v-btn v-if="filteredChips.length < chips.length"
                    @click="displayCount += 3">Load more</v-btn> -->
            <!-- </v-col> -->

                <v-col
                    v-for="furniture in filteredFurnitures"
                    :key="furniture.id"
                    cols="12"
                    lg="4"
                    sm="12"
                    align="center"
                >
                <v-sheet
                    align="center"
                    class="border px-3"
                >
                    <v-sheet height="200" class="d-flex align-start ">
                        <v-img
                            :src="furniture.thumbnail"
                            :lazy-src="furniture.thumbnail"
                            alt="notFound"
                            width="200"
                            aspect-ratio="1"
                            class="bg-gry-lighten-2"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                    class="fill-height align-center justify-center ma-0"
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey-lighten-5"
                                    />
                                </v-row>
                            </template>
                        </v-img>
                    </v-sheet>
                    <v-sheet
                        class="d-flex align-start mb-6 border"
                        width="200"
                        height="100"
                    >
                    <v-card-text >
                        <!-- <div class="d-flex justify-space-evenly my-5 mx-5"></div> -->
                        <sapn class="mt-2 text-h6 font-weight-black text-center text-grey-darken-3">
                            $•{{ furniture.price }}
                        </sapn>
                        <h1 class="text-body-1 text-capitalize secondry-font">
                            <span class="text-center text-lowercase" v-html="highlightSearchResults(furniture.title) || furniture.title" ></span>
                            <!-- {{ furniture.title }} -->
                        </h1>
                        </v-card-text>
                    </v-sheet>
                    <v-btn
                        class="my-2 bg-black hover-btn"
                        block
                        variant="text"
                        append-icon="mdi-arrow-right"
                        :to="{name: 'productDetailes' ,params:{ id: furniture.id}}"
                        @click="showDetailes(furniture)"
                    >
                        detailes
                    </v-btn>
                    <!-- <v-snackbar
                        :timeout="2500"
                        color="yellow-accent-3"
                        elevation="24"
                        location="right bottom"
                    >
                        <template v-slot:activator="{ props }">
                            <v-btn
                                v-if="!isLoggedIn"
                                v-model="isLoggedIn"
                                v-bind="props" 
                                block
                                elevation="2"
                                append-icon="mdi-cart"
                                class="mb-4 bg-black hover-btn"
                                @click="addToCart(furniture)"
                            >
                                Add to cart
                            </v-btn>
                        </template>
                        <p class="text-h5 text-center">
                            ✔
                        </p>
                        <p class="text-h5 text-center text-black font-weight-bold secondry-font">
                            Add product to cart
                        </p>
                    </v-snackbar> -->

                <!-- <v-dialog
                    v-model="dialog" 
                    
                    width="auto"
                >
                <template v-slot:activator="{ props }">
                    <v-btn 
                        v-bind="props"
                        block
                        color="black"
                        elevation="2"
                        append-icon="mdi-cart"
                        class="mb-4 hover-btn"
                        @click="addToCart(furniture) ,dialog = true"
                    >
                    Add to cart
                    </v-btn>
                </template>
                    <v-card>
                        <v-card-text>
                            Add product to cart
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="dialog = false">
                                OK
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>   -->
                    
                </v-sheet>
            </v-col>
        </v-row>
    </div>
    </v-container>
</template>



<script>
import { mapActions } from 'pinia'
import { useCartStore } from '@/store/cart'
import furnitureDetailes from '@/store/furnitureDetailes'
import LoaddingSpinner from './LoadingSpinner.vue'


export default {

    components: {
        LoaddingSpinner,
    },

    
    data: () => ({
        furnitures: [],
        LoaddingSpinner: false,

        selectedChips: '',
        selectedCategory: null,

        allItems: '',
        itemsTitle: null,
        itemsColor: null,
        itemsCategory: null,
        searchValue: '',
        errorMsg: 'No resulte found !',
    
    }),
    
    computed: {

        filteredFurnitures(){
            // ? Process Search Input
            if(this.searchValue != "" && this.searchValue){
                return this.furnitures.filter( (item) => {
                    // Resolve Problem : Cannot read propereties of undefined (raeding 'toLowerCase')
                    return item.title?.toLowerCase().includes(this.searchValue.toLowerCase())
                    //  ||
                    // item.color.toLowerCase().includes(this.searchValue.toLocaleLowerCase())
                })
            }
            //~ اظهار جميع العناصر و حذف/تفريغ جميع الفلاتر
            //~ clearable ولكن تم استبدال هذا الكود بخاصية  
            // if(this.allItems === "all"){
            //     return this.furnitures.filter((item) => {
            //         (   this.itemsTitle = [], 
            //             this.itemsCategory = [], 
            //             this.itemsColor =[]
            //         )
            //         return item;
            //     })
            // }
            //& فلترة العناصر بحسب العنوان 
            if(this.itemsTitle){
                return this.furnitures.filter((item) => {
                return item.title === this.itemsTitle })
            }
            //& فلترة العناصر بحسب اللون
            if(this.itemsColor){
                return this.furnitures.filter((item) => {
                return item.color === this.itemsColor })
            }
            if(this.itemsColor && this.itemsCategory){
                return this.furnitures.filter((item) => {
                return item.color === this.itemsColor &&
                    item.category === this.itemsCategory
                })
            }
            //& فلترة العناصر بحسب الفئة
            if(this.itemsCategory){
                return this.furnitures.filter((item) => {
                return item.category === this.itemsCategory })
            }
            return this.furnitures;
            

            // if(this.selectedChips === ''){
            //     return this.furnitures
            // } 
            // else{
            //     return this.furnitures.filter(furniture => 
            //     furniture.color === this.selectedChips)
            // }

            // if(this.selectedChips === ''){
            //     return this.furnitures
            // } 
            // const filtered = this.furnitures.filter(furniture => {
            //     return (
            //         furniture.color === this.selectedChips ||
            //         furniture.category === this.selectedCategory 
            //     )
            // })
            // return filtered;

            
        },

        //* فلترة العناصر عن طريق الرقائق مع اخفاء و اظهار العناصر الاضافية
        // filteredChips() {
        //     let filtered = this.chips.filter(chip => {
        //         if(this.selectedChips.length === 0){
        //             return true
        //         } else {
        //             return this.chips.includes(chip)
        //         }
        //     })
        //     return filtered.slice(0 , this.displayCount)
        // },
    },

    created() {
        this.loadFurnitures();
    },
    methods: {

        // loadFurnitures() {
        //     this.LoaddingSpinner = true
        //     this.axios.get("http://localhost:3001/furnitures")
        //     .then(response => {
        //         this.furnitures = response.data.furnitures
        //         console.log(response)
        //         this.LoaddingSpinner = false
        //     })
        //     .catch(error => {
        //         if(error)
        //         {   alert('Loading Field')} 
        //     })
        // },

        async loadFurnitures() {
            this.LoaddingSpinner = true
            try {
                let res = await fetch("http://localhost:3001/furnitures");
                this.furnitures = await res.json();
                this.LoaddingSpinner = false
                console.log(res)
            } catch (error) {
                console.error("Loadding Field" , error.code);
            }
        },

        //? Create HighLight when Search Items
        highlightSearchResults(data) 
        {
            if(this.searchValue)
            { 
            const re = new RegExp(this.searchValue, 'i');
            const highlightedData = data.replace( re,
            `<span class="highlightText">${this.searchValue}</span>` );
            return highlightedData;
            }
        },
        ...mapActions(furnitureDetailes , ["showDetailes"]),
        ...mapActions(useCartStore ,["addToCart"])

        // loadFurnitures(){
        //     fetch('http://localhost:3001/furnitures')
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        // }
    },

}
</script>


<style>

/* .chip-foucs
{
    width: 30px !important;
    height: 30px !important;
}
.chip-foucs:focus
{
    outline: 2px solid #000;
    outline-offset: 3px;
} */

.home-page {
  max-width: 800px;
  margin: 0 auto;
}

.highlightText
{
    background-color:#ffff00;
    color: #000;
}
.hover-btn:hover
{
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #000;
    transition: .5s;
}
.hover-outlined-btn:hover
{
    background-color: #0f0f0f !important;
    color: #fff !important;
    border: 1px solid #0f0f0f;
    transition: .5s;
}
.disabled-btn
{
    background-color: #fff !important;
    color: #464646 !important;
    /* border: 1px solid #000; */
    /* transition: .5s; */
    cursor: not-allowed;
}


</style>