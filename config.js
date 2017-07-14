weatherApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/forecasts', {
            templateUrl: 'views/forecasts.html',
            controller: 'ForecastsController',
            controllerAs: 'fc'
        });
}]);