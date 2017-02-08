function todoCtrl() {
    var vm = this;

    vm.delete = function () {
        vm.removeTodo({todo: vm.todo});
    }

    vm.update = function (todo) {
        vm.updateTodo(todo);
    }
}

angular.module('todoList.todoListItem',[]).component('todolistitemComponent', {
    template: `
            {{$ctrl.todo.description}}
            <input type="checkbox" ng-model="$ctrl.todo.done" ng-checked="$ctrl.todo.done"/>
            <span class="glyphicon glyphicon-remove" ng-click="$ctrl.delete($ctrl.todo)"></span>
            <span class="glyphicon glyphicon-pencil" ng-click="$ctrl.update($ctrl.todo)"></span>
        `,
    bindings: {
        todo: '<',
        updateTodo: '&',
        removeTodo: '&'
    },
    controller: todoCtrl,
});