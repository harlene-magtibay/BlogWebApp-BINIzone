import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "binizone",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));

let musicArray = [];
let perfArray = [];
let fashionArray = [];
let biniplusArray = [];

async function getPosts () {
  const musicResult = await db.query("SELECT id, title, content FROM blogposts WHERE category = 'Music' ORDER BY post_date ASC");
  const perfResult = await db.query("SELECT id, title, content FROM blogposts WHERE category = 'Performances' ORDER BY post_date ASC");
  const fashionResult = await db.query("SELECT id, title, content FROM blogposts WHERE category = 'Fashion & Concepts' ORDER BY post_date ASC");
  const biniplusResult = await db.query("SELECT id, title, content FROM blogposts WHERE category = 'BINI+' ORDER BY post_date ASC");

  musicArray = musicResult.rows;
  perfArray = perfResult.rows;
  fashionArray = fashionResult.rows;
  biniplusArray = biniplusResult.rows;

  return { musicArray, perfArray, fashionArray, biniplusArray };
}


app.get("/", async (req, res) => {
  try {
    const { musicArray, perfArray, fashionArray, biniplusArray } = await getPosts();
    res.render("index.ejs", {
      musicPosts: musicArray.slice(-3).reverse(),
      perfPosts: perfArray.slice(-3).reverse(),
      fashionPosts: fashionArray.slice(-3).reverse(),
      biniPlusPosts: biniplusArray.slice(-3).reverse(),
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/posts/:category/:id", async (req, res) => {
  const { category, id } = req.params;
  let array;

  const { musicArray, perfArray, fashionArray, biniplusArray } = await getPosts();

  switch (category) {
    case "Music":
      array = musicArray;
      break;
    case "Performances":
      array = perfArray;
      break;
    case "Fashion & Concepts":
      array = fashionArray;
      break;
    case "BINI+":
      array = biniplusArray;
      break;
    default:
      return res.status(404).send("Category not found");
  }

  const post = array.find((p) => p.id == id);
  if (post) {
    console.log(category);
    res.render("post.ejs", { post, category: category, id: id });
  } else {
    res.status(404).send("Post not found");
  }
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
})

app.post("/submit", async(req, res) => {
  try {
    await db.query(
      "INSERT INTO blogposts (category, title, content) VALUES ($1, $2, $3)",
      [req.body.category, req.body.title, req.body.content]
    );

    res.render("compose.ejs", { showSuccess: true });
  } catch (err) {
    console.log(err);
  }
});

app.get("/music", async (req, res) => {
  const { musicArray } = await getPosts();
  res.render("categoryPage.ejs", {
    title: "Music & Awards",
    posts: musicArray,
    category: "Music",
  });
});

app.get("/performances", async (req, res) => {
  const { perfArray } = await getPosts();
  res.render("categoryPage.ejs", {
    title: "Performances",
    posts: perfArray,
    category: "Performances",
  });
});

app.get("/fashion", async (req, res) => {
  const { fashionArray } = await getPosts();
  res.render("categoryPage.ejs", {
    title: "Fashion & Concepts",
    posts: fashionArray,
    category: "Fashion & Concepts",
  });
});

app.get("/biniPlus", async (req, res) => {
  const { biniplusArray } = await getPosts();
  res.render("categoryPage.ejs", {
    title: "BINI+",
    posts: biniplusArray,
    category: "BINI+",
  });
});

app.get("/biniverse", (req, res) => {
  res.render("biniverse.ejs", {category: "biniverse" });
});

app.get("/edit/:category/:id", async (req, res) => {
  const { category } = req.params;
  const id = Number(req.params.id); 

  const { musicArray, perfArray, fashionArray, biniplusArray } = await getPosts();
console.log("Category:", category, "ID:", id);
  let array;
  if (category === "Music") array = musicArray;
  else if (category === "Performances") array = perfArray;
  else if (category === "Fashion & Concepts") array = fashionArray;
  else if (category === "BINI+") array = biniplusArray;

  const post = array.find((p) => p.id === id); 

  if (post) {
    res.render("edit.ejs", { post, category });
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/edit/:category/:id", async (req, res) => {
  const { category, id } = req.params;
  const { title, content, category: newCategory } = req.body; // 'category' is the updated value from the form
console.log("Edit request for Category:", category, "ID:", id, "New Category:", newCategory, "New Title:", title, "New Content:", content);

  try {
    await db.query(
      "UPDATE blogposts SET category = $1, title = $2, content = $3 WHERE id = $4",
      [newCategory, title, content, id]
    );

    // Redirect to the updated post
    res.redirect(`/posts/${newCategory}/${id}`);
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete/:category/:id", async (req, res) => {
  const { category, id } = req.params;
  const postId = parseInt(req.params.id);

  try {
    await db.query("DELETE FROM blogposts WHERE id = $1", [postId]);
    res.redirect("/#" + category);
  } catch (err) {
    console.log(err);
  }
 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
  