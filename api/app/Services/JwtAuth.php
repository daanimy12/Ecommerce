<?php 
    namespace app\Services;

    class JwtAuth extends Services {
        
function Encrip ($valor){
        $encodet=$this->jwt->encode($valor,$this->settings['jwt']['key']);
        return  $encodet;
}

function desencrip ($valor){
    $desencode=$this->jwt->decode($valor,$this->settings['jwt']['key'],$this->settings['jwt']['algorithms']);
    return  $desencode;
}


    }
    
?>