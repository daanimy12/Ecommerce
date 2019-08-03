<?php

$container['JwtAuth']=function($container){
    return new  app\Services\JwtAuth($container);
    
};
?>