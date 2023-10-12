<script setup>
  import {ref, computed, onMounted} from 'vue';

  const categories = ref([]);

  const categoriesUpperCase = computed(function() {
    return categories.map(category => category.charAt(0).toUpperCase() + category.slice(1));
  });

  onMounted(async function() {
    const resp = await fetch("https://swapi.dev/api/")
    const data = await resp.json();

    categories.value = Object.keys(data);
  })

</script>

<template>
  Swapi Category 1.0

  <span v-if="categories.length == 0">Loading...</span>
  <div v-else>
    <ul>
      <li v-for="category in categoriesUpperCase">{{  category }}</li>
    </ul>
  </div>
</template>
