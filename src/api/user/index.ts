import express from 'express';
import {
    index,
    register,
    signin,
    remove,
    update
} from './user.controller';
import * as middleware from '../../middleware';

let userRouter = express.Router();

userRouter.get('/index', middleware.isAuthenticated, index);
userRouter.post('/register', register);
userRouter.post('/signin', signin);
userRouter.delete('/:id', middleware.isAuthenticated, remove);
userRouter.put('/update', middleware.isAuthenticated, update);

export default userRouter;