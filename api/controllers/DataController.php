<?php

class DataController extends BaseController
{

    public function index()
    {
        header("Content-Type: application/json");
        $jsonData=[];
        foreach (Registry::Get("pdo")->query("SELECT id, firstName, lastName FROM users") as $row)
        {
           array_push($jsonData, $row);
        }
        echo json_encode($jsonData, JSON_UNESCAPED_UNICODE);
    }
}