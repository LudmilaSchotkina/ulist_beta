/*Ilia's_code*/

function SomeCtrl($scope) {
    $scope.countries = [
        {id:'univRus' , name:'Russia'},
        {id:'univBel' , name:'Belarus'}
    ];
 
    // It's strange, but possible
    $scope.univRus = [ {name:'BP'}, {name:'BSFF'} ];
    $scope.univBel = [ {name:'BSU'}, {name:'BSUIR'} ];
    
    $scope.country = $scope.countries[0];
    ($scope.countryChanged = function(){
        $scope.univer = ($scope.univers = $scope[$scope.country.id])[0];
    })();
}

function Enter($scope) {
    $scope.countries = [
        {id:'univRus' , name:'Russia'},
        {id:'univBel' , name:'Belarus'}
    ];
 
    // It's strange, but possible
    $scope.univRus = [ {name:'BP'}, {name:'BSFF'} ];
    $scope.univBel = [ {name:'BSU'}, {name:'BSUIR'} ];
    
    $scope.country = $scope.countries[0];
    ($scope.countryChanged = function(){
        $scope.univer = ($scope.univers = $scope[$scope.country.id])[0];
    })();
}