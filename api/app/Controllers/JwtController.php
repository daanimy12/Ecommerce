<?php
namespace app\Controllers;
class JwtController extends Controllers{
   
    function Auth($request,$response){
        $user=$request->getParsedBody();
      $user['pass'] =$this->JwtAuth->Encrip($user['pass']);
        $message=$this->JwtModel->Auth($user);
        return json_encode($message);
    }
  
}
?>