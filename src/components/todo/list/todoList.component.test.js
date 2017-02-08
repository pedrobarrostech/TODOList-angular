describe('Todo list test ->',function(){
    var $componentController;

    beforeEach(module('todoList'));
    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));
    
    it('should expose an list',function (){
        const todoArray = [
            { id: 1, description: 'Teste1', done: false},
            { id: 2, description: 'Teste2', done: true}            
        ]

        var bindings = { todoList: todoArray};
        var ctrl = $componentController('todoListComponent', null, bindings);

        expect(ctrl.todoList).toBeDefined();
        expect(ctrl.todoList).toBe(bindings.todoList);        
        expect(ctrl.todoList.length).toEqual(2);
        expect(ctrl.todoList[0].id).toEqual(1);
    });

    it('should call the "removeTodo" binding, when deleting todo', function (){
        var removeTodoSpy = jasmine.createSpy('removeTodo');
        var bindings = {todoList:{}, removeTodo:removeTodoSpy};
        var ctrl = $componentController('todoListComponent', null, bindings);
        
        ctrl.delete({});
        expect(removeTodoSpy).toHaveBeenCalledWith({todo: {}});
    });

    it('should call the "updateTodo" binding, when updating todo', function (){
        var updateTodoSpy = jasmine.createSpy('updateTodo');
        var bindings = {todoList:{}, updateTodo:updateTodoSpy};
        var ctrl = $componentController('todoListComponent', null, bindings);

        ctrl.update({});
        expect(updateTodoSpy).toHaveBeenCalledWith({todo: {}});
    });

});