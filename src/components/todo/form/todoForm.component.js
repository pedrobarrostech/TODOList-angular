function todoFormController() {
    var vm = this;    
    vm.add = function (){
        vm.addTodo({todo: angular.copy(vm.todo)});
        delete(vm.todo);
    };
}

angular.module('todoList.todoForm',[]).component('todoFormComponent', {
    template: `
        <form name="todoForm">
            <input class="form-control" placeholder="Description" type="text" ng-model="$ctrl.todo.description" ng-required="true" name="nome" />
            <input ng-if="false" type="text" ng-model="todo.id" ng-value="$ctrl.todo.id"/>
        </form>
        <button class="btn btn-primary btn-block" ng-disabled="todoForm.$invalid" ng-click="$ctrl.add()">{{$ctrl.btnText}} TODO</button>
    `,
    bindings:{
        todo: '<',
        btnText: '<',
        addTodo: '&'
    },
    controller: todoFormController
});