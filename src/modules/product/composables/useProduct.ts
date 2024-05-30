import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';
import { useProductStore } from '../stores/product.store';
import { storeToRefs } from 'pinia';
import { api } from 'src/boot/axios';
import type { ProductDirectlyBackend } from '../interfaces';

export const useProduct = (customerId: string) => {
  const productStore = useProductStore();
  const { products } = storeToRefs(productStore);
  const isLoading = ref<boolean>(true);
  const isShowDialog = ref<boolean>(true);


  const getProducts = async (): Promise<void> => {
    try {
      const { data } = await api.get<ProductDirectlyBackend[]>(`/products?customerId=${customerId}`);
      productStore.addProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
    }

    isLoading.value = false;
  };

  
  onMounted(async () => {
    await getProducts();
    isLoading.value = false;
  });

  onUnmounted(async () => {
    isShowDialog.value = false;
    productStore.addProducts([]);
    isLoading.value = true;
  });

  return {
    // Properties
    products,
    isLoading,
    isShowDialog,

    // Methods
  };
};
