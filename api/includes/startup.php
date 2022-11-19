<?php

$apiRoot = realpath(dirname(__FILE__).DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR).DIRECTORY_SEPARATOR;

function my_class_autoloader($className) {

    $file=$GLOBALS["apiRoot"]."classes".DIRECTORY_SEPARATOR.$className.".php";
    require_once $file;
}

spl_autoload_register('my_class_autoloader');


error_reporting(E_ALL);

if(version_compare(phpversion(), "7.1.0", "<"))
{
    die ("Minimal request php version 7.1 !!!!!");
}