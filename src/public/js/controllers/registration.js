app.controller('registrationCtrl', function ($scope, $http) {
    $scope.login='';
    $scope.password='';
    $scope.passwordConfirmation='';
    $scope.Email='';
    var isRegistration = false;
    
    $scope.getError = function (login, password, passwordConfirmation, email)
    {
        if(angular.isDefined(login))
        {
            if(login.required == true && password.required==true && passwordConfirmation.required==true && email.required==true){
                return 'Fill in all the fields';
            }
            else if(login.required) return 'Enter login';
            else if(password.required) return 'Enter password ';
            else if(passwordConfirmation.required) return 'Enter password confirmation ';
            else if(email.required) return 'Enter email ';
            else if(email.email) return 'E-mail not valid';
        }
        isRegistration = true;
    };

    $scope.setNewUser = function () {
        if(isRegistration)
        {
            if($scope.password != $scope.passwordConfirmation){
                $scope.password = '';
                $scope.passwordConfirmation='';
                toastr.warning('проверьте подтверждения пароля');
                return;
            }
            var params= {
                login:$scope.login,
                password:$scope.password,
                email:$scope.Email
            }
        }
        $http.post('/api/registration/', {params:params}).success(function (res) {
            toastr.success(res)
        });
    }
});