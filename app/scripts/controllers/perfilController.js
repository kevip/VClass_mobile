'use strict';

angular.module('vclassWebApp')
    .controller('PerfilCtrl', ['$http','sessionControl','$location','toastr',function ($http,sessionControl,$location,toastr) {

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
		  url: 'http://vclass.app/api/users/'+vm.user.id
		}).then(function successCallback(response) {
			vm.user = response.data;
		}, function errorCallback(response) {
		
		});
		vm.submit = submit;

		function submit(e){	
			e.preventDefault();
			$.ajax({
			  method: 'POST',
			  url: 'http://vclass.app/api/user/update/'+vm.user.id,
			  data: vm.user
			})
			.success(successCallback)
			.error(errorCallback);

			function successCallback(response){
				//sessionControl.set('userIsLogin', true);
				console.log(response);
				sessionControl.set('id', response.id);
				sessionControl.set('email', response.email);
				sessionControl.set('username', response.name);				
				toastr.success("Perfil guardado con éxito!");
        		$location.path('/');
			}
			function errorCallback(response) {
				console.log(response);	
			}
		}
}]);