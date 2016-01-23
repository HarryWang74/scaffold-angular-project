(function() {
'use strict';

angular.module('myApp', []);

angular.module('myApp').controller('myController', myController);
function myController() {
    var vm = this;
    vm.title = "Angular template";
    console.log("changed")
}

})();