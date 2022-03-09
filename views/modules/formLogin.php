<form id="formLogin" action="" method="POST">
    <div
        class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
        <p class="lead fw-normal mb-0 me-3">Ingresar con</p>
        <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
        </button>
        <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-twitter"></i>
        </button>
        <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-linkedin-in"></i>
        </button>
    </div>
    <div class="divider d-flex align-items-center my-4">
        <p class="text-center fw-bold mx-3 mb-0">O inicia sesion</p>
    </div>
    <div class="form-outline mb-4">
        <input type="email" id="correo" class="form-control form-control-lg" autofocus pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
        <label class="form-label" for="form1Example13">Correo</label>
    </div>
    <div class="form-outline mb-4">
        <input type="password" id="contrasena" class="form-control form-control-lg" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
        <label class="form-label" for="form1Example23">Contraseña</label>
    </div>
    <div class="d-flex justify-content-between align-items-center">
        <div class="form-check mb-0">
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label class="form-check-label" for="form2Example3">
                Recuerdame
            </label>
        </div>
        <a href="#!" class="text-body">¿Olvidó su contraseña?</a>
        <p href="#!" class="text-body" id="prueba"></p>
    </div>
    <div class="text-center text-lg-start mt-4 pt-2">
        <button type="submit" id="btnLogin" name="submit" class="btn btn-primary btn-lg"
            style="padding-left: 2.5rem; padding-right: 2.5rem;">Ingresar
        </button>
        <p class="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta?
            <a href="register.php" title="Click para registrarte"
                class="link-danger">Registrarse</a>
        </p>
    </div>
</form>