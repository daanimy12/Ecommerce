<?php
namespace app\Controllers;
class EmployeesController extends Controllers{
   
    function selectEmployees($request,$response){
        
$message=$this->EmployeesModel->selectEmployees();

return json_encode($message);
    }
    function selectEmployeesID($request,$response,$id){
        
        $message=$this->EmployeesModel->selectEmployeesID($id);
        
        return json_encode($message);
            }
    function insertEmployees($request,$response){
    $employee=$request->getParsedBody();
    $message=$this->EmployeesModel-> saveEmployees($employee);
return json_encode($message);
    }
}
?>