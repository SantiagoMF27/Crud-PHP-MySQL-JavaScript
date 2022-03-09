<?php
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../../login.php");
}else if (isset($_SESSION['CORREO']))
{?>
    <div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                <form id="formUsuarios" method="POST">
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
                            <div class="row">
                                <div class="col-lg-12">
                                    <label for="pais" class="form-label">Pais</label>
                                    <select class="form-control" id="pais">
                                        <option value="">Seleccione</option>
                                        <option value="12">Argentina.</option>
                                        <option value="28">Bolivia.</option>
                                        <option value="31">Brasil.</option>
                                        <option value="43">Chile.</option>
                                        <option value="47">Colombia.</option>
                                        <option value="60">Ecuador.</option>
                                        <option value="177">Paraguay.</option>
                                        <option value="178">Perú.</option>
                                        <option value="231">Uruguay.</option>
                                        <option value="234">Venezuela.</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="" class="col-form-label">Tipo de Documento</label>
                                    <select class="form-control" id="tp_documento">
                                        <option value="">Seleccione</option>
                                        <option value="1">CC. Cédula de Ciudadanía.</option>
                                        <option value="2">CI. Carné de Identidad.</option>
                                        <option value="3">CE. Cédula de Extranjería.</option>
                                        <option value="4">DNI. Documento Nacional de Identidad.</option>
                                        <option value="5">DUI. Documento Único de Identidad.</option>
                                        <option value="6">ID. Identificación Oficial.</option>
                                        <option value="7">PT. Tarjeta Pasaporte. PT</option>
                                        <option value="8">RC. Registro Civil.</option>
                                        <option value="9">TI. Tarjeta de Identidad.</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="" class="col-form-label">Número de Documento</label>
                                    <input type="number" class="form-control" id="documento">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="" class="col-form-label">Genero</label>
                                    <select class="form-control" id="genero">
                                        <option value="">Seleccione</option>
                                        <option value="1">Femenino</option>
                                        <option value="2">Masculino</option>
                                        <option value="3">Otro</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label for="" class="col-form-label">Estado</label>
                                    <select class="form-control" id="estado">
                                        <option value="">Seleccione</option>
                                        <option value="1">Activo</option>
                                        <option value="2">Inactivo</option>
                                        <option value="3">Suspendido</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" title="Cancelar">Cancelar
                        </button>
                        <button type="submit" id="btnGuardar" class="btn btn-primary" title="Guardar">Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php }?>