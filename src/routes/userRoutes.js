import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rota secundária
// site.com/users/${store, show, update, delete}
router.get('/show/:id', userController.show);

router.post('/store/', userController.store);
router.put('/update/', loginRequired, userController.update);
router.delete('/delete/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios
store/create -> cria um novo usuario
delete -> apaga um usuario
show -> mostra um usuario
update -> atualiza um usuario
*/
