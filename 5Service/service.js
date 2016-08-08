//Ejemplo Servicio Angular 
//En el controllador paro por parámetro el servicio, en este caso, chargeOptions
 app.controller('MainCtrl', function MainCtrl(formlyVersion, $scope, $http, chargeOptions, dataResource) {
       
        //var options = getOptions();
 //Aquí ejecuto un método de mi servicio y ejecuto código en función de su resultaod
        chargeOptions.request()
        .then(function(data){
            $scope.options = data;
            console.log($scope.options);
        }, function(error){
           //error
        });
        console.log($scope.options);

  });
 //Al servicio le incluimos los módulos http y q
app.service('chargeOptions', ['$http', '$q', function($http, $q){
	//utilizamos $q para promesa de devolución de datos
    var request = function(){
        var def = $q.defer();
 	//Hacemos la petición
        $http.get("./options/config.json")
        .then(function(response){
            def.resolve( response.data );
        }, function(response){
            def.reject( 'error' );
        });
 
        return def.promise;
    }
 	//devolvemos la variable request
    return {
        request:request,
    }
    }]);