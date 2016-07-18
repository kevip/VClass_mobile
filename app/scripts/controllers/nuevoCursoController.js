'use strict';

angular.module('vclassWebApp')
    .controller('NuevoCursoCtrl', ['$http','sessionControl','$location','$routeParams','toastr',function ($http,sessionControl,$location,$routeParams,toastr) {

        var vm = this;
        vm.menuTemplate = {url: 'views/menu.html'};        
        vm.user = {
	      id: sessionControl.get('id'),
	      email: sessionControl.get('email'),
	      name: sessionControl.get('username'),
	      avatar: sessionControl.get('avatar')
	    }
	    vm.item = {teacher_id: vm.user.id};

	    $http({
		  method: 'GET',
		  url: 'http://vclass.app/api/categories/'
		}).then(function successCallback(response) {
			console.log(response);
			vm.categories = response.data;
		}, function errorCallback(response) {
		
		});

		vm.submit = submit;

		function submit(e){

			e.preventDefault();								
			$.ajax({
				method: 'POST',
				data:vm.item,
				url: 'http://vclass.app/api/courses/'
			})
			.success(successCallback)
			.error(errorCallback);

			function successCallback(response) {
				$location.path("#/cursos");
				toastr.success("Se guardó curso con éxito");
			}
			function errorCallback(response) {
				toastr.error("ocurrió un error al guardar");
				console.log(response);
			}
		}
}]);