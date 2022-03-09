<?php
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../../login.php");
}else if (isset($_SESSION['CORREO']))
{?>
    <div class="modal fade" id="modalDos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn btn-danger close" data-dismiss="modal" aria-label="Close"
                        title="Cerrar">
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
                <form id="formUsuarios" method="POST">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <b>Nombre </b>
                                    <h6><?php echo $_SESSION['NOMBRES'];?> <?php echo $_SESSION['APELLIDOS'];?></h6>
                                </div>
                                <div class="">
                                    <b>Rol </b>
                                    <h6><?php if($_SESSION['TP_USUARIO'] == 1){
                                                    echo 'Super Administrador';
                                                }else if($_SESSION['TP_USUARIO'] == 2){
                                                    echo 'Administrador';
                                                }?>
                                    </h6>
                                </div>
                                <div class="">
                                    <b>Correo </b>
                                    <h6><?php echo $_SESSION['CORREO'];?></h6>
                                </div>
                                <div class="">
                                    <b>Contraseña </b>
                                    <h6>*********************</h6>
                                </div>
                                <div class="">
                                    <b>Fecha de Registro </b>
                                    <h6><?php echo $_SESSION['FECHA'];?></h6>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="">
                                    <b>Foto de perfil</b>
                                </div>
                                <div>
                                    <img src="assets/dist/images/img/vlacho.jpg" class="img-thumbnail" alt="Foto">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal" title="Correcto">Correcto
                        </button>
                        <button type="button" id="" class="btn btn-primary" title="Editar Datos">Editar Perfil
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php }?>