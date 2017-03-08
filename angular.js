angular.module('topSpots', []);

angular.module('topSpots').controller("HomeController", HomeController);

function HomeController($http) {
    var vm = this;

    $http
    .get("index.json")
    .then(function(response){
            vm.places = response.data;
        });
}
