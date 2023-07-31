import { defineStore } from "pinia";

export default defineStore ('furnitures' ,{
    persist: true,

    state: () => ({
        furnitureDetailes: [],
    }),
    getters: {

    },
    actions: {
        showDetailes(furniture){
            this.furnitureDetailes = furniture;
        },
        showDetailesChair(chair){
            this.furnitureDetailes = chair;
        },

    },
})