describe("Todo List Item test ->", function () {
    var $componentController;

    beforeEach(module('todoList'));
    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it('should expose an object', function () {
        const objDescription = "Teste";
        var bindings = {todo:{description:objDescription}};
        var ctrl = $componentController('todolistitemComponent', null, bindings);

        expect(ctrl.todo).toBeDefined();
        expect(ctrl.todo.description).toBe(objDescription);
    });

    it('should call the "removeTodo" binding, when deleting todo', function (){
        var removeTodoSpy = jasmine.createSpy('removeTodo');
        var bindings = {todo:{}, removeTodo:removeTodoSpy};
        var ctrl = $componentController('todolistitemComponent', null, bindings);
        
        ctrl.delete();
        expect(removeTodoSpy).toHaveBeenCalledWith({todo: ctrl.todo});
    });

    it('should call the "updateTodo" binding, when updating todo', function (){
        var updateTodoSpy = jasmine.createSpy('updateTodo');
        var bindings = {todo:{}, updateTodo:updateTodoSpy};
        var ctrl = $componentController('todolistitemComponent', null, bindings);

        ctrl.update(bindings.todo);
        expect(updateTodoSpy).toHaveBeenCalledWith({});
    });
})