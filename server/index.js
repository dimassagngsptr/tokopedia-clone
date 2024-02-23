const express = require("express");
const PORT = 8000;
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
   try {
      res.status(200).send(`API TEST`);
   } catch (err) {
      console.log(err);
   }
});

app.listen(PORT, () => {
   console.log(`listening on ${PORT}`);
});
