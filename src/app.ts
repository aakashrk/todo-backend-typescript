import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";

import { requestLoggerMiddleware } from "./request.logger.middleware";

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(requestLoggerMiddleware);

app.get(
  "/todo",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({ id: 1, description: "Milk" });
  }
);

app.post(
  "/todo",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    res.end();
  }
);

app.put(
  "/todo/:id",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    console.log(req.params.id);
    res.end();
  }
);


app.delete(
    "/todo/:id",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log(req.params.id);
      res.end();
    }
  );
export { app };
