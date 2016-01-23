'use strict';

/* jasmine specs for controllers go here */
describe('controller testing', function() {
    
    describe('test myController', function(){
        var scope, ctrl;

        // load module
        beforeEach(module('myApp')); 

        // inject $controller into test function
        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('myController', {$scope:scope});
        }));

        it('test method', function() {
            expect(ctrl.sayHello()).toEqual('hello');
        });
    });

});