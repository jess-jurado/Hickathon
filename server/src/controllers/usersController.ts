import {Request, Response } from 'express';

import pool from '../database';

class UsersController {

    public async list (req: Request, res: Response) {
       const users = await  pool.promise().query('SELECT * FROM users');
       res.json(users);
    }

    public getOne (req: Request, res: Response) {
        res.json({text: 'this is user' + req.params.id});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.promise().query('INSERT INTO users SET ?', [req.body]);
        res.json({message: 'User saved'});
    }

    public delete (req: Request, res: Response) {
        res.json({text: 'deleting a user ' + req.params.id});
    }

    public update (req: Request, res: Response) {
        res.json({text: 'updating a user ' + req.params.id});
    }

}

const usersController = new UsersController();
export default usersController;