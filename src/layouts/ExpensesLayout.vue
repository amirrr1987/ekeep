<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="bg-primary text-white shadow-2"
        :breakpoint="0"
      >
        <q-route-tab to="/expenses/payment" name="payment" icon="payment" label="payment" />
        <q-route-tab to="/expenses/" name="purchases" icon="payment" label="Purchases" />
        <q-route-tab to="/expenses/purchase" name="purchase" icon="group" label="purchase" />
        <q-route-tab to="/expenses/users" name="users" icon="person" label="Users" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'ExpensesLayout',
});
const tab = ref('home');
</script>
