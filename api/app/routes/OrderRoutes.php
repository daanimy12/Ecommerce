<?php
$app->get('/orders','OrderController:selectOrder');
$app->post('/orders','OrderController:insertOrder');
?>