'use strict';

/**
 * @ngdoc overview
 * @name vclassWebApp
 * @description
 * # vclassWebApp
 *
 * Main module of the application.
 */
angular
  .module('vclassWebApp', [
    'authService',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer',
    'toastr',
    'ui.select', 
    'ngSanitize'
  ])
  .config(function ($httpProvider, $routeProvider, $authProvider) {
    /*$httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
*/
    $authProvider.loginUrl = "http://vclass.app/auth_login";
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/login',{
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl as ctrl'
        })
        .when('/cursos',{
          templateUrl: 'views/cursos.html',
          controller: 'CursosCtrl as ctrl'
        })
        .when('/curso/:id',{
          templateUrl: 'views/curso.html',
          controller: 'CursoCtrl as ctrl'
        })
        .when('/curso/:id/detalle',{
          templateUrl: 'views/curso_detalle.html',
          controller: 'CursoDetalleCtrl as ctrl'
        })
        .when('/leccion/:id',{
            templateUrl: 'views/leccion.html',
            controller: 'LeccionCtrl as ctrl'

        })
        .when('/perfil',{
            templateUrl: 'views/perfil.html',
            controller: 'PerfilCtrl as ctrl'

        })
        .when('/curso/:id/nueva-leccion',{
            templateUrl: 'views/nueva_leccion.html',
            controller: 'NuevaLeccionCtrl as ctrl'

        })
        .when('/curso-nuevo',{
            templateUrl: 'views/nuevo_curso.html',
            controller: 'NuevoCursoCtrl as ctrl'

        })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, authUser, toastr){
    var privateRoutes = ['/','admin'];
    $rootScope.$on('$routeChangeStart', function(){
      if( ($.inArray($location.path(), privateRoutes) !== -1) && !authUser.isLoggedIn()){
        toastr.error("Debe iniciar sesion");
        $location.path('/login');
      }
    });
  });
