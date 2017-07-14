<?php

$API_KEY = $_ENV["WEATHER_APIKEY"];

$lat = (float) $_GET["lat"];
$lng = (float) $_GET["lng"];

if(!is_float($lat) && !is_float($lng))
    die("Um, not the right types.. $lat , $lng");

$additionalParams = urlencode("currently,minutely,hourly,alerts,flags");

$apiUrl = "https://api.darksky.net/forecast/${API_KEY}/$lat,$lng?exclude=$additionalParams";

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $apiUrl,
    CURLOPT_USERAGENT => 'Codular Sample cURL Request',
    CURLOPT_FAILONERROR => true
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
curl_close($curl);

header("Content-Type: application/json");
echo $resp;