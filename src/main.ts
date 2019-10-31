import { app } from "./app";
import mongoose from "mongoose";
const PORT = 8080;
const MONGO_URL = "mongodb://localhost:27017/todo";
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  mongoose.connect(MONGO_URL, { useNewUrlParser: true });
  mongoose.connection.on("open", () => {
    console.log("Connected to Mongo");
  });

  mongoose.connection.on("error", (err: any) => {
    console.log(err);
  });
});
