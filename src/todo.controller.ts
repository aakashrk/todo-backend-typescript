import * as express from "express";
import * as mongodb from "mongodb";
import { MongoHelper } from "./mongo.helper";
const todoRoutes = express.Router();

const getCollection = () => {
  return MongoHelper.client.db("todo").collection("todo");
};

todoRoutes.get(
  "/todo",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const collection = getCollection();
    const result = await collection.find().toArray();
    res.json(result);
  }
);

todoRoutes.post(
  "/todo",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    const name = req.body.name;
    const collection = getCollection();
    collection.insert({ name: name });
    res.end();
  }
);

todoRoutes.put(
  "/todo/:id",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    console.log(req.params.id);
    const name = req.body.name;
    const id = req.params.id;
    const collection = getCollection();
    collection.findOneAndUpdate(
      { _id: new mongodb.ObjectId(id) },
      { $set: { name: name } }
    );
    res.end();
  }
);

todoRoutes.delete(
  "/todo/:id",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.params.id);
    const id = req.params.id;
    const collection = getCollection();
    collection.deleteOne({ _id: new mongodb.ObjectId(id) });
    res.end();
  }
);

export { todoRoutes };
