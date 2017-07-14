weatherApp
    .directive('weatherList', function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/weather-list.html',
            scope: {},
            replace: true,
            transclude: true
        }
    }).directive('weatherBlock', function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/weather-block.html',
            scope: {
                forecast: '=',
                unit: '@'
            },
            replace: true
        }
    });