import * as express from "express";
import { TodoModel } from "./todo";
const todoRoutes = express.Router();

todoRoutes.get(
  "/todo",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const items: any = await TodoModel.find();
    res.send(items);
  }
);

todoRoutes.post(
  "/todo",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log(req.body);
    const name = req.body.name;
    const item = new TodoModel({ name: name });
    await item.save();
    res.send(item);
  }
);

todoRoutes.put(
  "/todo/:id",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log(req.body);
    console.log(req.params.id);
    const name = req.body.name;
    const id = req.params.id;
    const item: any = await TodoModel.findOneAndUpdate(
      { _id: id },
      { name: name }
    );
    res.send("updated " + item._id);
  }
);

todoRoutes.delete(
  "/todo/:id",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log(req.params.id);
    const id = req.params.id;
    const item: any = await TodoModel.findOneAndDelete({ _id: id });
    res.send("deleted " + item._id);
  }
);

export { todoRoutes };
