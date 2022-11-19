<?php

abstract class ApiController extends BaseController
{

    public function index($data)
    {
        switch ($_SERVER['REQUEST_METHOD']){

            case 'GET':
                $this->OnGet($data);
                break;
            case 'POST':
                $this->OnPost($data);
                break;
            case 'PUT':
                $this->OnPut($data);
                break;
            case 'DELETE':
                $this->OnDelete($data);
                break;
        }
    }

    public abstract function OnGet($data);
    public abstract function OnPost($data);
    public abstract function OnPut($data);
    public abstract function OnDelete($id);
}