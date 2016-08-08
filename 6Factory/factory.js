//Ejemplo de Factory
app.controller('MainCtrl', function MainCtrl(formlyVersion, $scope, $http, chargeOptions, dataResource) {
	$http.get('options/config.json').success(function (data) {
	        //Convert data to array.
	        //datos lo tenemos disponible en la vista gracias a $scope
	        $scope.datos = data;
	        });
	        //datosResource lo tenemos disponible en la vista gracias a $scope
	         $scope.datosResource = dataResource.get();
	         console.log($scope.datosResource);





app.factory("dataResource", function ($resource) {
    return $resource("options/config.json", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})