'use strict';

angular.module('vclassWebApp')
  .controller('MenuCtrl', function (authUser, $location, $scope, sessionControl) {
    
    var vm = this;

    vm.logout = logout;
    vm.isActive = isActive;
    $scope.$watch(
      function(){
        return authUser.isLoggedIn();
      },
      function(newVal){
        if(typeof newVal !== 'undefined'){
          vm.isLogin = authUser.isLoggedIn();
        }
    });

    
    vm.user = {
      email: sessionControl.get('email'),
      name: sessionControl.get('username'),
      avatar: sessionControl.get('avatar')
    }

    $scope.$watch(
      function(){
        return sessionControl.get('email');
      },
      function(newVal){
        if(typeof newVal !== 'undefined'){
          vm.user.email = sessionControl.get('email');
        }
    });

    $scope.$watch(
      function(){
        return sessionControl.get('username');
      },
      function(newVal){
        if(typeof newVal !== 'undefined'){
          vm.user.name = sessionControl.get('username');
        }
    });

    function logout(){
      authUser.logout(); 
    }

      function isActive(viewLocation){
          return viewLocation === $location.path();
      }
  });
