import { ref, computed, onMounted } from 'vue';
import { useClientStore } from '../stores/client.store';
import { storeToRefs } from 'pinia';
import { api } from 'src/boot/axios';
import type { ClientDirectlyBackend } from '../interfaces';

export const useClient = () => {
  const clientStore = useClientStore();
  const { clients, clientsFilter, isLoading, tableFilter } = storeToRefs(clientStore);
  const showProductsByCustomerId = ref<string>('');

  const getClients = async (): Promise<void> => {
    try {
      const { data } = await api.get<ClientDirectlyBackend[]>('/clients');
      clientStore.addClients(data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  onMounted(async () => {
    await getClients();
  });

  return {
    // Properties
    clients,
    clientsFilter,
    isLoading,
    showProductsByCustomerId,
    tableFilter: computed({
      get() {
        return tableFilter.value;
      },
      // setter
      set(newValue) {
        clientStore.setTableFilter(newValue);
      },
    }),

    // Methods
  };
};
