describe("Todo test ->",function (){
    var Todos;

  beforeEach(angular.mock.module('todoList'));

  beforeEach(inject(function(_Todos_) {
    Todos = _Todos_;
  }));

  it('should exist', function() {
    expect(Todos).toBeDefined();
  });
})