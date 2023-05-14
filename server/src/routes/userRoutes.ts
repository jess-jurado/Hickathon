import {Router} from 'express';

import usersController from '../controllers/usersController'

class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usersController.list);
        this.router.get('/', usersController.getOne);
        this.router.post('/', usersController.create);
        this.router.delete('/:id', usersController.delete);
        this.router.put('/:id', usersController.update );
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;