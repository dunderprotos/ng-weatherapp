# ng-WeatherApp :snowflake::sunny::umbrella::cloud:

I finished Anthony's course on Angular 1.x and it was such a joyride! I understood a lot of what Angular represents and I am less scared and more motivated to dive deeper, probably venture into more frameworks or Angular 4 itself. I made this app which is similar to what he made at the end of the course.

## What's different?

+ Little bit more challenging IMO. You can totally skip the PHP part and just follow the instructions or do the same thing I did with some other server-side language.
+ Uses Dark Sky API for getting weather data. I thought this'd be easier but ended up doing extra work. But it was fun! :smile_cat:
+ Because Dark Sky doesn't allow CORS, I turned this into a PHP project. :expressionless:
+ I used the Google Geocoding API which, surprisingly didn't require any API keys at the time I wrote this code. Why? Because Dark Sky needs latitude and longitude to get weather data, at least, I didn't find another way.
+ I send the city name to Geocoding API which returns coordinate data which is then sent to `/api` and thereafter, it calls the Dark Sky API to get the weather data.
+ This only displays 7 day forecasts although I will see if I can add some toggles and get Dark Sky to return more.

## Setup

You need the following to get this to work:
+ PHP
+ Dark Sky API key (It's free, get it from [here](https://darksky.net))
+ Node and Bower

To get this up and working, do the following:
1. `git clone` this repo.
1. `cd` to the repo directory and run `bower install`.
1. Create a new environment variable `WEATHER_APIKEY` set to your Dark Sky API key. For Windows, just do `set WEATHER_APIKEY=<YOURKEY>`.
1. Run `php -S localhost:8080` from your repo.
1. Open your browser and go to `localhost:8080`. :tada:

**Note**: If you're using XAMPP, you might need to edit your `php.ini` and find and change this line — `variables_order="EGPCS"`. Otherwise, PHP won't be able to read your API key.

---

Lots of :heart: to @AnthonyPAlicea for this great course and helping me understand Angular. :pray: Looking forward for more!