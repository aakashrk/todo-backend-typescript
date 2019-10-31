import * as mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: String
});

const TodoModel = mongoose.model("todo", TodoSchema);

export { TodoModel };
