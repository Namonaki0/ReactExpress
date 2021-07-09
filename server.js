const express = require("express");

const app = express();

app.get("/api/games", (req, res) => {
  const games = [
    { id: 1, name: "Bomberman", company: "Nintendo" },
    { id: 2, name: "Altered Beast", company: "Sega" },
    { id: 3, name: "Bare Knuckle", company: "Sega" },
  ];
  res.json(games);
});

app.listen(process.env.PORT || 5000, () => console.log("LISTENING"));
