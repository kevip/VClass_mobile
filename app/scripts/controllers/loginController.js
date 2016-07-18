'use strict';

angular.module('vclassWebApp')
  .controller('LoginCtrl', function (authUser) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    var vm = this;
    vm.submit = submit;
    vm.item = {email: 'kevip@vclass.com', password: 'kevip'};
    
    function submit(e){
    	e.preventDefault();
    	authUser.loginApi(vm.item);
    }
  });
