<?php
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../../login.php");
}else if (isset($_SESSION['CORREO']))
{?>
    <!--Menu-->
    <header>
        <a href="index.php" class="logo" title="<?php echo $_SESSION['NOMBRES'];?> <?php echo $_SESSION['APELLIDOS'];?>">
            <img src="../assets/images/img/favicon.png" class="img-menu-ico" alt="Logo">
            <?php
                if ($_SESSION['TP_USUARIO'] == 2){
                    echo 'Administrador';
                }else{
                    echo 'Super Administrador';
                }?>
        </a>
        <div class="toggle" title="Menu" onclick="menuDesplegable();"></div>
        <ul class="menu">
            <?php 
                if($_SESSION['TP_USUARIO'] == 1){?>
            <li>
                <a href="admins.php" title="Tabla Administradores">
                    <img src="assets/dist/images/icons/admins.png" class="img-menu" alt="Admins"> Administradores
                </a>
            </li>
            <li>
                <a href="index.php" title="Tabla Usuarios">
                    <img src="assets/dist/images/icons/usuario.png" class="img-menu" alt="Inicio"> Usuarios
                </a>
            </li>
            <?php }?>
            <li>
                <button id="btnModalPerfil" class="btn-menu" type="button" title="Tu perfil">
                    <img src="assets/dist/images/icons/perfil.png" class="img-menu" alt="Perfil"> Mis Datos
                </button>
            </li>
            <li>
                <button id="rol" class="btn-menu" type="button" title="Administrador">
                    <img src="assets/dist/images/icons/rol.png" class="img-menu" alt="Salir"> Rol
                </button>
            </li>
            <li>
                <a href="contact.php" title="Contacto">
                    <img src="../assets/images/icons/contacto.png" class="img-menu" alt="Ingresar"> Contacto
                </a>
            </li>
            <li>
                <button id="cerrarSesion" class="btn-menu" type="button" title="Cerrar Sesión">
                    <img src="assets/dist/images/icons/salir.png" class="img-menu" alt="Salir"> Salir
                </button>
            </li>
        </ul>
    </header>
    <br><br><br><br>
<?php }?>    