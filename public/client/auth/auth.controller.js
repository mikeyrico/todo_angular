angular.module('todoApp')
  .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
    var login = this;

    login.user = {};


    login.submit = function() {
      console.log('submtited');
      // console.log(login.user.username);
      console.log(login.user);
    };

  }])
  .controller('RegisterCtrl', ['$scope', function($scope) {
    var register = this;
  }])
  .service('Auth', ['$http', function($http) {
    var login = function(user) {
      $http({
        method: 'POST',
        url: 'auth/login'
      })
    };

    var logout = function() {};

    return {
      login: login,
      logout: logout
    }
  }]);
