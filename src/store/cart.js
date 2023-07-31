// Utilities
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  persist: true,

  state: () => ({
    cartItems: [],
  }),
  getters: {
    itemsCount(state) {
      return state.cartItems.length
    },
  },
  actions: {
    addToCart(furniture) {
      // Check if product already exists in cart
      const existingProduct = this.cartItems.find( item => item.id === furniture.id)

        if(existingProduct) {
          // Increment Quantity of existing product
          existingProduct.quantity ++
        } else {
          // Add new Product to cart
          this.cartItems.push({...furniture , quantity: 1 })
        }
    },
    addToCartInProductDetailesPage(furnitureDetailes) {
      // Check if product already exists in cart
      const existingProduct = this.cartItems.find( item => item.id === furnitureDetailes.id)

        if(existingProduct) {
          // Increment Quantity of existing product
          existingProduct.quantity ++
        } else {
          // Add new Product to cart
          this.cartItems.push({...furnitureDetailes , quantity: 1 })
        }
    },
    removeFromCart(index) {
      this.cartItems.splice(index , 1)
    },
    resetCart() {
      this.cartItems = []
    }
  }
})
