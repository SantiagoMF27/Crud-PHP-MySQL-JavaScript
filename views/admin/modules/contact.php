<?php
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../../login.php");
}else if (isset($_SESSION['CORREO']))
{?>
    <form id="formContact" method="POST">
        <div class="divider d-flex align-items-center my-4">
            <p class="text-center lead fw-normal mb-0 me-3">Contactanos</p>
        </div>
        <div class="form-outline mb-4">
            <input type="tex" id="nombres" class="form-control form-control-lg" autofocus pattern="[A-Za-z ]+{50}"/>
            <label class="form-label" for="form1Example13">Tu Nombre</label>
        </div>
        <div class="form-outline mb-4">
            <input type="text" id="apellidos" class="form-control form-control-lg" pattern="[A-Za-z ]+{50}"/>
            <label class="form-label" for="form1Example13">Tus Apellidos</label>
        </div>
        <div class="form-outline mb-4">
            <input type="email" id="correo" class="form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
            <label class="form-label" for="form1Example13">Tu Correo</label>
        </div>
        <div class="form-outline mb-4">
            <input type="text" id="asunto" class="form-control form-control-lg" pattern="[A-Za-z ]+{50}"/>
            <label class="form-label" for="form1Example13">Asunto</label>
        </div>
        <div class="form-outline mb-4">
            <textarea id="mensaje" class="form-control form-control-lg" cols="50"  rows="4" maxlength="400"  style="height: 100px; resize: none;"></textarea>
            <label class="form-label" for="form1Example23">Tu Mensaje</label>
        </div>
        <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" id="btnEnviar" class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Enviar
            </button>
        </div>
    </form>
<?php }?>