<?php

class Router
{
    private $registry;
    private $controllerDirPath;
    private $viewDirPath;

    public function __construct()
    {
        $this->registry = Registry::getInstance();
    }

    /**
     * @param mixed $path
     * @throws Exception
     */
    public function setControllerDirPath($path)
    {
        $path.=DIRECTORY_SEPARATOR;
        if(!is_dir($path))
        {
            throw new Exception("Invalid controller directory path");
        }
        $this->controllerDirPath = $path;
    }

    /**
     * @param mixed $path
     * @throws Exception
     */
    public function setViewDirPath($path)
    {
        $path.=DIRECTORY_SEPARATOR;
        if(!is_dir($path))
        {
            throw new Exception("Invalid view directory path");
        }
        $this->viewDirPath = $path;
    }

    public function delegate()
    {
        $this->getController($file, $controller, $action, $tags);


       // print_r($file);



        //create controller instance
        $className = $controller."Controller";
        $controllerInstance = new $className();

        //is action present?
        if(!method_exists($className, $action))
        {
            die("Error 404 Action $action in class $className not found");
        }
        $view = $controllerInstance -> $action($tags);

        if($view!=null)
        {
            $view->setControllerName($controller);
            $view->showView();
        }
    }

    private function getController(&$file, &$controller, &$action, &$tags)
    {
        $route="index";

        if(isset($_REQUEST["route"]))
        {
            $route=$_REQUEST["route"];
        }

 //       print_r($route);

        $route = trim($route, "/\\");
        $route = preg_replace("/\/\|\\\\/i", DIRECTORY_SEPARATOR, $route);
        $parts = explode(DIRECTORY_SEPARATOR, $route);

        $cmd_path = $this->controllerDirPath;
        foreach ($parts as $part)
        {
            $fullPath =$cmd_path.$part;

            //if is directory
            if(is_dir($fullPath))
            {
                $cmd_path.=$part.DIRECTORY_SEPARATOR;
                array_shift($parts);
                continue;
            }

            //if is  controller class file
            if(is_file($fullPath."Controller.php"))
            {
                $controller = $part;
                array_shift($parts);
                break;
            }
        }
        //print_r($controller);

        if(empty($controller))
        {
            $controller="Error";
            $action="index";
            return;
        }

        $file=$cmd_path.$controller."Controller.php";
        if(!is_readable($file))
        {
            die("Error 404 Controller not found");
            //header(404);
        }


        require_once ($file);
        $controllerInstance = new ($controller."Controller")();


        if($controllerInstance instanceof ApiController)
        {
            $action="index";
        }
        else{

            //print_r("API");
            $action=array_shift($parts);
        }


        if(empty($action))
        {
            $action="index";
        }


        $args=$parts;
    }
}