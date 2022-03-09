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
        <div class="modal fade" id="modalCRUDDos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="btn btn-danger close" data-dismiss="modal" aria-label="Close"
                            title="Cerrar">
                            <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <form id="formAdmins" method="POST">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Nombres</label>
                                        <input type="text" class="form-control" id="nombres" pattern="[A-Za-z ]+{50}">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="apellidos" pattern="[A-Za-z ]+{50}">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Correo</label>
                                        <input type="email" class="form-control" id="correo" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Contraseña</label>
                                        <input type="password" class="form-control" id="contrasena" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="" class="col-form-label">Tipo de Usuario</label>
                                        <select class="form-control" id="tp_usuario">
                                            <option value="">Seleccione</option>
                                            <option value="2">Administrador</option>
                                            <option value="1">Super Administrador</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" title="Cancelar">Cancelar
                            </button>
                            <button type="submit" id="btnGuardarAdmin" class="btn btn-primary" title="Guardar">Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
<?php }}?>    