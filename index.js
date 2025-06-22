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

let musicArray = [];
let perfArray = [];
let fashionArray = [];
let biniplusArray = [];

app.post("/submit", (req, res) => {
  function blogPost (title, content) {
    this.title = title;
    this.content = content;
  }
  
  if (req.body.category === "Music") {
    musicArray.push(new blogPost(req.body.title, req.body.content));
    console.log("Post received. Updated Music Array:", musicArray);
    console.log("Latest Post: Title - ", musicArray[musicArray.length - 1].title, "| Content - ", musicArray[musicArray.length - 1].content);
  } else if (req.body.category === "Performances") {
    perfArray.push(new blogPost(req.body.title, req.body.content));
    console.log("Post received. Updated Performances Array:", perfArray);
  } else if (req.body.category === "Fashion & Concepts") {
    fashionArray.push(new blogPost(req.body.title, req.body.content));
    console.log("Post received. Updated Fashion & Concepts Array:", fashionArray);
  } else {
    biniplusArray.push(new blogPost(req.body.title, req.body.content));
    console.log("Post received. Updated BINI+ Array:", biniplusArray);
  }
  
  res.render("compose.ejs", { showSuccess: true });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
  