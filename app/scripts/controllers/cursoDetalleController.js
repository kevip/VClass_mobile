'use strict';

angular.module('vclassWebApp')
    .controller('CursoDetalleCtrl', ['$http','sessionControl','$location','$routeParams',function ($http,sessionControl,$location,$routeParams) {

        var vm = this;
        vm.menuTemplate = {url: 'views/menu.html'};        
        console.log($routeParams);
        vm.user = {
	      id: sessionControl.get('id'),
	      email: sessionControl.get('email'),
	      name: sessionControl.get('username'),
	      avatar: sessionControl.get('avatar')
	    }
        $http({
		  method: 'GET',
		  url: 'http://vclass.app/api/courses/'+$routeParams.id
		}).then(function successCallback(response) {			
			vm.curso = response.data;			  
		}, function errorCallback(response) {
		
		});
		vm.edit = edit;

		function edit(id){
			
			$location.path("/curso/"+id)
		}


}]);