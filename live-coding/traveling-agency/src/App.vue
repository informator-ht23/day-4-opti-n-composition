<script setup>
import Header from './components/header/Header.vue';
import Gdpr from './components/cookie/Gdpr.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <RouterView />
  <Gdpr />
</template>

<style>
</style>