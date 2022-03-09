<?php

//Contactanos
    $nombres   = (isset($_POST['nombres']))   ? $_POST['nombres']   : '';
    $apellidos = (isset($_POST['apellidos'])) ? $_POST['apellidos'] : '';
    $correo    = (isset($_POST['correo']))    ? $_POST['correo']    : '';
    $asunto    = (isset($_POST['asunto']))    ? $_POST['asunto']    : '';
    $mensaje   = (isset($_POST['mensaje']))   ? $_POST['mensaje']   : '';

//coreo que recibira el mensaje
    $destinatario = 'smanosalva2002@gmail.com';

    $header  = "Enviado desde Inventario de Usuarios";

    $mensajeCompleto = "Nombre: " . $nombres . "\nApellidos: " . $apellidos . "\nCorreo: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;

    if (mail($destinatario, $asunto, $mensajeCompleto, $header)){
        $data = 1;
    }else{
        $data = 0;
    }

    print json_encode($data, JSON_UNESCAPED_UNICODE);