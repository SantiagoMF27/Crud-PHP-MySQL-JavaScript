<?php include_once 'layouts/head.php';?>
<title>Ingresar</title>
</head>

<body>
    <?php include_once 'layouts/menu.php';?>
    <main>
        <section class="vh-100">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="assets/images/img/login.png" class="img-fluid" alt="Sample image">
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 formColor">
                        <?php include_once 'modules/formLogin.php';?>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include_once 'layouts/footer.php';?>