import express = require("express");
import { hi, hello, awesome } from './controllers/status';

const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send("Hi World");
});

app.get('/hi', hi);
app.get('/hello', hello);
app.get('/awesome', awesome);
export default app;