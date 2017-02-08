angular.module('teste',[]).component('testeLista',{
    transclude:true,
    bindings:{
        expression: '@',
        list: '='
    },
    template:`
        <select ng-model="testado" ng-options="{{$ctrl.expression}}"> </select>
    `,
    controller: [
        function controllerDaqui () {
            
        }
    ]
})