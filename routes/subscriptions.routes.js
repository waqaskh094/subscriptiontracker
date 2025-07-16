import { Router } from "express";

import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subsriptionRouter = Router();

subsriptionRouter.get('/', (req, res) => res.send({ title: "GET all subscriptions"}));

subsriptionRouter.get('/:id', (req, res) => res.send({ title: "GET subscription details"}));

subsriptionRouter.post('/', authorize, createSubscription);

subsriptionRouter.put('/:id', (req, res) => res.send({ title: "UPDATE SUBSCRIPTION"}));

subsriptionRouter.delete('/:id', (req, res) => res.send({ title: "DELETE subscription"}));

subsriptionRouter.get('/user/:id', authorize, getUserSubscription);

subsriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: "CANCEL subscription"}));

export default subsriptionRouter;
