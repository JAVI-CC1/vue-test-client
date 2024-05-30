<script lang="ts" setup>
import { useProduct } from '../composables/useProduct';
import { productColumnsTable } from '../helpers';
import { ProductEnum } from '../interfaces';

defineEmits<{
  close: [void];
}>();

interface Props {
  customerId: string;
}

const props = defineProps<Props>();
const { products, isLoading, isShowDialog } = useProduct(props.customerId);
</script>

<template>
  <q-dialog v-model="isShowDialog" persistent @hide="$emit('close')">
    <q-card style="max-width: 750px;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6 text-weight-medium">List products by customer ID: {{ customerId }}</div>
        <q-space />
        <q-btn icon="mdi-close" padding="xs" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <q-table :rows="products" :columns="productColumnsTable" :row-key="ProductEnum.PRIMARY_KEY" hide-bottom
          :rows-per-page-options="[0]" :loading="isLoading">
          <template #loading>
            <q-inner-loading showing color="dark" />
          </template>
        </q-table>
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped></style>