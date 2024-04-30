import { defineStore } from "pinia";
import { IProduct } from "../models/product.model";


export const useProductStore = defineStore("comments", {
  state: () => ({
    products: [] as IProduct [],
  }),
  getters: {},
  actions: {
    async fetchProducts() { 
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL_BASE}/product`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Comments");
        }
        const data = await response.json();
        console.log(data);
        this.products = data;
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching Comments:", error);
        throw error;
      }
    },

    // async postComment(featureId:number, text:string) {
    //   try {
    //     const url = `${import.meta.env.VITE_API_URL_BASE}/comments/${featureId}`;
    //     const response = await fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ comment: text }) 
    //     });
    
    //     if (!response.ok) {
    //       throw new Error("Failed to create Comment");
    //     }
    
    //     const data = await response.json();
    //     console.log(data.data);
    //     let newComment = data.data;
    //     // this.comments.push(newComment);
    //   } catch (error) {
    //     console.error("Error creating Comment:", error);
    //     throw error;
    //   }
    // }
    

  },
});
