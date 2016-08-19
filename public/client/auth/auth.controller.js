angular.module('todoApp')
  .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
    var login = this;
    login.user = {};


    login.submit = function() {
      Auth.login(login.user)
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        })
    }


  }])
  .controller('RegisterCtrl', ['$scope', 'Auth', function($scope, Auth) {
    var register = this;
    register.user = {};


    register.submit = function() {
      Auth.register(register.user)
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        })
    }


  }]);
