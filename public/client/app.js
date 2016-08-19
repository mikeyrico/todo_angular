var app = angular.module('todoApp', [
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './client/auth/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .state('register', {
      url: '/register',
      templateUrl: './client/auth/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'register'
    })
    .state('todo', {
      url: '/todo',
      templateUrl: './client/todo/todo.html',
      controller: 'TodoCtrl',
      controllerAs: 'todo'
    })
}]);
