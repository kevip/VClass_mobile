'use strict';

angular.module('vclassWebApp')
    .controller('CursosCtrl', ['$http','sessionControl','$location',function ($http,sessionControl,$location) {

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
		  url: 'http://vclass.app/api/teachers/'+vm.user.id
		}).then(function successCallback(response) {
			vm.cursos = response.data.courses;			  
			console.log(vm.cursos);
		}, function errorCallback(response) {
		
		});
		vm.edit = edit;
		vm.show = show;
		vm.delet = delet;
		vm.add = add;

		function add(){
			$location.path("/curso/nuevo");
		}
		function show(id){
			$location.path("/curso/"+id+"/detalle");
		}
		function delet(id){
			console.log("delete");
		}
		function edit(id){
			
			$location.path("/curso/"+id);
		}


}]);