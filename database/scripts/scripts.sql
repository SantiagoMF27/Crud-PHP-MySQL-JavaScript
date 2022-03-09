-----------------------------
----------Scripts 1----------
-----------------------------

SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE ID = '';

-----------------------------
----------Scripts 2----------
-----------------------------

INSERT INTO usuarios(NOMBRES, APELLIDOS, PAIS, TP_DOCUMENTO, DOCUMENTO, GENERO, ESTADO)  
    VALUES('', '', '', '', '', '', '');

-----------------------------
----------Scripts 3----------
-----------------------------

UPDATE usuarios 
    SET NOMBRES='',APELLIDOS='',PAIS='',TP_DOCUMENTO='',DOCUMENTO='',GENERO='',ESTADO='',FECHA='' 
    WHERE ID = '' ;

-----------------------------
----------Scripts 3----------
-----------------------------

SELECT * FROM usuarios ORDER BY ID DESC LIMIT 1;

-----------------------------
----------Scripts 4----------
-----------------------------

DELETE FROM usuarios WHERE ID ='';

-----------------------------
----------Scripts 5----------
-----------------------------

SELECT US.ID AS US_ID,
            US.NOMBRES AS US_NOMBRES,
            US.APELLIDOS AS US_APELLIDOS,
            PA.NOMBRE AS PA_NOMBRES,
            TP.ISO AS TI_DOCUMENTOS,
            US.DOCUMENTO AS NU_DOCUMENTOS,
            GE.NOMBRE AS GE_GENEROS,
            ES.NOMBRE AS ES_ESTADOS,
            US.FECHA AS US_FECHA,
            PA.ID AS ID_PAIS,
            TP.ID AS ID_TI_DOCUMETOS,
            GE.ID AS ID_GENERO,
            ES.ID AS ID_ESTADO 
        FROM usuarios US 
        INNER JOIN paises PA ON US.PAIS = PA.ID
        INNER JOIN tp_documentos TP ON US.TP_DOCUMENTO = TP.ID
        INNER JOIN generos GE ON US.GENERO = GE.ID
        INNER JOIN estados ES ON US.ESTADO = ES.ID;
------------------------------
------------------------------