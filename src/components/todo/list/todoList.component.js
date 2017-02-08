function todoListCtrl() {
    var vm = this;

    vm.delete = function (todo) {
        vm.removeTodo({todo: todo});
    }

    vm.update = function (todo) {
        vm.updateTodo({
            todo: todo
        });
    }
};


angular.module('todoList.todoList',[]).component('todoListComponent', {
    template: `
            <h3>Todo List</h3>
            <div class="list-group">
                <div class="list-group-item taskTodo"  ng-class="{'taskDone':todo.done}" ng-repeat="todo in $ctrl.todoList track by todo.id">
                    <todolistitem-component todo="todo" update-todo="$ctrl.update(todo)" remove-todo="$ctrl.delete(todo)"></todolistitem-component>
                </div>
            </div>
        `,
    bindings: {
        todoList: '<',
        updateTodo: '&',
        removeTodo: '&'
    },
    controller: todoListCtrl,
});