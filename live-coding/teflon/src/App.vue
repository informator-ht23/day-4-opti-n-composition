<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<template>
  <TodoHeader />
  <TodoList />
  <!-- <TodoFooter /> -->
</template>