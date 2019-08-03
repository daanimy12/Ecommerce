<?php
namespace app\Models;
class JwtModel extends Models{
    public function Auth($user){

$sth=$this->db->pdo->prepare('select * from employees where email=:email and passw =:pass');
      $sth->bindParam(':email',$user['email'], \PDO::PARAM_STR); 
      $sth->bindParam(':pass',$user['pass'],\PDO::PARAM_STR);
      $sth->execute();
    $user['email']=$this->JwtAuth->Encrip($user['email']);

    $registros=$sth->fetchAll(\PDO::FETCH_ASSOC);
    
    if(!is_null($sth->errorInfo()[1])){
        return array(
            'Error'=>false,
            'description'=>$sth->errorInfo()[2]
        );
    }else if(empty($registros)){
        return array(
            'noFound'=>true,
            'description'=>'User and Password is incorrect'
        );
    }
        return array(
        'success'=>true,
        'description'=> 'success',
        'mail'=>$user['email']);
    
}
}

?>