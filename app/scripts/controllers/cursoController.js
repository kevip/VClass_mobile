'use strict';

angular.module('vclassWebApp')
    .controller('CursoCtrl', ['$http','sessionControl','$routeParams','$scope','$location', 'toastr',function ($http,sessionControl,$routeParams,$scope,$location,toastr) {

        var vm = this;        
        vm.menuTemplate = {url: 'views/menu.html'};        
        vm.url = "http://vclass.app/api/";
        vm.user = {
	      id: sessionControl.get('id'),
	      email: sessionControl.get('email'),
	      name: sessionControl.get('username'),
	      avatar: sessionControl.get('avatar')
	    }
        $http({
		  method: 'GET',
		  url: vm.url+'courses/'+$routeParams.id
		}).then(function successCallback(response) {
			vm.item = response.data;
			console.log(vm.item);			
		}, function errorCallback(response) {
			console.log(response);
		});

		vm.submit = submit;
		vm.editLesson = editLesson;


		function editLesson(id){
			$location.path("/leccion/"+id)
		}

		function submit(e){
			e.preventDefault();						
			$.ajax({
				method: 'POST',
				data:vm.item,
				url: vm.url+'course/update/'+$routeParams.id
			})
			.success(successCallback)
			.error(errorCallback);
			/*$http({
			  method: 'POST',
			  data:vm.item,
			  url: vm.url+'update/'+$routeParams.id
			}).then(successCallback,errorCallback);
*/
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
