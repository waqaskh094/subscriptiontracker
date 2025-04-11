import { Router } from "express";

const subsriptionRouter = Router();

subsriptionRouter.get('/', (req, res) => res.send({ title: "GET all subscriptions"}));

subsriptionRouter.get('/:id', (req, res) => res.send({ title: "GET subscription details"}));

subsriptionRouter.post('/', (req, res) => res.send({ title: "CREATE subscription"}));

subsriptionRouter.put('/:id', (req, res) => res.send({ title: "UPDATE SUBSCRIPTION"}));

subsriptionRouter.delete('/:id', (req, res) => res.send({ title: "DELETE subscription"}));

subsriptionRouter.get('/user/:id', (req, res) => res.send({ title: "GET all user subscription"}));

subsriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: "CANCEL subscription"}));

export default subsriptionRouter;
