import { Router } from "express";
import TasksController from "../controllers/tasks.js";

const tasksRouter = Router();

tasksRouter.post('/', TasksController.create);

tasksRouter.get('/', TasksController.readAll);

tasksRouter.get('/:id', TasksController.readOne);

tasksRouter.put('/:id', TasksController.update);

tasksRouter.delete('/:id', TasksController.delete);

export default tasksRouter;