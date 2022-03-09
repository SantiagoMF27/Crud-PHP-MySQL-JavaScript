<?php

include_once 'connection.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

/////////////////Recibo los datos de formulario/////////////////
$nombres    = (isset($_POST['nombres']))    ? $_POST['nombres']    : '';
$apellidos  = (isset($_POST['apellidos']))  ? $_POST['apellidos']  : '';
$correo     = (isset($_POST['correo']))     ? $_POST['correo']     : '';
$contrasena = (isset($_POST['contrasena'])) ? $_POST['contrasena'] : '';
$tp_usuario = (isset($_POST['tp_usuario'])) ? $_POST['tp_usuario'] : '';
$opciones   = (isset($_POST['opciones']))   ? $_POST['opciones']   : '';
$id         = (isset($_POST['id']))         ? $_POST['id']         : '';
$fecha      = date('y/m/d h:m:s');

/////////////////Encriptamos la contraseña/////////////////    
$contrasena = hash('sha512', $contrasena);

switch($opciones){

/////////////////Insertar usuarios/////////////////     
    case 1:        
        $consulta = ("SELECT * FROM admins WHERE CORREO = '$correo'") or die($conexion -> error);
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        
        if($resultado -> rowCount() == 0){
            $consulta = ("INSERT INTO admins(NOMBRES, APELLIDOS, CORREO, CONTRASENA, TP_USUARIO) 
                            VALUES ('$nombres','$apellidos','$correo','$contrasena','$tp_usuario')") or die($conexion -> error);
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data = 1;
        }else{
            $data = 0;
        }      
    break; 

/////////////////Actualizar usuarios/////////////////         
    case 2:                  
        $consulta = ("UPDATE admins SET 
                        NOMBRES='$nombres',
                        APELLIDOS='$apellidos',
                        CORREO='$correo',
                        CONTRASENA='$contrasena',
                        TP_USUARIO='$tp_usuario',
                        FECHA='$fecha' 
                    WHERE ID = '$id'") or die($conexion -> error);	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        
        $consulta = "SELECT * FROM admins WHERE ID = '$id'" or die($conexion -> error);      
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;

/////////////////Eliminar usuarios/////////////////         
    case 3:             
        $consulta = "DELETE FROM admins WHERE ID ='$id'" or die($conexion -> error);	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;

/////////////////////////Envio al DataTable//////////////////////////
    case 4:
        $consulta = "SELECT 
                        AD.ID AS AD_ID,
                        AD.NOMBRES AS AD_NOMBRES,
                        AD.APELLIDOS AS AD_APELLIDOS,
                        AD.CORREO AS AD_CORREO,
                        TP.NOMBRE AS TP_NOMBRE,
                        AD.FECHA AS AD_FECHA,
                        AD.TP_USUARIO AS AD_TP_USUARIO                   
                    FROM admins AD 
                    INNER JOIN tp_usuarios TP ON AD.TP_USUARIO = TP.ID" or die($conexion -> error);
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
        
}

////////////Envío el array final el formato json a AJAX////////////
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = null;