<template>
  <div class="container">
    <div>
      <div class="input__div">
        <div class="input__wrapper">
          <input type="text" placeholder="Введите задачу" v-model="newTask" />
        </div>
      </div>
      <button v-on:click="addtask">Добавить</button>
      <div class="task-list">
        <div v-for="task in tasks" class="list">
          <label class="material-checkbox">
            <input type="checkbox" v-model="task.test">
            <span></span>
          </label>
          <div class="text" :class="{completed: task.test}">{{ task.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "taskList",
    data() {
      return {
        newTask: "",
        tasks: null,
        picked: {
          task: ""
        }
      };
    },
    methods: {
      addtask() {
        if (this.newTask.trim() == "") return;
        let task = {
          text: this.newTask
        };
        this.tasks.push(task);
        this.newTask = "";
      }
    },
    created() {
      fetch('https://kodaktor.ru/j/tasklist')
        .then(response => response.json())
        .then(({
          list
        }) => {
          var obj = [];
          list.forEach(function (element,i) {
            obj.push({text: element});
          });
          (this.tasks = obj)
        });
    }
  };
</script>

