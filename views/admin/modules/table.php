<?php
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../../login.php");
}else if (isset($_SESSION['CORREO']))
{?>
    <table id="tablaUsuarios" class="table table-striped table-bordered table-condensed" style="width:100%">
        <thead class="text-center color-nombre-colum">
            <tr>
                <th title="Identificador">ID</th>
                <th title="Nombres">Nombres</th>
                <th title="Apellidos">Apellidos</th>
                <th title="País">País</th>
                <th title="Tipo de Documento">Tipo</th>
                <th title="Número de Documento">Documento</th>
                <th title="Género">Género</th>
                <th title="Estado">Estado</th>
                <th title="Fecha de Registro">Fecha</th>
                <th title="Número de Pais">1</th>
                <th title="Número de TP">2</th>
                <th title="Número de Genero">3</th>
                <th title="Número de Estado">4</th>
                <th title="Acciones">Acciones</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot class="text-center color-nombre-colum">
            <tr>
                <th title="Identificador">ID</th>
                <th title="Nombres">Nombres</th>
                <th title="Apellidos">Apellidos</th>
                <th title="País">País</th>
                <th title="Tipo de Documento">Tipo</th>
                <th title="Número de Documento">Documento</th>
                <th title="Género">Género</th>
                <th title="Estado">Estado</th>
                <th title="Fecha de Registro">Fecha</th>
                <th title="Número de Pais">1</th>
                <th title="Número de TP">2</th>
                <th title="Número de Genero">3</th>
                <th title="Número de Estado">4</th>
                <th title="Acciones">Acciones</th>
            </tr>
        </tfoot>
    </table>
<?php }?>