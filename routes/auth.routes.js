import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => res.send({ title: 'Sign Up'}));
authRouter.post('/sign-in', (req, res) => res.send({ title: 'Sign IN'}));
authRouter.post('/sign-out', (req, res) => res.send({ title: 'Sign Out'}));

export default authRouter;