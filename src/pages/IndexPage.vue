<template>
  <q-page class="list">
    <RouterLink to="/expenses">Expenses</RouterLink>
    <RouterLink to="/expenses">Expenses</RouterLink>
    <RouterLink to="/expenses">Expenses</RouterLink>
  </q-page>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
defineOptions({
  name: 'IndexPage',
});
</script>
<style lang="scss" >
.list{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>