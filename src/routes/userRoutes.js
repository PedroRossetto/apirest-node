import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

// Rota secundária
// site.com/users/${store, show, update, delete}
router.post('/store/', userController.store);
router.get('/', userController.index);
router.get('/show/:id', userController.show);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

export default router;

/*
index -> lista todos os usuarios
store/create -> cria um novo usuario
delete -> apaga um usuario
show -> mostra um usuario
update -> atualiza um usuario
*/
