<script lang="ts" setup>
import HeaderPrincipal from '../components/HeaderPrincipal.vue';
import ViewPageContainer from '../components/ViewPageContainer.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <HeaderPrincipal />
    <router-view v-slot="{ Component, route }">
      <KeepAlive>
        <ViewPageContainer>
          <template #content>
            <component :is="Component" :key="route.name" />
          </template>
        </ViewPageContainer>
      </KeepAlive>
    </router-view>
  </q-layout>
</template>

<style lang="sass" scoped>
</style>
