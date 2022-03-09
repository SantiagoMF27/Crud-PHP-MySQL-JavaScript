<?php     

//Seguridad super administrador
session_start();
if (!isset($_SESSION['CORREO']))
{
    session_unset();
    session_destroy();
    header("location: ../login.php");
}else if (isset($_SESSION['CORREO']))
{
    if ($_SESSION['TP_USUARIO'] == 2){
        header("location: index.php");
    }else if($_SESSION['TP_USUARIO'] == 1)
    {?>

        <!---Vista para el super administrador--->
        <?php  include_once 'layouts/head.php';?>
        <title><?php echo $_SESSION['NOMBRES'];?> <?php echo $_SESSION['APELLIDOS'];?></title>
        </head>

        <body>
            <?php include_once 'layouts/menu.php';?>
            <main>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <button id="btnNuevoAdmin" type="button" class="btn btn-primary" data-toggle="modal"
                                    title="Agregar Usuario"><i class="material-icons">library_add</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="container caja">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="table-responsive">
                                    <?php include_once 'modules/tableDos.php';?>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <?php include_once 'modules/modalDos.php';?>
                </section>
            </main>
        <br><br><br>
        <?php include_once 'layouts/footer.php';?>
<?php } }?>