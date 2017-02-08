function todoController() {
    var vm = this;

    vm.addTodo = addTodo;
    vm.updateTodo = updateTodo;
    vm.removeTodo = removeTodo;
    vm.validListEmpty = validListEmpty;

    vm.const = {
        add: "Add",
        update: "Update"
    }

    vm.btnText = vm.const.add;
    vm.todos = {
        id: 0,
        list: []
    }
    vm.todos.list.push({
        id: vm.todos.id++,
        description: "Do my task",
        done: false
    });
    vm.todos.list.push({
        id: vm.todos.id++,
        description: "Study angular 1.5",
        done: true
    });

    vm.$onInit = function () {
        vm.showList = vm.validListEmpty();
    };

    function validListEmpty() {
        return vm.todos.list.length > 0;
    };

    function listUpdate(obj, list) {
        return list.map(function (item) {
            if (item.id !== obj.id) return item;
            return Object.assign({}, item, obj);
        });
    }

    function addTodo(todo) {
        if (todo.id >= 0) {
            vm.todos.list = listUpdate(todo,vm.todos.list);
        } else {
            todo.id = vm.todos.id++;
            vm.todos.list.push(todo);
            vm.showList = vm.validListEmpty();
        }
        vm.btnText = vm.const.add;
    };

    function updateTodo(todo) {
        vm.btnText = vm.const.update;
        vm.todo = angular.copy(todo);
    };

    function removeTodo(todo) {
        var indexTodo = vm.todos.list.indexOf(todo);
        if (indexTodo >= 0)
            vm.todos.list.splice(indexTodo, 1);
        vm.showList = vm.validListEmpty();
    };
};

angular.module('todoList.todo', []).component('todoComponent', {
    template: `
        <todo-form-component btn-text="$ctrl.btnText" todo="$ctrl.todo" add-todo="$ctrl.addTodo(todo)"></todo-form-component>
        <todo-list-component ng-if="$ctrl.showList" todo-list="$ctrl.todos.list" update-todo="$ctrl.updateTodo(todo)" remove-todo="$ctrl.removeTodo(todo)"></todo-list-component>
        <p><br></p>
        <div ng-if="!$ctrl.showList" class="alert alert-warning">There are no TODO registered.</div>
        <teste-lista list="$ctrl.todos.list" expression="t.description for t in $ctrl.list"></teste-lista>
    `,
    controller: todoController
});