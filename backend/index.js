const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
//npm run start
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put('https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },

      { headers: { "Private-Key": "380f6053-a03c-43a8-b4ed-45ad7674833f" } }
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

});

app.listen(3001);