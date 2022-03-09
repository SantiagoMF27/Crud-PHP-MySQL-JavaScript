<?php
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../../login.php");
}else if (isset($_SESSION['CORREO']))
{
    if ($_SESSION['TP_USUARIO'] == 2){
        header("location: index.php");
    }else if($_SESSION['TP_USUARIO'] == 1)
    {?>
        <table id="tablaAdmins" class="table table-striped table-bordered table-condensed" style="width:100%">
            <thead class="text-center color-nombre-colum">
                <tr>
                    <th title="Identificador">ID</th>
                    <th title="Nombres">Nombres</th>
                    <th title="Apellidos">Apellidos</th>
                    <th title="Correo">Correo</th>
                    <th title="Tipo de Usuario">Rol</th>
                    <th title="Fecha de Registro">Fecha</th>
                    <th title="Numero de TP">1</th>
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
                    <th title="Correo">Correo</th>
                    <th title="Tipo de Usuario">Rol</th>
                    <th title="Fecha de Registro">Fecha</th>
                    <th title="Numero de TP">1</th>
                    <th title="Acciones">Acciones</th>
                </tr>
            </tfoot>
        </table>
<?php }}?>