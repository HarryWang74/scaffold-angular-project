(function() {
'use strict';
angular.module('myApp', []);

angular.module('myApp').service('myService', myService);
myService.$inject = ['$q', '$http'];
function myService($q,$http){
    var vm = this;
    vm.loadData = loadData;

    function loadData(){
        var url = "phones.json";
        var deferred = $q.defer();
        
        $http.get(url).then(
            success, 
            fail
        );

        function success(data) {
            console.log(data);
            deferred.resolve();
        }

        function fail(){
            console.log("load regions json fail");
            deferred.reject();
        }

        return deferred.promise;
    }
}

angular.module('myApp').controller('myController', myController);
myController.$inject = ['myService'];
function myController(myService) {
    var vm = this;
    vm.title = "Angular template";
    vm.sayHello = sayHello;
    myService.loadData();

    function sayHello(){
        return "hello";
    }
}

})();