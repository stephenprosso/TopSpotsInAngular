angular.module('topSpots', []);

angular.module('topSpots').controller("HomeController", HomeController);

function HomeController($http) {
    var vm = this;
    var apiUrl = "http://localhost:49832/api/getTopSpot";
    $http
        .get(apiUrl)
        .then(function(response) {
            vm.places = response.data;
        });

    vm.AddNewSpot = function AddNewSpot() {
        var newTopSpot = {
            Name: vm.newSpotName,
            Description: vm.newSpotDescription,
        };
        $http
            .post(apiUrl, newTopSpot)
            .then(function(response) {
                vm.places = response.data;
            });
    }
}
