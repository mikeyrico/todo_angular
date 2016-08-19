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
.run(['$rootScope', '$state', 'Auth', function($rootScope, $state, Auth, $window) {
    console.log('running run >>>>>>>>>>>');
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      console.log('running statechange');
      console.log('toStates auth method:', toState.authenticate);
      console.log('result of isAuth:', Auth.isAuth());
    // if (toState.authenticate && !Auth.isAuth()) {
    //   console.log('authenticated');
    //   $state.transition('login');
    //   event.preventDefault();
    // }
    Auth.isAuth()
      .then(function(bool) {
        if (!bool) {
          $state.transitionTo('login');
          event.preventDefault();
        }
      });
  });
}]);
