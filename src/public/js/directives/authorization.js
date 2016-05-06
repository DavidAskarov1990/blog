app.directive("inputAuthorization", function () {
    return{
        scope:{
            fieldInput:'@prop'
        },

        link:function (scope, element, attributes) {

            scope.login='';
            scope.password = '';

            scope.$watch('fieldInput', function(value) {
                var data = JSON.parse(scope.fieldInput);
                scope.login = data.login;
                scope.password = data.password;

                if(scope.login=='' && scope.password=='' || scope.login==undefined && scope.password==undefined){
                    scope.str = 'Fill in all the fields';
                }
                else if(scope.login=='' || scope.login==undefined){
                    scope.str = 'Enter login';
                }
                else if(scope.password=='' || scope.password==undefined){
                    scope.str = 'Enter password';
                }
                else{
                    scope.str = '';
                }
            });
        },
        restrict:"A",
        template:"<span>{{str}}</span>"
    }
});