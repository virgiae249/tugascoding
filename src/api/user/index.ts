import express from 'express';
import {
    index,
    create,
    remove,
    update
} from './user.controller';

let userRouter = express.Router();

userRouter.get('/index', index);
userRouter.post('/create', create);
userRouter.delete('/:id', remove);
userRouter.put('/update', update);

export default userRouter;