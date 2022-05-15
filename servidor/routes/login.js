const { Router } = require('express');
const loginController = require('../controllers/loginController');
const router = Router();

/*crea un usuario */
router.post('/crearUsuario', loginController.crearUsuario);

/*logiar un usuario*/
router.get('/login', loginController.verificarUsuario);

/*verificar si existe el usuario */
router.get('/verficarNombreUsuario', loginController.verficarNombreUsuario);

/*obtener el codigo de verificacion */
router.get('/solicitarCodigoVerificacion', loginController.solicitarCodigoVerificacion);

/*verficar el codigo de verificacion ingresado */
router.get('/verificarCodigoVerificacion', loginController.verificarCodigoVerificacion);

router.post('/cambiarContrasena', loginController.cambiarContrasena);