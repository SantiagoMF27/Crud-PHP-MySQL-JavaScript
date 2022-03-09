<form id="formRegister" method="POST">
    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
        <p class="lead fw-normal mb-0 me-3">Registrate con</p>
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
        <p class="text-center fw-bold mx-3 mb-0">O crea tu cuenta</p>
    </div>
    <div class="form-outline mb-4">
        <input type="tex" id="nombres" class="form-control form-control-lg" autofocus pattern="[A-Za-z ]+{50}"/>
        <label class="form-label" for="form1Example13">Nombres</label>
    </div>
    <div class="form-outline mb-4">
        <input type="text" id="apellidos" class="form-control form-control-lg" pattern="[A-Za-z ]+{50}"/>
        <label class="form-label" for="form1Example13">Apellidos</label>
    </div>
    <div class="form-outline mb-4">
        <input type="email" id="correo" class="form-control form-control-lg" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
        <label class="form-label" for="form1Example13">Correo</label>
    </div>
    <div class="form-outline mb-4">
        <input type="password" id="contrasena" class="form-control form-control-lg" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
        <label class="form-label" for="form1Example23">Contraseña</label>
    </div>
    <div class="text-center text-lg-start mt-4 pt-2">
        <button type="submit" id="btnRegister" class="btn btn-primary btn-lg"
            style="padding-left: 2.5rem; padding-right: 2.5rem;">Registrarse
        </button>
        <p class="small fw-bold mt-2 pt-1 mb-0">¿Ya estás registrado?
            <a href="login.php" title="Click para ingresar" class="link-primary">Ingresar</a>
        </p>
    </div>
</form>