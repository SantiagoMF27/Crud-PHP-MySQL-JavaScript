$(document).ready(function () {
    var id, opcion;
    opcion = 4;

/////////////////////DataTable Usuarios////////////////////////
    tablaUsuarios = $('#tablaUsuarios').DataTable({
        "ajax": {
            "url": "../../models/crud.php",
            "method": 'POST',
            "data": {
                opcion: opcion
            },
            "dataSrc": ""
        },

//////////////////////Columnas de la tabla//////////////////////      
        "scrollY": true,
        "scrollX": true,
        "pagingType": "full_numbers",
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Todos"]],  
        "columns": [
            {
                "data": "US_ID"
            },
            {
                "data": "US_NOMBRES"
            },
            {
                "data": "US_APELLIDOS"
            },
            {
                "data": "PA_NOMBRES"
            },
            {
                "data": "TI_DOCUMENTOS"
            },
            {
                "data": "NU_DOCUMENTOS"
            },
            {
                "data": "GE_GENEROS",
                render: function(data, type) {
                    var text = $.fn.dataTable.render.text( 'Femenino', 'Masculino', 'Otro'). display(data);

                    if (type === 'display') {
                        let btn = '';
                        let src = '';
                        let title = '';

                        if (data === 'Femenino') {
                            btn = 'btn btn-femenino';
                            src = 'assets/dist/images/icons/femenino.png';
                            title = 'Género Femenino';
                        }
                        else if (data === 'Masculino') {
                            btn = 'btn btn-primary';
                            src = 'assets/dist/images/icons/masculino.png';
                            title = 'Género Masculino';
                        }
                        else if (data === 'Otro') {
                            btn = 'btn btn-secondary';
                            src = 'assets/dist/images/icons/bombilla.png';
                            title = 'Otro Género';
                        }
                        return '<div class="text-center"><button type="button" class="'+btn+'" title="'+title+'"><img class="img-btn-tabla" src="'+src+'" alt="Genero"></img></button></div>';
                    }
                    return text;
                }
            },
            {
                "data": "ES_ESTADOS",
                render: function(data, type) {
                    var text = $.fn.dataTable.render.text( 'Activo', 'Inactivo', 'Suspendido'). display(data);

                    if (type === 'display') {
                        let btn = '';
                        let src = '';
                        let title = '';

                        if (data === 'Activo') {
                            btn = 'btn btn-success';
                            src = 'assets/dist/images/icons/check.png';
                            title = 'Usuario Activo';
                        }
                        else if (data === 'Inactivo') {
                            btn = 'btn btn-warning';
                            src = 'assets/dist/images/icons/inactivo.png';
                            title = 'Usuario Inactivo';
                        }
                        else if (data === 'Suspendido') {
                            btn = 'btn btn-secondary';
                            src = 'assets/dist/images/icons/suspendido.png';
                            title = 'Usuario Suspendido';
                        }
                        return '<div class="text-center"><button type="button" class="'+btn+'" title="'+title+'"><img class="img-btn-tabla" src="'+src+'" alt="Estado"></img></button></div>';
                    }
                    return text;
                }

            },
            {
                "data": "US_FECHA",
            },
            {
                "data": "ID_PAIS"
            },
            {
                "data": "ID_TI_DOCUMETOS"
            },
            {
                "data": "ID_GENERO"
            },
            {
                "data": "ID_ESTADO"
            },
            {
                "defaultContent": "<div class='text-center'><div class='btn-group'><button title='Editar' class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar' title='Borrar'><i class='material-icons'>delete</i></button></div></div>"
            }
        ],

//////////////////////Lenguaje de la tabla//////////////////////
        "language": {
            "processing": "Procesando...",
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "emptyTable": "Ningún dato disponible en esta tabla",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "search": "Buscar:",
            "infoThousands": ",",
            "loadingRecords": "Cargando...",
            "paginate": {
                "first": "Primero",
                "last": "Último",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sortDescending": ": Activar para ordenar la columna de manera descendente"
            },
            "buttons": {
                "copy": "Copiar",
                "colvis": "Visibilidad",
                "collection": "Colección",
                "colvisRestore": "Restaurar visibilidad",
                "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
                "copySuccess": {
                    "1": "Copiada 1 fila al portapapeles",
                    "_": "Copiadas %d fila al portapapeles"
                },
                "copyTitle": "Copiar al portapapeles",
                "csv": "CSV",
                "excel": "Excel",
                "pageLength": {
                    "-1": "Mostrar todas las filas",
                    "1": "Mostrar 1 fila",
                    "_": "Mostrar %d filas"
                },
                "pdf": "PDF",
                "print": "Imprimir"
            },
            "autoFill": {
                "cancel": "Cancelar",
                "fill": "Rellene todas las celdas con <i>%d<\/i>",
                "fillHorizontal": "Rellenar celdas horizontalmente",
                "fillVertical": "Rellenar celdas verticalmentemente"
            },
            "decimal": ",",
            "searchBuilder": {
                "add": "Añadir condición",
                "button": {
                    "0": "Constructor de búsqueda",
                    "_": "Constructor de búsqueda (%d)"
                },
                "clearAll": "Borrar todo",
                "condition": "Condición",
                "conditions": {
                    "date": {
                        "after": "Despues",
                        "before": "Antes",
                        "between": "Entre",
                        "empty": "Vacío",
                        "equals": "Igual a",
                        "notBetween": "No entre",
                        "notEmpty": "No Vacio",
                        "not": "Diferente de"
                    },
                    "number": {
                        "between": "Entre",
                        "empty": "Vacio",
                        "equals": "Igual a",
                        "gt": "Mayor a",
                        "gte": "Mayor o igual a",
                        "lt": "Menor que",
                        "lte": "Menor o igual que",
                        "notBetween": "No entre",
                        "notEmpty": "No vacío",
                        "not": "Diferente de"
                    },
                    "string": {
                        "contains": "Contiene",
                        "empty": "Vacío",
                        "endsWith": "Termina en",
                        "equals": "Igual a",
                        "notEmpty": "No Vacio",
                        "startsWith": "Empieza con",
                        "not": "Diferente de"
                    },
                    "array": {
                        "not": "Diferente de",
                        "equals": "Igual",
                        "empty": "Vacío",
                        "contains": "Contiene",
                        "notEmpty": "No Vacío",
                        "without": "Sin"
                    }
                },
                "data": "Data",
                "deleteTitle": "Eliminar regla de filtrado",
                "leftTitle": "Criterios anulados",
                "logicAnd": "Y",
                "logicOr": "O",
                "rightTitle": "Criterios de sangría",
                "title": {
                    "0": "Constructor de búsqueda",
                    "_": "Constructor de búsqueda (%d)"
                },
                "value": "Valor"
            },
            "searchPanes": {
                "clearMessage": "Borrar todo",
                "collapse": {
                    "0": "Paneles de búsqueda",
                    "_": "Paneles de búsqueda (%d)"
                },
                "count": "{total}",
                "countFiltered": "{shown} ({total})",
                "emptyPanes": "Sin paneles de búsqueda",
                "loadMessage": "Cargando paneles de búsqueda",
                "title": "Filtros Activos - %d"
            },
            "select": {
                "1": "%d fila seleccionada",
                "_": "%d filas seleccionadas",
                "cells": {
                    "1": "1 celda seleccionada",
                    "_": "$d celdas seleccionadas"
                },
                "columns": {
                    "1": "1 columna seleccionada",
                    "_": "%d columnas seleccionadas"
                }
            },
            "thousands": ".",
            "datetime": {
                "previous": "Anterior",
                "next": "Proximo",
                "hours": "Horas",
                "minutes": "Minutos",
                "seconds": "Segundos",
                "unknown": "-",
                "amPm": [
                    "am",
                    "pm"
                ]
            },
            "editor": {
                "close": "Cerrar",
                "create": {
                    "button": "Nuevo",
                    "title": "Crear Nuevo Registro",
                    "submit": "Crear"
                },
                "edit": {
                    "button": "Editar",
                    "title": "Editar Registro",
                    "submit": "Actualizar"
                },
                "remove": {
                    "button": "Eliminar",
                    "title": "Eliminar Registro",
                    "submit": "Eliminar",
                    "confirm": {
                        "_": "¿Está seguro que desea eliminar %d filas?",
                        "1": "¿Está seguro que desea eliminar 1 fila?"
                    }
                },
                "error": {
                    "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\\/a&gt;).<\/a>"
                },
                "multi": {
                    "title": "Múltiples Valores",
                    "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
                    "restore": "Deshacer Cambios",
                    "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
                }
            },
            "info": "Mostrando de _START_ a _END_ de _TOTAL_ entradas"
        },
    });

    var fila;

////////////////////////////////Ver Modal///////////////////////////////    
///////Para limpiar los campos antes de dar de Alta una Persona////////
    $("#btnNuevo").click(function () {
        opcion = 1; //alta           
        id = null;
        $("#formUsuarios").trigger("reset");
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Agregar Usuario");
        $('#modalCRUD').modal('show');
    });

    $("#btnModalPerfil").click(function () {
        $(".modal-header").css("background-color", "#28a745");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Mi Perfil");
        $('#modalDos').modal('show');
    });
/////////////////////////Guardar y Actualizar/////////////////////////
    $('#formUsuarios').submit(function (e) {
        e.preventDefault();
        nombres      = $.trim($('#nombres').val());
        apellidos    = $.trim($('#apellidos').val());
        pais         = $.trim($('#pais').val());
        tp_documento = $.trim($('#tp_documento').val());
        documento    = $.trim($('#documento').val());
        genero       = $.trim($('#genero').val());
        estado       = $.trim($('#estado').val());
        var valido   = true;

        if (nombres == '') {
            valido = false;
        }
        if (apellidos == '') {
            valido = false;
        }
        if (pais == '') {
            valido = false;
        }
        if (tp_documento == '') {
            valido = false;
        }
        if (documento == '') {
            valido = false;
        }
        if (genero == '') {
            valido = false;
        }
        if (estado == '') {
            valido = false;
        }
            if (valido) {
            $.ajax({
                url: "../../models/crud.php",
                type: "POST",
                datatype: "json",
                data: {
                    id: id,
                    nombres: nombres,
                    apellidos: apellidos,
                    pais: pais,
                    tp_documento: tp_documento,
                    documento: documento,
                    genero: genero,
                    estado: estado,
                    opcion: opcion
                },
                success: function (respuesta) {
                    if(respuesta == 1){
                        tablaUsuarios.ajax.reload(null, false);
                        //Sweetalert2
                        Swal.fire({
                            title: '¡Buen Trabajo! 😃',
                            text: 'Tarea realizada correctamente',
                            icon: 'success'
                        });
                        $('#modalCRUD').modal('hide');
                    }else{
                        //Sweetalert2
                        Swal.fire({
                            title: 'Oops...',
                            text: '¡El número de documento ya existe! 😑',
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
                    $('#modalCRUD').modal('hide');
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
    });

///////////////////////////////Editar////////////////////////////////
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;
        fila         = $(this).closest("tr");
        id           = parseInt(fila.find('td:eq(0)').text());
        nombres      = fila.find('td:eq(1)').text();
        apellidos    = fila.find('td:eq(2)').text();
        pais         = fila.find('td:eq(3)').text();
        tp_documento = fila.find('td:eq(4)').text();
        documento    = fila.find('td:eq(5)').text();
        genero       = fila.find('td:eq(6)').text();
        estado       = fila.find('td:eq(7)').text();
        id_pais      = fila.find('td:eq(9)').text();
        id_tp        = fila.find('td:eq(10)').text();
        id_genero    = fila.find('td:eq(11)').text();
        id_estado    = fila.find('td:eq(12)').text();

        $("#nombres").val(nombres);
        $("#apellidos").val(apellidos);
        $('#pais option[value="'+id_pais+'"]').attr("selected", true);
        $('#tp_documento option[value="'+id_tp+'"]').attr("selected", true);
        $("#documento").val(documento);
        $('#genero option[value="'+id_genero+'"]').attr("selected", true);
        $('#estado option[value="'+id_estado+'"]').attr("selected", true);

        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Usuario");
        $('#modalCRUD').modal('show');
    });

////////////////////////Borrar Usuarios////////////////////////
    $(document).on("click", ".btnBorrar", function () {
        opcion = 3;
        fila        = $(this).closest("tr");
        id          = parseInt(fila.find('td:eq(0)').text());
        nombres     = fila.find('td:eq(1)').text();
        apellidos   = fila.find('td:eq(2)').text();
        nombre_com  = nombres +' '+ apellidos;
        borrar_fila = $(this);
        //Sweetalert2
        Swal.fire({
            allowOutsideClick: false,
            title: '¿Estás seguro que deseas borrar?',
            html: '<span>¡Borrarás a <b>'+ nombre_com +'</b>! 😧</span>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Si, borralo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "../../models/crud.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        opcion: opcion,
                        id: id
                    },
                    success: function () {
                        tablaUsuarios.row(borrar_fila.parents('tr')).remove().draw();
                        //Sweetalert2                            
                        Swal.fire({
                            title: 'Borrado',
                            text: '¡Tu registro a sido borrado! 😭',
                            icon: 'success'
                        })
                    },
                    error: function () {
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
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                //Sweetalert2
                Swal.fire({
                    title: 'Cancelado',
                    html: '<span>¡<b>'+nombre_com+'</b> esta a salvo! 😉</span>',
                    icon: 'error'
                });
            }
        });
    });

////////////////////////Cerrar sesion////////////////////////
    $(document).on("click", "#cerrarSesion", function () {
        opcion = 5;
        //Sweetaler2
        Swal.fire({
            allowOutsideClick: false,
            title: '¿Seguro que deseas salir?',
            text: 'Cerrando sesión 😟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "../../controllers/logout.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        opcion: opcion,
                    },
                    success: function () {
                        window.location = "../login.php";
                    },
                    error: function () {
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
            }
        });
    });

////////////////////////Enviar mensaje////////////////////////    
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
                            text: '¡El número de documento ya existe! 😑',
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

});