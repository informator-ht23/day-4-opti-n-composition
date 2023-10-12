<script>
import TodoItem from './TodoItem.vue';
import TodoNewField from './TodoNewField.vue';

export default {
  components: {
    TodoItem,
    TodoNewField
},
  data() {
    return {
      title: 'Todo list title',
      items: [
        {
          value: 'Bananer',
          isDone: false
        },
        {
          value: 'Kaffe',
          isDone: false
        }
      ]
    };
  },
  methods: {
    handleCheckboxClick: function (todo) {
      todo.isDone = !todo.isDone;
    },
    handleNewTodo: function(value) {
      this.items.push({value, isDone: false});
    },
    handleDeleteTodo: function(itemValue) {
      this.items = this.items.filter(item => item !== itemValue);
    }
  },
  computed: {
    todoRemainingCounter() {
      const todosRemaining = this.items.filter(item => !item.isDone);
      return todosRemaining.length;
    },
    isTodoEmpty() {
      return this.todoRemainingCounter > 0;
    }
  }
};
</script>

<template>
  <h3>{{ this.title }}</h3>
  <p v-if="isTodoEmpty">Du har {{ todoRemainingCounter }} todos kvar</p>
  <div v-for="item in this.items">
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