$(document).ready(function () {
    var id_admin, opciones;
    opciones = 4;

/////////////////////DataTable Usuarios////////////////////////
    tablaAdministradores = $('#tablaAdmins').DataTable({
        "ajax": {
            "url": "../../models/crudDos.php",
            "method": 'POST',
            "data": {
                opciones: opciones
            },
            "dataSrc": ""
        },

//////////////////////Columnas de la tabla//////////////////////      
        "scrollY": false,
        "scrollX": false,
        "pagingType": "full_numbers",
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Todos"]],  
        "columns": [
            {
                "data": "AD_ID"
            },
            {
                "data": "AD_NOMBRES"
            },
            {
                "data": "AD_APELLIDOS"
            },
            {
                "data": "AD_CORREO"
            },
            {
                "data": "TP_NOMBRE",
                render: function(data, type) {
                    var text = $.fn.dataTable.render.text( 'Super Administrador', 'Administrador'). display(data);

                    if (type === 'display') {
                        let btn = '';
                        let src = '';
                        let title = '';

                        if (data === 'Super Administrador') {
                            btn = 'btn btn-primary';
                            src = 'assets/dist/images/icons/super_admin.png';
                            title = 'Super Administrador';
                        }
                        else if (data === 'Administrador') {
                            btn = 'btn btn-success';
                            src = 'assets/dist/images/icons/admin.png';
                            title = 'Administrador';
                        }
                        return '<div class="text-center"><button type="button" class="'+btn+'" title="'+title+'"><img class="img-btn-tabla" src="'+src+'" alt="Rol"></img></button></div>';
                    }
                    return text;
                }
            },
            {
                "data": "AD_FECHA"
            },
            {
                "data": "AD_TP_USUARIO"
            },
            {
                "defaultContent": "<div class='text-center'><div class='btn-group'><button title='Editar' class='btn btn-primary btn-sm btnEditarAdmin'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrarAdmin' title='Borrar'><i class='material-icons'>delete</i></button></div></div>"
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
    $("#btnNuevoAdmin").click(function () {
        opciones = 1; //alta           
        id_admin = null;
        $("#formAdmins").trigger("reset");
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Agregar Administrador");
        $('#modalCRUDDos').modal('show');
    });

/////////////////////////Guardar y Actualizar/////////////////////////
    $('#formAdmins').submit(function (e) {
        e.preventDefault();
        nombres    = $.trim($('#nombres').val());
        apellidos  = $.trim($('#apellidos').val());
        correo     = $.trim($('#correo').val());
        contrasena = $.trim($('#contrasena').val());
        tp_usuario = $.trim($('#tp_usuario').val());
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
        if (tp_usuario == '') {
            valido = false;
        }

            if (valido) {
            $.ajax({
                url: "../../models/crudDos.php",
                type: "POST",
                datatype: "json",
                data: {
                    id: id_admin,
                    nombres: nombres,
                    apellidos: apellidos,
                    correo: correo,
                    contrasena: contrasena,
                    tp_usuario: tp_usuario,
                    opciones: opciones
                },
                success: function (respuesta) {
                    if(respuesta == 1){
                        tablaAdministradores.ajax.reload(null, false);
                        //Sweetalert2
                        Swal.fire({
                            title: '¡Buen Trabajo! 😃',
                            text: 'Tarea realizada correctamente',
                            icon: 'success'
                        });
                        $('#modalCRUDDos').modal('hide');
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
                $('#modalCRUDDos').modal('hide');
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
    $(document).on("click", ".btnEditarAdmin", function () {
        opciones = 2;
        fila       = $(this).closest("tr");
        id_admin   = parseInt(fila.find('td:eq(0)').text());
        nombres    = fila.find('td:eq(1)').text();
        apellidos  = fila.find('td:eq(2)').text();
        correo     = fila.find('td:eq(3)').text(); 
        usuario    = fila.find('td:eq(5)').text();
        tp_usuario = fila.find('td:eq(6)').text();

        $("#nombres").val(nombres);
        $("#apellidos").val(apellidos);
        $('#correo').val(correo);
        $('#tp_usuario option[value="'+tp_usuario+'"]').attr("selected", true);

        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Administrador");
        $('#modalCRUDDos').modal('show');
    });

////////////////////////Borrar Usuarios////////////////////////
    $(document).on("click", ".btnBorrarAdmin", function () {
        opciones = 3;
        fila        = $(this).closest("tr");
        id_admin    = parseInt(fila.find('td:eq(0)').text());
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
                    url: "../../models/crudDos.php",
                    type: "POST",
                    datatype: "json",
                    data: {
                        opciones: opciones,
                        id: id_admin
                    },
                    success: function () {
                        tablaAdministradores.row(borrar_fila.parents('tr')).remove().draw();
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
            } else if (result.dismiss === Swal.DismissReason.cancel) 
            {
                //Sweetalert2
                Swal.fire({
                    title: 'Cancelado',
                    html: '<span>¡<b>'+nombre_com+'</b> esta a salvo! 😉</span>',
                    icon: 'error'
                });
            }
        });
    });

////////////////////////Rol////////////////////////    
    $(document).on('click', '#rol', function(){

        Swal.fire({
            position: 'top-end',
            title: 'Eres Administrador 🙂',
            showConfirmButton: false,
            timer: 1500
          })
    })
});