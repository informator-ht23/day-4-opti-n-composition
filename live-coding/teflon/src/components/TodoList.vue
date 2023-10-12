<script setup>
import { computed, ref } from 'vue';

import TodoItem from './TodoItem.vue';
import TodoNewField from './TodoNewField.vue';

/** DATA DECLARATIONS */
const title = ref('Todo list title');
const items = ref([
  {
    value: 'Bananer',
    isDone: false
  },
  {
    value: 'Kaffe',
    isDone: false
  }
]);

/** COMPUTED DECLARATIONS */
const todoRemainingCounter = computed(function() {
  const todosRemaining = items.value.filter(item => !item.isDone);
  return todosRemaining.length;
});

const isTodoEmpty = computed(() => todoRemainingCounter.value > 0);

/** METHOD DECLARATIONS */
function handleCheckboxClick(todo) {
  todo.isDone = !todo.isDone;
}

function handleNewTodo(value) {
  items.value.push({value, isDone: false});
}

function handleDeleteTodo(itemValue) {
  items.value = items.value.filter(item => item !== itemValue);
}
</script>

<template>
  <h3>{{ title }}</h3>
  <p v-if="isTodoEmpty">Du har {{ todoRemainingCounter }} todos kvar</p>
  <div v-for="item in items">
    <TodoItem 
      @onCheckboxClicked="handleCheckboxClick(item)"
      @onTodoDeleted="handleDeleteTodo(item)">
        <label>{{ item.value }}</label>
    </TodoItem>
  </div>

  <div>
    <TodoNewField @onNewTodoClicked="handleNewTodo"/>
  </div>

</template>


<style>
  .del-btn {
    margin-left: 1em;
  }

  .new-todo-btn {
    border: none;
    margin: .5em;
    border-radius: .3em;
    padding: .2em .3em;
    background-color: rgb(129, 255, 75);
    font-size: 1em;
  }

  .disabled-btn {
    background-color: rgb(75, 120, 255);
  }

  .cool-border {
    border: 2px white dashed;
  }
</style> 