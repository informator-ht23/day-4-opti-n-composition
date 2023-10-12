<script setup> 
// import {defineEmits} from 'vue';
//  defineEmits(['onCheckboxClicked', 'onTodoDeleted']);


</script>

<template>
  <div>
    <input type="checkbox" @click="$emit('onCheckboxClicked')" />
    <slot>En tom todo</slot> <!-- alternativ från props, tar innehållet från parent's innehåll -->
    <button @click="$emit('onTodoDeleted')" class="del-btn">X</button> 
  </div>
</template>