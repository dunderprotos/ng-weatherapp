weatherApp.service('WeatherService', ['$http', function WeatherService($http) {
    // Custom PHP server because CORS.
    var scope = this;
    var url = "http://home.dev:808/api";

    this.celsius = function celsius(f) {
        return Math.round((f - 32) * 5 / 9);
    }

    this.getForecasts = function getForecasts(lat, lng) {
        var apiUrl = url;
        return $http.get(apiUrl, {
            params: {
                lat: lat,
                lng: lng
            }
        });
    }

    this.parseData = function parseData(data, unit) {
        unit = unit || "F";
        var retval = {};

        retval.unit = unit;
        retval.icon = data.icon;
        retval.summary = data.daily.summary;
        retval.daily = [];

        data.daily.data.forEach(function(forecast) {
            var maxTemp = Math.round(forecast.apparentTemperatureMax),
                minTemp = Math.round(forecast.apparentTemperatureMin);
            
            if (unit === 'C') {
                maxTemp = scope.celsius(maxTemp);
                minTemp = scope.celsius(minTemp);
            }
            retval.daily.push({
                maxTemp: maxTemp,
                minTemp: minTemp,
                summary: forecast.summary,
                date: new Date(forecast.time * 1000)
            });
        });

        return retval;
    }
}]);

weatherApp.service('DataService', [function DataService() {
    this.cityName = "";
    this.displayedCityName = "";
    this.cache = null;
}]);

weatherApp.service('GeocodeService', ['$http', function GeocodeService($http) {
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=";

    this.getCoordinates = function getCoordinates(cityName) {
        var callUrl = url + encodeURIComponent(cityName);

        return $http.get(callUrl);
    }

    this.getLatLng = function getLatLng(data) {
        var retval = {};

        if (data['status'] !== "OK")
            throw new Error("Address not found.");

        retval.lat = data.results[0].geometry.location.lat;
        retval.lng = data.results[0].geometry.location.lng;

        return retval;
    }
}]);