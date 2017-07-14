<!DOCTYPE html>
<html lang="en" ng-app="weatherApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Weather App</title>

        <!-- Bootstrap CSS -->
        <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="styles.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.3/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <!-- Navigation -->
        
        <nav class="navbar navbar-inverse">
            <div class="container">
                <a class="navbar-brand" href="#">Weather App</a>
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="#!/">Home</a>
                    </li>
                    <li>
                        <a href="#!/forecasts">Forecasts</a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <ng-view></ng-view>

        <footer>
            <div class="container">
                <p>Made with <span class="fa fa-heart" aria-label="love"></span> by <a href="https://github.com/dunderprotos">Sangeeth.</a></p>
                <small><a href="https://darksky.net/poweredby/">Powered by DarkSky.</a></small>
            </div>
        </footer>
        <!-- jQuery -->
        <script src="bower_components/jQuery/dist/jquery.min.js"></script>
        <!-- Bootstrap JavaScript -->
        <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <!-- Load Angular -->
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/angular-route/angular-route.js"></script>
        
        <script src="index.js"></script>
        <script src="config.js"></script>
        <script src="services.js"></script>
        <script src="controllers.js"></script>
        <script src="directives.js"></script>        
    </body>
</html>
