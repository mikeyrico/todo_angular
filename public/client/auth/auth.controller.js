angular.module('todoApp')
  .controller('LoginCtrl', ['$scope', 'Auth', '$state', '$window', function($scope, Auth, $state, $window) {
    var login = this;
    login.user = {};


    login.submit = function() {
      Auth.login(login.user)
        .then(function(res) {
          if (res.status === 200) {
            $window.localStorage.setItem('isLoggedin', true);
            $state.go('todo');
          }
        })
        .catch(function(err) {
          $state.go('login');
        });
    }


  }])
  .controller('RegisterCtrl', ['$scope', 'Auth', '$state', function($scope, Auth, $state) {
    var register = this;
    register.user = {};


    register.submit = function() {
      Auth.register(register.user)
        .then(function(res) {
          console.log(res);
          if (res.status === 200) {
            $state.go('todo');
          }
        })
        .catch(function(err) {
          console.log(err);
        })
    }


  }])
  .controller('LogoutCtrl', ['Auth', function(Auth) {
    Auth.logout();
  }]);
