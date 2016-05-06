/**
 * Created by Dev on 30.04.2016.
 */
app.controller('authorizationCtrl', function ($scope, $http, userServices) {
        $scope.fieldInput = {
              login:'',
              password:''
        };

        $scope.authorizationUser = function ()
        {
                if($scope.fieldInput.login.length==0 || $scope.fieldInput.password.length==0) return;
                
                var params = {
                        login: $scope.fieldInput.login,
                        password:$scope.fieldInput.password
                };
                var promise = $http.post('/api/authorization/', {params:params}).success(function (res) {
                        if(res=='password_not_found') toastr.warning('Incorrect password');
                        else if(res=='user_not_found') toastr.warning('The user is not found');
                        else {
                                userServices.setUserId(res);
                                toastr.success('authentication is successful');
                        }
                });
                promise.then(fulfiled, rejected);
        };

        function fulfiled() {}

        function rejected() {}

});