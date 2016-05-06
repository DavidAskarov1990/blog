var app = angular.module('app', ['ui.router', 'userServices'])
    .config(function ($stateProvider,  $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('authorization', {
                url:"/authorization",
                views:
                {
                    'center':{
                        templateUrl:'./templates/authorization.html',
                        controller:'authorizationCtrl'
                    }
                }
            })
            .state('home', {
                url:"/home",
                views:
                {
                    'center':{
                        templateUrl:'./templates/home.html',
                        controller:'homeCtrl'
                    }
                }
            })
            .state('registration', {
                url:"/registration",
                views:
                {
                    'center':{
                        templateUrl:'./templates/registration.html',
                        controller:'registrationCtrl'
                    }
                }
            });
    });

