describe('Todo main test ->', function () {
    var $componentController;

    beforeEach(module('todoList'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('Add Todo ->', function () {

        it('should add the Todo when calling "addTodo"', function () {
            //const descriptionText = 'Teste';
            var ctrl = $componentController('todoComponent', null, null);
            var todo = {
                todo: {
                    id: 0,
                    description: 'Teste',
                    done: 'false'
                }
            };
            ctrl.addTodo(todo);

            expect(ctrl.todos.list).toBeDefined();
            console.log(ctrl.todos.list);
            expect(ctrl.todos.list[2].description).toEqual('Teste');
        });

        it('should update the Todo when calling "addTodo" with id', function () {
            const descriptionText = 'Teste',
                descriptionTextUpdate = 'TesteUpdate';
            var ctrl = $componentController('todoComponent', null, null);
            var todo = {
                todo: {
                    id: 0,
                    description: descriptionText,
                    done: 'false'
                }
            };

            ctrl.addTodo(todo);
            todo.id = ctrl.todos.list[2].id;
            todo.description = descriptionTextUpdate;

            console.log(ctrl.todos.list);

            expect(ctrl.todos.list).toBeDefined();
            expect(ctrl.todos.list[2].description).toEqual(descriptionTextUpdate);
        });
    });
});