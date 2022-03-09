<?php
//Seguridad administrador
session_start();
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../login.php");
}else if (isset($_SESSION['CORREO']))
{?>
    <?php include_once 'layouts/head.php';?>
    <title>Registrarse</title>
    </head>

    <body>
        <?php include_once 'layouts/menu.php';?>
        <main>
            <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="assets/dist/images/img/contacto.png" class="img-fluid" alt="Sample image">
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 formColor">
                            <?php include_once 'modules/contact.php';?>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <?php include_once 'layouts/footer.php';?>
<?php }?>    