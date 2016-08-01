/**
 * Created by alejoribes on 26/7/16.
 */
//Creamos un módulo, llamado MyFirstApp, este módulo tiene que ir referenciado donde vayamos a utilizarlo, por ejemplo, lo voy a añadir en
// ng-app="myFirstAPP"
var app = angular.module("MyFirstAPP", [])
app.controller("FirstController", function ($scope){
    $scope.nombre = "Alejo";
});