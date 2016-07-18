'use strict';

angular.module('vclassWebApp.services',['ngResource'])
	.factory('Curso', function($resource) {
    	return $resource('http://localhost:8000/api/courses/:id');
	})	
	.factory('Task', function($resource){
		return $resource('http://localhost:8000/api/tasks/:id');
	})
	.factory('Sending',function($resource){
		return $resource('http://localhost:8000/api/sendings/:id');
	})
	.factory('Teacher',function($resource){
		return $resource('http://localhost:8000/api/teachers/:id');
	})
	.factory('Lesson',function($resource){
		return $resource('http://localhost:8000/api/lessons/:id');
	})
	.factory('Login', function($resource){
		return $resource('http://localhost:8000/api/auth_login');
	})
	;