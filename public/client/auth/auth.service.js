angular.module('todoApp')
  .service('Auth', ['$http', '$state', '$window', function($http, $state, $window) {
    var login = function(user) {
      return $http({
        method: 'POST',
        url: 'auth/login',
        data: user
      });
    };

    var logout = function() {
      return $http({
        method: 'GET',
        url: 'auth/logout'
      })
      .then(function(res) {
        console.log('successfully logged out');
        $state.go('login');
      });
    };

    var register = function(user) {
      return $http({
        method: 'POST',
        url: 'auth/register',
        data: user
      });
    };

    var isAuth = function() {
      return $http({
        method: 'GET',
        url: 'auth/checkauth'
      })
      .then(function(res) {
        console.log('>>>>', res);
        if (res.status === 200) {
          return true;
        }
        return false;
      })
      .catch(function(err) {
        console.log(err);
      });
    }

    return {
      login: login,
      logout: logout,
      register: register,
      isAuth: isAuth
    }
  }]);
