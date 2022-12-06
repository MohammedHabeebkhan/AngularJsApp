
const baseUrl = 'https://jsonplaceholder.cypress.io/';

let addUserModule = angular.module("addUserModule",[])



addUserModule.controller("addUserController",($scope, $http)=>{
$scope.newUser ={};

$scope.saveUser = function(){
    $scope.loader = true;
    console.log($scope.newUser);
    $http.post(baseUrl + "users",$scope.newUser).then((response)=>{
        console.log("User Created  Successfully");
        $scope.loader = false;
    },(error)=>{
        console.log("No User Created");
        $scope.loader = false;
    }
    )
}
})