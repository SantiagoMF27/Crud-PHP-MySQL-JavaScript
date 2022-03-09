$(document).ready(function () {
    var opcion;

//Registrarse
    $('#formRegister').submit(function (e) {
        opcion = 1;
        e.preventDefault();
        nombres      = $.trim($('#nombres').val());
        apellidos    = $.trim($('#apellidos').val());
        correo       = $.trim($('#correo').val());
        contrasena   = $.trim($('#contrasena').val());
        var valido   = true;

        if (nombres == '') {
            valido = false;
        }
        if (apellidos == '') {
            valido = false;
        }
        if (correo == '') {
            valido = false;
        }
        if (contrasena == '') {
            valido = false;
        }
        if(valido){
            $.ajax({
                url: "../models/session.php",
                type: "POST",
                datatype: "json",
                data: {
                    nombres: nombres,
                    apellidos: apellidos,
                    correo: correo,
                    contrasena: contrasena,
                    opcion: opcion
                },
                success: function (respuesta) {
                    if(respuesta == 1){
                        //Sweetalert2
                        Swal.fire({
                            allowOutsideClick: false,
                            title: '¡Buen Trabajo!',
                            text: 'Te has registrado correctamente 😊',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location = "./login.php";
                            }
                        })
                    }else{
                        //Sweetalert2
                        Swal.fire({
                            title: 'Oops...',
                            text: '¡Ya hay un usuario con ese correo! 😑',
                            icon: 'error',
                            confirmButtonText: 'De acuerdo'
                        }); 
                    }
                },
                error: function (ex) {
                    //Sweetalert2
                    Swal.fire({
                        allowOutsideClick: false,
                        title: 'Oops...',
                        text: '¡Se presentó un vento no esperado! 😬',
                        footer: '<a href="#">¿Por qué tengo este problema?</a>',
                        icon: 'error'      
                    });
                }
            });
        }else{
            //SweetAlert2
            Swal.fire({
                title: 'Oops...',
                text: '¡Por favor ingresa todos los datos! 😠',
                icon: 'error',
                confirmButtonText: 'De acuerdo'
            });          
        }
    });


//Ingresar    
    $('#formLogin').submit(function (e) {
        opcion = 2;
        e.preventDefault();
        correo       = $.trim($('#correo').val());
        contrasena   = $.trim($('#contrasena').val());
        valido       = true;
        if (correo == '') {
            valido = false;
        }
        if (contrasena == '') {
            valido = false;
        }
        if(valido){
            $.ajax({
                url: "../models/session.php",
                type: "POST",
                datatype: "json",
                data: {
                    correo: correo,
                    contrasena: contrasena,
                    opcion: opcion
                },
                success: function (response) {
                    if(!response.error){
                        location.href = './admin/index.php';
                    }else if(response.error){
                        //SweetAlert
                        Swal.fire({
                            title: 'Oops...',
                            text: '¡Datos Incorrectos! 😑',
                            icon: 'error',
                            confirmButtonText: 'De acuerdo'
                        });
                    }
                },
                error: function (ex) {
                    //Sweetalert2
                    Swal.fire({
                        allowOutsideClick: false,
                        title: 'Oops...',
                        text: '¡Se presentó un vento no esperado! 😬',
                        footer: '<a href="#">¿Por qué tengo este problema?</a>',
                        icon: 'error'      
                    });
                }
            })
        }else{
            //SweetAlert2
            Swal.fire({
                title: 'Oops...',
                text: '¡Por favor ingresa todos los datos! 😠',
                icon: 'error',
                confirmButtonText: 'De acuerdo'
            }); 
        }
    });

//Enviar mensaje
    $(document).on("click", "#btnEnviar", function (e) {
        e.preventDefault();
        nombres   = $.trim($('#nombres').val());
        apellidos = $.trim($('#apellidos').val());
        correo    = $.trim($('#correo').val());
        asunto    = $.trim($('#asunto').val());
        mensaje   = $.trim($('#mensaje').val());
        var valido   = true;

        if (nombres == '') {
            valido = false;
        }
        if (apellidos == '') {
            valido = false;
        }
        if (correo == '') {
            valido = false;
        }
        if (asunto == ''){
            valido = false;
        }
        if (mensaje == '') {
            valido = false;
        }

        if(valido){
            $.ajax({
                url: "../../controllers/contact.php",
                type: "POST",
                datatype: "json",
                data: {
                    nombres: nombres,
                    apellidos: apellidos,
                    correo: correo,
                    asunto: asunto,
                    mensaje: mensaje,
                },
                success: function (respuesta) {
                    if(respuesta == 1){
                        //Sweetalert2
                        Swal.fire({
                            title: '¡Buen Trabajo! 😃',
                            text: 'Mesaje enviado correctamente',
                            icon: 'success'
                        });
                        $('#formContact').trigger("reset");
                    }else{
                        //Sweetalert2
                        Swal.fire({
                            title: 'Oops...',
                            text: '¡No se envió en mesaje! 😑',
                            icon: 'error',
                            confirmButtonText: 'De acuerdo'
                        }); 
                    }
                },
                error: function (ex) {
                    //Sweetalert2
                    Swal.fire({
                        allowOutsideClick: false,
                        title: 'Oops...',
                        text: '¡Se presentó un vento no esperado! 😬',
                        footer: '<a href="#">¿Por qué tengo este problema?</a>',
                        icon: 'error'      
                    });
                    $('#formContact').modal('hide');
                }
            });
        }else{
            //SweetAlert
            Swal.fire({
                allowOutsideClick: false,
                title: 'Oops...',
                text: '¡Por favor ingresa todos los datos! 😑',
                icon: 'error',
                confirmButtonText: 'De acuerdo'
            });
        }
    })
})