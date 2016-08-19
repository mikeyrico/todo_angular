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
      controllerAs: 'todo',
      authenticate: true
    })
    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
    })
}])
.run(['$rootScope', '$state', 'Auth', '$http', '$window', function($rootScope, $state, Auth, $http, $window) {
  $http({
    method: 'GET',
    url: '/auth/checkauth'
  })
    .then(function(res) {
      console.log('going into chck auth ', res);
      if (!res.data) {
        $window.localStorage.setItem('isLoggedin', false);
      }
    })
    .then(function() {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          console.log('running statechange');
          // console.log('toStates auth method:', toState.authenticate);
          // console.log('result of isAuth:', Auth.isAuth() === 'false');
        if (toState.authenticate && Auth.isAuth() === 'false') {
          $state.transitionTo('login');
          event.preventDefault();
        }
      });
    })
    .catch(function(err) {
      console.log('error', err);
        // $window.localStorage.setItem('isLoggedin', false);
    });

}]);
