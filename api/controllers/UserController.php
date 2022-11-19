<?php

class UserController extends ApiController
{

    public function OnGet($data)
    {
        header("Content-Type: application/json");
        $jsonData=[];
        foreach (Registry::Get("pdo")->query("SELECT id, firstName, lastName, birthday FROM users") as $row)
        {
            array_push($jsonData, array('id'=>$row['id'], 'firstName'=>$row['firstName'], 'lastName'=>$row['lastName'], 'birthday'=>$row['birthday']));
        }
        //print_r($jsonData);
        echo json_encode($jsonData, JSON_UNESCAPED_UNICODE);
    }

    public function OnPost($data)
    {
        // TODO: Implement OnPost() method.
    }

    public function OnPut($data)
    {
        // TODO: Implement OnPut() method.
    }

    public function OnDelete($id)
    {
        // TODO: Implement OnDelete() method.
    }
}