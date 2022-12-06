const baseUrl = 'https://jsonplaceholder.cypress.io/';

let app = angular.module("crudApp",[]);
app.controller('crudController',($scope, $http)=>{
    $scope.test = "tesstttt.."
    $scope.loader = true;
    $http.get(baseUrl+"users").then((response)=>{
       
        $scope.usersList = response.data;
        $scope.loader = false;
    },
    (error)=>{
        console.log(error)
        $scope.loader = false;
    });

    $scope.editUserID = function(id){
    console.log("ID:"+ id);
    $scope.userDetails = $scope.usersList[id-1];
    console.log($scope.usersList[id-1]);
    $scope.UserId = id;
    }

    $scope.deleteUserID = function(id){
    console.log("ID:"+ id);
    $scope.UserId = id; 
    }

    $scope.editUser = function(id){
        $scope.loader = true;
        console.log("Edit USER:"+id)
        console.log( $scope.usersList[id-1]);

        var editUserData = { 
            name : $scope.userDetails.name, 
            email : $scope.userDetails.email, 
        } 

        $http.put(baseUrl + "users/"+ id, editUserData).then((response)=>{   
            console.log("User Updated Successfully");  
            // window.location= "/";     
        },(error)=>{
            console.log("Problem updating User");
        })
         
    };

    $scope.deleteUser = function(id){
        $scope.loader = true;
        console.log("DELETE USER:"+id)
        $http.delete(baseUrl +"users/"+ id).then((response)=>{
            console.log("User Deleted Successfully");
            $scope.loader = false;
        },(error)=>{
            console.log(error);
            $scope.loader = false;
        })
    };
})
