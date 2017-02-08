describe('Todo Form test ->', function () {
    var $componentController;

    beforeEach(module('todoList'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should expose an object', function () {
        const objDescription = "Teste";

        var bindings = { todo: { description: "Teste" } };
        var ctrl = $componentController('todoFormComponent', null, bindings);

        expect(ctrl.todo).toBeDefined();
        expect(ctrl.todo.description).toEqual(objDescription);
    });

    it('should call the "addTodo" binding, when inserting todo', function (){
        var removeTodoSpy = jasmine.createSpy('removeTodo');
        var bindings = {todoList:{}, addTodo:removeTodoSpy};
        var ctrl = $componentController('todoFormComponent', null, bindings);
        
        ctrl.add();
        expect(removeTodoSpy).toHaveBeenCalledWith({todo: undefined});
    });

});