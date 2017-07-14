weatherApp
    .controller('HomeController', ['$location', 'DataService', function HomeController($location, store) {
        this.showForecasts = function showForecasts() {
            store.cityName = this.cityName;
            $location.url('/forecasts');
        }
    }])
    .controller('ForecastsController', ['WeatherService', 'GeocodeService', 'DataService', function ForecastsController(w, gc, store) {
        var scope = this;
        scope.displayedCityName = store.displayedCityName;
        scope.isLoaded = false;

        // User entered a new city value.
        if (store.displayedCityName !== store.cityName) {
            store.displayedCityName = scope.displayedCityName = store.cityName;

            // If the city value is not empty, then fetch and display forecast.
            if (store.cityName) {
                gc.getCoordinates(store.cityName)
                    .then(function success(response) {
                        latLng = gc.getLatLng(response.data);

                        return w.getForecasts(latLng.lat, latLng.lng);
                    })
                    .then(function success(response) {
                        var parsedData = w.parseData(response.data, 'C');

                        scope.weekData = parsedData.daily;
                        scope.summary = parsedData.summary;
                        scope.icon = parsedData.icon;
                        scope.unit = parsedData.unit;

                        store.cache = {
                            weekData: scope.weekData,
                            summary: scope.summary,
                            icon: scope.icon,
                            unit: scope.unit
                        };

                        scope.isLoaded = true;
                    });
            // If the city value is empty, we'll delete the cache.
            } else {
                store.cache = null;
                scope.isLoaded = true;
            }
        // If no new value was entered and if the cache wasn't empty, display
        // the cached forecast data.
        } else if (store.cache) {
            scope.summary = store.cache.summary;
            scope.weekData = store.cache.weekData;
            scope.icon = store.cache.icon;
            scope.unit = store.cache.uni;
            scope.isLoaded = true;
        }
    }]);