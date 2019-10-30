import { app } from "./app";
import { MongoHelper } from "./mongo.helper";
const PORT = 8080;
app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  try{
    await MongoHelper.connect('mongodb://localhost:27017');
    console.log("Connected to Mongo")
  }
  catch(err){
    console.log(err)
  }
});
