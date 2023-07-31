// Utilities

import axios from 'axios';
import { defineStore } from 'pinia'

export const useDataTableStore = defineStore('dataTable', {
  persist: true,

  state: () => ({
    furnitures: [],
  }),
  getters: {
    // getDataTableItems(state) {
    //     return state.furnitures
    // },
    getDataTableItemsCount(state) {
      return state.furnitures.length
    },
  },
  actions: {

    async loadFurnitures() {
      this.LoaddingSpinner = true
      try {
        let response = await fetch("http://localhost:3001/furnitures",
          { headers: { Authorization: undefined } });
        this.furnitures = await response.json();
        this.LoaddingSpinner = false
        console.log(this.furnitures)
        // console.log(response)
      } catch (error) {
        console.error("Loadding Field", error.code);
      }
    },
    trucate(value, length = 20) {
      return value?.length <= length ? value : value?.substring(0, length) + "...";
    },

    //^ Function For Delete Product
    removeFurnitures(id) {
      // this.furnitures.splice(i , 1)
      axios.delete(`http://localhost:3001/furnitures/${id}`)
      this.furnitures = this.furnitures.filter((furniture) => furniture.id !== id)
    },



    //   loadFurnitures() {
    //   axios.get("http://localhost:3001/furnitures",{ headers: {Authorization: undefined}})
    //     .then(data => {
    //         this.furnitures = data.data.furnitures
    //         console.log(data)

    //     })
    //     .catch(error => {
    //         if(error)
    //         {   alert('Loading Field')} 
    //     })
    // },    




    //   async loadFurnitures() {
    //     this.LoaddingSpinner = true
    //     try {
    //         let res = await fetch("http://localhost:3001/furnitures");
    //         this.furnitures = await res.json();
    //         this.LoaddingSpinner = false
    //         console.log(res)
    //     } catch (error) {
    //         console.error("Loadding Field" , error.code);
    //     }
    // },

    //  loadQuotes() {
    //   axios.get('https://dummyjson.com/quotes', 
    //   { headers: {Authorization: undefined}}
    //   )
    //     .then(response => {
    //       this.quotes = response.data.quotes,
    //       this.LoadingSpinner = false });
    //     },
  }
})
