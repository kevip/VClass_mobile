'use strict';

angular.module('vclassWebApp')
    .controller('NuevaLeccionCtrl', ['$http','sessionControl','$location','$routeParams','toastr',function ($http,sessionControl,$location,$routeParams,toastr) {

        var vm = this;
        vm.menuTemplate = {url: 'views/menu.html'};        
        vm.user = {
	      id: sessionControl.get('id'),
	      email: sessionControl.get('email'),
	      name: sessionControl.get('username'),
	      avatar: sessionControl.get('avatar')
	    }

		vm.submit = submit;

		function submit(e){

			e.preventDefault();
			vm.item.course_id = $routeParams.id;
			$.ajax({
				method: 'POST',
				data:vm.item,
				url: 'http://vclass.app/api/lessons/'
			})
			.success(successCallback)
			.error(errorCallback);

			function successCallback(response) {
				$location.path("#/");
				toastr.success("Se guardó curso con éxito");
			}
			function errorCallback(response) {
				toastr.error("ocurrió un error al guardar");
				console.log(response);
			}
		}
}]);