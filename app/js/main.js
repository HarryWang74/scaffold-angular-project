(function() {
'use strict';

myController.$inject = ['myService'];
angular.module('myApp', []);

angular.module('myApp').service('myService', myService);
myService.$inject = ['$q', '$http'];
function myService($q,$http){
    var vm = this;
    vm.loadData = loadData;

    function loadData(){
        var url = "/js/phones.json";
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
function myController(myService) {
    var vm = this;
    vm.title = "Angular template";
    myService.loadData();
}

})();