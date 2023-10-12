<script setup>
import { ref } from 'vue';

const fieldValue = ref('');


</script>

<template>
    <input v-model="fieldValue" type="text" placeholder="Yoghurt med ketchupsmak" />
    <button 
      @click="$emit('onNewTodoClicked', fieldValue)" 
      class="new-todo-btn" 
      :class="{ 
        'disabled-btn': fieldValue.length < 1, 
        'cool-border': fieldValue.length > 3
      }" 
      :disabled="fieldValue.length < 1">Lägg till todo</button>
</template>