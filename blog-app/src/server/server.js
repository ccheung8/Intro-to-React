import express from "express";
import fs from "fs";
import { data } from "react-router";
import { json } from "stream/consumers";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

class Article {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

function nextId(articles) {
  // sorts articles
  articles.sort(
    (a, b) => Number(a.replace(".json", "")) - Number(b.replace(".json", ""))
  );

  for (let i = 0; i < articles.length; i++) {
    if (Number(articles[i].replace(".json", "")) != i + 1) {
      return i + 1;
    }
  }

  // json files are in order 1 by 1
  return articles.length + 1;
}

app.post("/create", (req, res) => {
  const article = req.body;
  console.log(article);

  const newArticle = new Article(
    nextId(fs.readdirSync("./src/server/data")),
    article.title,
    article.text
  );

  fs.writeFileSync(
    `./src/server/data/${newArticle.id}.json`,
    JSON.stringify(newArticle)
  );


  res.send({
    msg: "article submitted",
    data: newArticle,
  });
});

// health check
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
