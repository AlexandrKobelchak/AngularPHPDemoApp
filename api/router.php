<?php

require_once "./includes/config.php";
require_once "./includes/startup.php";

session_start();

$router =new Router();
Registry::Set("router", $router);

Registry::Set("pdo", new PDO("mysql:host=".Config::databaseServer."; dbname=".Config::databaseName,
    Config::databaseUser, Config::databasePasswd));

Registry::Get("pdo")->exec("SET NAMES 'utf8'");
Registry::Get("pdo")->exec("SET CHARACTER SET 'utf8'");

$router->setControllerDirPath($GLOBALS["apiRoot"]."controllers");
$router->setViewDirPath($GLOBALS["apiRoot"]."views");
$router->delegate();
