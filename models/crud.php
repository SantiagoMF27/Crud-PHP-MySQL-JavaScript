<?php

include_once 'connection.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

/////////////////Recibo los datos de formulario/////////////////
$nombres      = (isset($_POST['nombres']))      ? $_POST['nombres']      : '';
$apellidos    = (isset($_POST['apellidos']))    ? $_POST['apellidos']    : '';
$pais         = (isset($_POST['pais']))         ? $_POST['pais']         : '';
$tp_documento = (isset($_POST['tp_documento'])) ? $_POST['tp_documento'] : '';
$documento    = (isset($_POST['documento']))    ? $_POST['documento']    : '';
$genero       = (isset($_POST['genero']))       ? $_POST['genero']       : '';
$estado       = (isset($_POST['estado']))       ? $_POST['estado']       : '';
$opcion       = (isset($_POST['opcion']))       ? $_POST['opcion']       : '';
$id           = (isset($_POST['id']))           ? $_POST['id']           : '';
$fecha        = date('y/m/d h:m:s');

switch($opcion){

/////////////////Insertar usuarios/////////////////     
    case 1:        
        $consulta = ("SELECT * FROM usuarios WHERE DOCUMENTO = '$documento'") or die($conexion -> error);
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        
        if($resultado -> rowCount() == 0){
            $consulta = "INSERT INTO usuarios(NOMBRES, APELLIDOS, PAIS, TP_DOCUMENTO, DOCUMENTO, GENERO, ESTADO)  
                        VALUES('$nombres', '$apellidos', '$pais', '$tp_documento', '$documento', '$genero', '$estado')" or die($conexion -> error);			
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data = 1;
        }else{
            $data = 0;
        }

        //$consulta = "SELECT * FROM usuarios ORDER BY ID DESC LIMIT 1" or die($conexion -> error);
        //$resultado = $conexion->prepare($consulta);
        //$resultado->execute();
        //$data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break; 

/////////////////Actualizar usuarios/////////////////         
    case 2:                  
        $consulta = "UPDATE usuarios SET 
                        NOMBRES='$nombres',
                        APELLIDOS='$apellidos',
                        PAIS='$pais',
                        TP_DOCUMENTO='$tp_documento',
                        DOCUMENTO='$documento',
                        GENERO='$genero',
                        ESTADO='$estado',
                        FECHA='$fecha' 
                    WHERE ID ='$id'" or die($conexion -> error);	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        
        $consulta = "SELECT * FROM usuarios WHERE ID = '$id'" or die($conexion -> error);      
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;

/////////////////Eliminar usuarios/////////////////         
    case 3:             
        $consulta = "DELETE FROM usuarios WHERE ID ='$id'" or die($conexion -> error);	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;

/////////////////////////Envio al DataTable//////////////////////////
    case 4:
        $consulta = "SELECT US.ID AS US_ID,
                        US.NOMBRES AS US_NOMBRES,
                        US.APELLIDOS AS US_APELLIDOS,
                        PA.NOMBRE AS PA_NOMBRES,
                        TP.ISO AS TI_DOCUMENTOS,
                        US.DOCUMENTO AS NU_DOCUMENTOS,
                        GE.NOMBRE AS GE_GENEROS,
                        ES.NOMBRE AS ES_ESTADOS,
                        US.FECHA AS US_FECHA,
                        PA.ID AS ID_PAIS,
                        TP.ID AS ID_TI_DOCUMETOS,
                        GE.ID AS ID_GENERO,
                        ES.ID AS ID_ESTADO 
                    FROM usuarios US 
                    INNER JOIN paises PA ON US.PAIS = PA.ID
                    INNER JOIN tp_documentos TP ON US.TP_DOCUMENTO = TP.ID
                    INNER JOIN generos GE ON US.GENERO = GE.ID
                    INNER JOIN estados ES ON US.ESTADO = ES.ID" or die($conexion -> error);
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
        
}

////////////Envío el array final el formato json a AJAX////////////
print json_encode($data, JSON_UNESCAPED_UNICODE);
$conexion=null;