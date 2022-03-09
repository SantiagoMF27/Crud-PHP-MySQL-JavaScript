<?php

    session_start();
    include_once 'connection.php';
    $objeto   =  new Conexion();
    $conexion =  $objeto->Conectar();

    /////////////////Recibo los datos de formulario/////////////////
    $nombres    = (isset($_POST['nombres']))    ? $_POST['nombres']    : '';
    $apellidos  = (isset($_POST['apellidos']))  ? $_POST['apellidos']  : '';
    $correo     = (isset($_POST['correo']))     ? $_POST['correo']     : '';
    $contrasena = (isset($_POST['contrasena'])) ? $_POST['contrasena'] : '';
    $opcion     = (isset($_POST['opcion']))     ? $_POST['opcion']     : '';
    $tp_usuario = 2;

/////////////////Encriptamos la contraseña/////////////////    
    $contrasena = hash('sha512', $contrasena);

    switch($opcion){
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
/////////////////Iniciar sesión/////////////////             
        case 2:
            $consulta = ("SELECT * FROM admins 
                            WHERE CORREO = '$correo' 
                            AND CONTRASENA = '$contrasena'") or die($conexion -> error);
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();

            $dato = [];
            if($resultado -> rowCount() > 0)
            {
                while ($row = $resultado -> fetch(PDO::FETCH_ASSOC)) {
                    $dato[0] = $row['ID'];
                    $dato[1] = $row['NOMBRES'];
                    $dato[2] = $row['APELLIDOS'];
                    $dato[3] = $row['CORREO'];
                    $dato[4] = $row['CONTRASENA'];
                    $dato[5] = $row['FECHA'];
                    $dato[6] = $row['TP_USUARIO'];
                }
                $_SESSION['ID']         = $dato[0];
                $_SESSION['NOMBRES']    = $dato[1];
                $_SESSION['APELLIDOS']  = $dato[2];
                $_SESSION['CORREO']     = $dato[3];
                $_SESSION['CONTRASENA'] = $dato[4];
                $_SESSION['FECHA']      = $dato[5];
                $_SESSION['TP_USUARIO'] = $dato[6];
                
                header("location: ../views/admin/index.php");
                echo json_encode(array('error' => false));
            }else
            {
                echo json_encode(array('error' => true));
            }

            
    }

////////////Envío el array final el formato json a AJAX////////////
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion = null;