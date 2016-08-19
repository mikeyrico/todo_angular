angular.module('todoApp')
  .service('Auth', ['$http', function($http) {
    var login = function(user) {
      return $http({
        method: 'POST',
        url: 'auth/login',
        data: user
      });
    };

    var logout = function() {};

    var register = function(user) {
      return $http({
        method: 'POST',
        url: 'auth/register',
        data: user
      });
    };

    return {
      login: login,
      logout: logout,
      register: register
    }
  }]);
