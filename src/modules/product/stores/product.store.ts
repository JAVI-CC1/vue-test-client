import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product, ProductDirectlyBackend } from '../interfaces';

export const useProductStore = defineStore('product', () => {
  //States
  const productsDirectlyBackend = ref<ProductDirectlyBackend[]>([]);
  //End States

  //Getters
  const products = computed<Product[]>(() =>
    productsDirectlyBackend.value.map((p) => {
      return {
        id: p._id,
        productName: p.productName,
        mbSpeed: p.mbSpeed,
        gbData: p.gbData,
        productTypeName: p.productTypeName,
        terminalNumbering: p.numeracioTerminal,
        soldAt: p.soldAt,
        customerId: p.customerId,
      };
    })
  );
  //End Getters

  //Actions
  const addProducts = (clients: ProductDirectlyBackend[]): void => {
    productsDirectlyBackend.value = clients;
  };
  //End Actions

  return {
    //States

    //Getters
    products,

    //Actions
    addProducts,
  };
});
