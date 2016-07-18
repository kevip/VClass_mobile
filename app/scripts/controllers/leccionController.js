'use strict';

angular.module('vclassWebApp')
    .controller('LeccionCtrl', ['$http','sessionControl','$location','$routeParams','toastr',function ($http,sessionControl,$location,$routeParams,toastr) {

        var vm = this;
        vm.menuTemplate = {url: 'views/menu.html'};        
        vm.user = {
	      id: sessionControl.get('id'),
	      email: sessionControl.get('email'),
	      name: sessionControl.get('username'),
	      avatar: sessionControl.get('avatar')
	    }
        $http({
		  method: 'GET',
		  url: 'http://vclass.app/api/lessons/'+$routeParams.id
		}).then(function successCallback(response) {
			console.log(response.data);
			vm.item = response.data;
			//vm.cursos = response.data.courses;			  
		}, function errorCallback(response) {
		
		});
		vm.submit = submit;

		function submit(e){
			e.preventDefault();
			$.ajax({
				method: 'POST',
				data:vm.item,
				url: 'http://vclass.app/api/lesson/update/'+$routeParams.id
			})
			.success(successCallback)
			.error(errorCallback);

			function successCallback(response){
				console.log(response);
				$location.path("#/cursos");
				toastr.success("Se guardó curso con éxito");	
			}
			function errorCallback(response){

			}
			//$location.path("/leccion/"+id);
		}


}]);