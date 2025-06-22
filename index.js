import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

app.get("/", (req, res) => {
  res.render("index.ejs");
})

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
})

app.post("/submit", (req, res) => {
  function blogPost (category, title, content) {
    this.category = category;
    this.title = title;
    this.content = content;
  }
  const blogPost1 = new blogPost(req.body.category, req.body.title, req.body.content);

  console.log("Post received:", blogPost1);
  res.render("compose.ejs", { showSuccess: true });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
  