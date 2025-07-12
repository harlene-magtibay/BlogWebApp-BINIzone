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

function BlogPost(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

const musicArray = [
  new BlogPost(
    0,
    "Pantropiko Hits 100 Million Streams on Spotify and YouTube Music",
    `<p><img src="/images/pantropiko.jpg"></p>
    <p>BINI officially reached another major milestone: their hit single “Pantropiko” surpassed 100 million streams on both Spotify and YouTube Music. This marks the group's first track to ever cross the 100M mark on both platforms, solidifying its place as one of the most successful P-pop releases to date.</p>
    <p>Released in November 2023, “Pantropiko” quickly stood out with its bright, tropical sound and upbeat energy. It blends pop with summery, island-inspired rhythms—an instant mood-lifter that found its way into playlists, TikTok trends, and countless repeat streams. It didn’t take long before it became one of BINI’s signature hits.</p>
    <p>The journey to 100 million streams is something many fans have watched unfold in real time. From its viral moments online to its constant presence on streaming charts, “Pantropiko” became more than just a single—it became a defining moment in BINI’s discography. It also helped push P-pop further into the mainstream, proving that local music has the power to connect widely and last long beyond release day.</p>
    <p>Seeing this track reach such a huge number is a testament to the group’s hard work and growth—and to the dedication of the fans who’ve supported them every step of the way. Every stream, share, and listen brought this milestone closer.</p>
    <p>This isn’t just a win for BINI—it’s a proud moment for the entire Bloom community. And if this is what they can accomplish with one song, it’s exciting to imagine what comes next.</p>`
  ),
  new BlogPost(
    1,
    "“Pantropiko” Takes Song of the Year at MYX Music Awards 2024!",
    `<p><img src="/images/pantropiko-myx.jpg"></p>
    <p>Blooms, can you feel our hearts bursting? On November 21, 2024, at the star‑studded MYX Music Awards 2024 in Studio 10, BINI once again made history—this time taking home the coveted Song of the Year award for “Pantropiko.” Watching their name light up was a jaw‑dropping moment for all of us who have been dancing and streaming along since its release.</p>
    <p>“Pantropiko” wasn’t just a single—it was our summer anthem of 2024. From its irresistible melody to its catchy chorus, the track captured hearts everywhere. So it’s no surprise that fans and critics alike recognized its impact, lifting it above other nominees like “Dilaw,” “Ere,” and “Raining in Manila” to claim top honors.</p>
    <p>This award sits proudly alongside BINI’s win for Pop Video of the Year (“Salamin, Salamin”), showing just how versatile and powerful this group has become. It's not just about catchy tunes—it’s about storytelling and visuals that move us. And when they took home the Song of the Year trophy, it was clear the love is real and the impact is lasting.</p>
    <p>For us Blooms, watching them win brings both pride and nostalgia. We remember learning the lyrics, laughing over TikTok dance challenges, and blasting “Pantropiko” on repeat. In fact, the track is one of BINI’s top‑streamed songs ever—making its win feel inevitable. It’s proof that our voices mattered, that our streams counted, and that BINI delivered.</p>
    <p>This moment is more than just a trophy. It’s a milestone that cements BINI’s place in P‑pop history. “Pantropiko” may have started as a sweet summer bop, but with this win, it has become part of our story—a symbol of how far we’ve all come alongside these incredible girls.</p>
    <p>From the studio to the stage, from flights of streaming numbers to the gleam of trophies, BINI continues to shine—thanks to every Bloom who supported them along the way. Here’s to more wins, more music, and more moments we share together. As “Pantropiko” continues to weave its magic, one thing’s for sure: BINI is just getting started—and Blooms, we’re ready for every beat.</p>`
  ),
  new BlogPost(
    2,
    'Strong, Stylish, and Ready: BINI is Back with "Blink Twice"',
    `<p><img src="/images/BINI-Group1.jpg"></p>
    <p>February 13, 2025—mark the date, Blooms, because this was the day BINI came back stronger, bolder, and more unapologetically themselves with their latest single, “Blink Twice.” As fans who have been eagerly counting down the days, we were not disappointed. This comeback under Star Music feels like the beginning of an exciting new era for the girls—a perfect blend of that signature BINI sweetness and a newfound confidence that absolutely shines through.</p>
    <p>“Blink Twice” is everything we love about BINI and more. It mixes R&B and bubblegum pop with early-2000s vibes that make it instantly catchy, while also giving us a fresher, more mature sound that shows just how much the group has grown. With production credits from international names like Mr. Franks, Glitch, Oneye, and Leather Jacket—and lyrics co-written by Amanda Ratchford—the song doesn’t just sound amazing; it feels empowering. It flips the script on waiting around for love and instead encourages girls to make the first move. As a Bloom, it’s honestly inspiring to see BINI push those boundaries and own their narrative.</p>
    <p>And don’t even get us started on the music video. Directed by Kerbs Balagtas, it’s a visual feast—fun, fierce, and full of surprises. From the dreamy pastel clinic to the mysterious underground lab, every shot tells a story. Seeing BINI play with dual concepts—soft vs. bold, sweet vs. spicy—was such a treat, and the makeup and styling? Next-level. Those bold burgundy looks are burned into our brains forever. It’s clear they didn’t just want to give us another comeback—they wanted to give us a whole experience.</p>
    <p>The fans definitely felt the impact. “Blink Twice” skyrocketed to 1 million views in under 12 hours, quickly claiming the #1 trending spot in the Philippines and debuting at #7 on the Billboard Philippines Hot 100. It’s a moment of pride for all of us who’ve been cheering them on from the start—proof that BINI isn’t just rising; they’re soaring.</p>
    <p>This comeback isn’t just another single drop—it’s a statement. BINI is carving out their own space in P-pop and showing the world what modern Filipina talent looks like: fearless, creative, and full of heart. With the Biniverse expanding and even bigger things on the horizon, one thing’s for sure—this is only the beginning. And as fans, we’ll be right here for every blink, beat, and milestone.</p>`
  ),
];
const perfArray = [
  new BlogPost(
    0,
    "Grand BINIverse at Araneta Coliseum: A Night of Unforgettable Performances",
    `<p><img src="/images/biniverse-araneta.jpg"></p>
    <p>November 16, 2024, will go down as one of the most unforgettable nights in Bloom history. Held at the iconic Araneta Coliseum, BINI’s Grand BINIverse concert was exactly what the name promised—grand, powerful, and overflowing with love and talent.</p>
    <p>From the moment the show opened, it was clear that this wasn’t just a regular concert. The production, the stage presence, the energy—everything was on a different level. Each member brought their own style to the stage, and the chemistry between them was undeniable. Whether they were dancing in sync to fan-favorite tracks or delivering heartfelt ballads, BINI proved why they’re at the top of their game.</p>
    <p>One of the most emotional moments came when the group performed songs that represented their journey so far. There was this deep sense of gratitude and connection—between the girls and the fans, and even among the Blooms in the crowd. The lightsticks, the fan chants, the energy—Araneta felt alive.</p>
    <p>The setlist included a strong mix of their biggest hits and newer tracks, giving fans both nostalgia and excitement for what’s to come. The visuals and outfits changed throughout the show, each transition adding something new and exciting. Every detail felt intentional, and every performance felt like a gift.</p>
    <p>The love from the crowd was just as overwhelming. Blooms came in full force, singing along, cheering their hearts out, and making the entire coliseum feel like a massive celebration of BINI’s growth and success. There were moments when the members visibly held back tears—and honestly, so did many of us.</p>
    <p>This concert wasn’t just a milestone for BINI—it was a celebration of the bond they’ve built with their fans. It was a reminder of how far they’ve come and a preview of how much further they’re going.</p>
    <p>For everyone who was lucky enough to be there, the Grand BINIverse was more than a performance—it was a memory that will last forever. And for those of us who continue to support from wherever we are, one thing is clear: BINI is only getting started, and we’ll be right here for the journey.</p>`
  ),
  new BlogPost(
    1,
    "From Dreams to Dome: BINI Opens World Tour at Philippine Arena",
    `<p><img src="/images/biniverse-phArena.jpg"></p>
    <p>February 15, 2025: a night Blooms won’t forget. BINI kicked off their Grand BINIverse World Tour with a historic sold-out show at the Philippine Arena—the largest indoor arena globally, with a capacity of 55,000. And they did it first, making them the first-ever Filipino act to sell it out.</p>
    <p>From the moment the lights dimmed, the energy was electric. The girls opened with a powerful rendition of “Salamin, Salamin”, backed by orchestral arrangements that set the tone for the evening . Throughout the night, BINI proved their stage prowess with a dynamic setlist blending fan favorites and fresh cuts, including the debut live performance of “Blink Twice”.</p>
    <p>Their stage production was nothing short of stunning. Crowd interaction was a highlight—members took mobile carts across the arena during “I Feel Good,” ensuring every Bloom felt seen. There were engaging duo performances, powerful dance routines, and heartfelt ballads that showcased each member’s unique talent.</p>
    <p>This concert wasn’t just about the numbers—it was a statement of BINI’s growth, talent, and connection with fans. The audience was treated to stunning visuals, memorable choreography, and moments that highlighted the group's authenticity and enthusiasm. The crowd, clearly moved, responded in kind with deafening cheers and waves of lightsticks.</p>
    <p>The Philippine Arena concert didn’t just start their world tour—it launched it. With this milestone, BINI has firmly staked their place not only in P-Pop, but on the global pop stage. It was a proud moment for Blooms everywhere, and a bold first step toward even bigger stages ahead.</p>`
  ),
  new BlogPost(
    2,
    "BINI Steals the Spotlight on the Wish USA Bus",
    `<p><img src="/images/bini-wishUSA.jpg"></p>
    <p>On June 16, 2025, BINI brought their unmistakable P‑Pop flair to Hollywood Boulevard, performing live on the iconic Wish USA Bus stationed near Amoeba Records. Flashing energy, tight vocals, and signature choreography filled the air</p>
    <p>Blending tight harmonies in that iconic orange-lit mobile stage, BINI showcased the kind of performance that's both polished and packed with heart. Despite the compact setup, their vocals soared and the energy was off-the-charts, bringing a fresh burst of P-pop to the iconic sidewalks of Los Angeles.</p>
    <p>Among the standout highlights were “Blink Twice” and “Shagidi,” both delivered with the fierce confidence fans have come to expect. The vocal precision of both tracks, paired with their undeniable stage presence, filled the compact space of the bus with energy and excitement—proving that even subtle movements and strong delivery can leave a lasting impact.</p>
    <p>What made the night unforgettable wasn’t just the music—it was the connection. Blooms lined Hollywood Blvd in full support, singing, cheering, and bringing that unmistakable fan energy to L.A.’s legendary streets. Even in a localized, mobile setup, BINI’s performance felt expansive—touching not just their Filipino-American fans, but introducing their sound to new listeners passing by.</p>
    <p>This Wish USA moment proves something exciting: BINI’s artistry transcends stages. They brought a polished, heartfelt performance to Hollywood’s iconic hub—and captivated everyone who stopped to watch.</p>
    <p>As BINI continues to make waves across the world, these little moments—like a soft summer night in Hollywood filled with music and community—become treasured memories in the growing story of the Biniverse.</p>`
  ),
];
const fashionArray = [
  new BlogPost(
    0,
    "Tropi-Cute! BINI's Crochet Outfits Are a Floral Summer Dream",
    `<p><img src="/images/fashion-crochet.jpeg"></p>
    <p>Blooms, let’s talk fashion—because BINI’s crochet ensembles during Grand Pantropiko Day were everything! The girls stepped onto the stage in beautifully crafted, summery crochet sets that perfectly matched the tropical vibes of “Pantropiko”. These outfits weren’t just stylish—they were a statement of Filipino style meets handcrafted charm.</p>
    <p>Designed by local label Cora and Cecilia, the crochet sets featured eye-catching florals in vibrant colors that complemented BINI’s energetic stage presence. According to brand owner Maricel Sombrio, it was BINI’s stylist Ica Villanueva who reached out looking for styles that captured summer’s playful mood—and Cora and Cecilia’s floral-forward aesthetic fit the vision perfectly.</p>
    <p>What makes these crochet pieces stand out? Aside from being super cute, they’re practical for our warm weather—the lightweight yarns are breathable and comfortable under the sun or stage lights. Plus the sets—tops and skirts—cost between ₱6,000 to ₱8,500 and take two to four weeks to craft, making them both chic and artisanal.</p>
    <p>By choosing a local brand, BINI didn’t just look stunning—they also supported Filipino craftsmanship. As Sombrio said, “It’s been an honor to work with BINI … Artists should do it more often so that they can help highlight Filipino craftsmanship or Filipino designers”.</p>
    <p>Whether it was Aiah, Colet, Gwen, Jhoanna, Maloi, Mikha, Sheena, or Stacey wearing it, each crochet set felt fresh, youthful, and authentic to the song’s summer theme. These outfits weren’t just fashion—they were part of the storytelling.</p>`
  ),
  new BlogPost(
    1,
    "Roll the Dice: BINI’s Bold Fashion for the Blink Twice Era",
    `<p><img src="/images/fashion-blinkTwice.jpg"></p>
    <p>BINI’s Blink Twice era is not just a sonic evolution—it’s a bold visual statement. When the music video dropped on February 13, 2025, fans were instantly captivated by the group’s new aesthetic direction. Styled with a blend of futuristic minimalism and bold femininity, the Blink Twice MV introduced a look that feels both elevated and unapologetically powerful. The video plays with the theme of duality, and that contrast is reflected in their outfits. In the pastel-toned clinic scenes, the members wear sleek, cropped silhouettes in soft shades, exuding calm and precision. These looks felt clean, clinical, and fashion-forward—like a sci-fi fantasy where girlhood meets control. But the real visual shift hits when the scene cuts to the dark, secret laboratory. Here, BINI stuns in striking magenta and burgundy pieces, bolder makeup, and sharper styling that references classic Latina glam. It’s dramatic, it’s confident, and it shows a completely different side of the group—more assertive, more grown, but still very much BINI.</p>
    <p>This evolution continued off-screen in their live performances. BINI stayed consistent with the Blink Twice look—sleek tailoring, structured silhouettes, and confident styling. Fans noticed how the girls balanced polish and playfulness in their performance outfits, opting for minimalist cuts with eye-catching details that aligned perfectly with the song’s message about self-assurance and boldness. It wasn’t about being flashy; it was about looking composed, empowered, and ready to take up space.</p>
    <p>The concept behind the styling wasn’t just aesthetic—it was intentional. Their outfits reflect that message clearly: they’re not dressing to impress others—they’re dressing to express confidence, maturity, and their identity as artists. From pastel minimalism to bold reds and tailored performance pieces, BINI’s Blink Twice fashion is an extension of the song itself—playful yet fierce, controlled yet expressive.</p>
    <p>As fans, we’ve watched BINI grow into their sound, and now we’re seeing them grow into their style. Blink Twice is a reminder that fashion doesn’t need to shout to make a statement. Sometimes, a clean silhouette, a well-placed pop of color, or a bold gaze is more than enough to say: “We’re here, and we know exactly who we are.” And just like the track, the visuals from this era invite us to embrace that same energy in our own way—whether it’s through our playlists or our closets.</p>`
  ),
  new BlogPost(
    2,
    "From Stage to Red Carpet: BINI’s Fashion Moment at the ABS-CBN Ball 2025",
    `<p><img src="/images/bini-abscbnball.jpg"></p>
    <p>BINI stepped onto the red carpet at the ABS‑CBN Ball 2025 and immediately turned heads with a group look that was as cohesive as it was glamorous. Each member showcased her own style—ranging from dreamy floor-length gowns to sultry two-piece ensembles—while harmonizing beautifully as a unit. Their longtime stylist, Ica Villanueva, clearly leaned into the event’s elegant theme, dressing them in eye-catching shades of pink and purple that played with textures like sparkle, floral accents, and feather-light silhouettes.</p>
    <p>One of the standout statements was made by Gwen, who stunned in a high-fashion two-piece featuring a sparkling cropped top and a voluminous flower-petal skirt—a look that landed her among Cosmo Philippines’ most memorable red carpet moments. Maloi and Mikha channeled mermaid-inspired drama with jeweled embellishments, sweetheart necklines, and curve-hugging cuts that lit up their personalities on the carpet. Aiah embodied ethereal beauty in a regal lavender gown with a flowing silhouette and subtle cutouts, giving off classic beauty queen energy. Stacey opted for a sparkly pink ensemble with petal detailing and a thigh-high slit, exuding modern romance and bold confidence. Colet’s strapless corset dress bubbled with floral patterns and dramatic thigh-slit tailoring, bringing both structure and drama. Sheena refreshed elegance with a sleek high-neck gown accentuated by delicate cutouts and a feather-weight sheath skirt. And Jhoanna graced the event in a classic, loosely curled, ball-gown style that suited her role as leader, radiating poise and sophistication.</p>
    <p>The fashion echoes didn’t go unnoticed. Michael Cinco’s couture from Dubai was a highlight, beautifully accentuating each member’s individuality while keeping them unmistakably united as a group. It’s rare to see eight personalities take center stage in one event and shine individually while remaining harmonized, but BINI managed it with flair and grace.</p>
    <p>Overall, BINI turned the ABS‑CBN Ball into their runway. They delivered red-carpet looks that were powerful, polished, and full of personality—each dress telling a story but all interwoven into a beautiful display of unity. It wasn’t just fashion—it was a statement: eight girls, eight styles, one unstoppable group.</p>`
  ),
];
const biniplusArray = [
  new BlogPost(
    0,
    "From Stage to Kuya’s House: BINI’s Jhoanna and Stacey Steal the Show",
    `<p><img src="/images/jhocey-pbb.jpg"></p>
    <p>When Jhoanna and Stacey stepped into the Pinoy Big Brother house in April 2025 as celebrity houseguests, they brought more than their star power—they brought authenticity, warmth, and a whole lot of laughs to every corner of the Big Brother universe.</p>
    <p>Mixing genuine warmth with playful energy, they took on games, chores, and late-night chats like old friends—with BINI charm all the way. From synchronized giggles to impromptu dance-offs in the living room, they proved their bond extends far beyond the stage.</p>
    <p>Jhoanna also connected deeply with quieter housemates, spending moments in heartfelt conversation and offering advice drawn from her experience as BINI’s leader. Meanwhile, Stacey bounced between playful goofiness and genuine insight, balancing levity with meaningful presence.</p>
    <p>For Blooms watching at home, watching Jhoanna and Stacey blend their bubbly personas into everyday life inside the house was a delight. They weren’t just celebrities dropping in—they were sisters, friends, teammates, and unforgettable personalities that fans will remember long after the confessional lights turned off. </p>`
  ),
];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    musicPosts: musicArray.slice(-3).reverse(),
    perfPosts: perfArray.slice(-3).reverse(),
    fashionPosts: fashionArray.slice(-3).reverse(),
    biniPlusPosts: biniplusArray.slice(-3).reverse(),
  });
});

app.get("/posts/:category/:id", (req, res) => {
  const { category, id } = req.params;
  let array;

  switch (category) {
    case "music":
      array = musicArray;
      break;
    case "performances":
      array = perfArray;
      break;
    case "fashion":
      array = fashionArray;
      break;
    case "biniPlus":
      array = biniplusArray;
      break;
    default:
      return res.status(404).send("Category not found");
  }

  const post = array.find((p) => p.id == id);
  if (post) {
    res.render("post.ejs", { post, category: category, id: id });
  } else {
    res.status(404).send("Post not found");
  }
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
})

app.post("/submit", (req, res) => {
  function blogPost (id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
  
  if (req.body.category === "Music") {
    musicArray.push(new blogPost(musicArray.length, req.body.title, req.body.content));
    console.log("Post received. Updated Music Array:", musicArray);
    console.log("Latest Post: Title - ", musicArray[musicArray.length - 1].title, "| Content - ", musicArray[musicArray.length - 1].content);
  } else if (req.body.category === "Performances") {
    perfArray.push(new blogPost(perfArray.length, req.body.title, req.body.content));
    console.log("Post received. Updated Performances Array:", perfArray);
  } else if (req.body.category === "Fashion & Concepts") {
    fashionArray.push(new blogPost(fashionArray.length, req.body.title, req.body.content));
    console.log("Post received. Updated Fashion & Concepts Array:", fashionArray);
  } else {
    biniplusArray.push(new blogPost(biniplusArray.length,req.body.title, req.body.content));
    console.log("Post received. Updated BINI+ Array:", biniplusArray);
  }
  
  res.render("compose.ejs", { showSuccess: true });
});

app.get("/music", (req, res) => {
  res.render("categoryPage.ejs", {
    title: "Music & Awards",
    posts: musicArray,
    category: "music",
  });
});

app.get("/performances", (req, res) => {
  res.render("categoryPage.ejs", {
    title: "Performances",
    posts: perfArray,
    category: "performances",
  });
});

app.get("/fashion", (req, res) => {
  res.render("categoryPage.ejs", {
    title: "Fashion & Concepts",
    posts: fashionArray,
    category: "fashion",
  });
});

app.get("/biniPlus", (req, res) => {
  res.render("categoryPage.ejs", {
    title: "BINI+",
    posts: biniplusArray,
    category: "biniPlus",
  });
});

app.get("/biniverse", (req, res) => {
  res.render("biniverse.ejs", {category: "biniverse" });
});

app.get("/edit/:category/:id", (req, res) => {
  const { category } = req.params;
  const id = Number(req.params.id); // <- This is the fix
console.log("Category:", category, "ID:", id);
  let array;
  if (category === "music") array = musicArray;
  else if (category === "performances") array = perfArray;
  else if (category === "fashion") array = fashionArray;
  else if (category === "biniPlus") array = biniplusArray;

  const post = array.find((p) => p.id === id); // now this should work!

  if (post) {
    res.render("edit.ejs", { post, category });
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/edit/:category/:id", (req, res) => {
  const { category, id } = req.params;
  const { title, content, category: newCategory } = req.body; // 'category' is the updated value from the form
console.log("Edit request for Category:", category, "ID:", id, "New Category:", newCategory, "New Title:", title, "New Content:", content);
  // Normalize
  let currentCategory = category.toLowerCase();
  let targetCategory = newCategory.toLowerCase();
  const postId = parseInt(id);
console.log("before Current Category:", currentCategory, "beforeTarget Category:", targetCategory, "Post ID:", postId);
  if (targetCategory === "fashion & concepts") {
    targetCategory = "fashion";
  } else if (targetCategory === "bini+") {
    targetCategory = "biniPlus";
  }
  if (currentCategory === "biniplus") {
    currentCategory = "biniPlus";
  } else if (currentCategory === "fashion & concepts") {
    currentCategory = "fashion";
  }

console.log("Current Category:", currentCategory, "Target Category:", targetCategory, "Post ID:", postId);

  // Map category to array
  const categoryMap = {
    music: musicArray,
    performances: perfArray,
    fashion: fashionArray,
    biniPlus: biniplusArray,
  };

  let currentArray = categoryMap[currentCategory];
  let newArray = categoryMap[targetCategory];
console.log("Current Array:", currentArray, "New Array:", newArray);

  if (!currentArray || !newArray)
    return res.status(400).send("Invalid category");

  // Find the post in the current category
  const postIndex = currentArray.findIndex((p) => p.id === postId);
  console.log("Post Index:", postIndex);
  if (postIndex === -1) return res.status(404).send("Post not found");

  const post = currentArray.splice(postIndex, 1)[0]; // remove from current category
  post.title = title;
  post.content = content;

  // If category changed, update the post ID to avoid conflict
  if (currentArray !== newArray) {
    // assign a new ID (increment based on last ID in new category)
    const newId =
      newArray.length > 0 ? newArray[newArray.length - 1].id + 1 : 0;
    post.id = newId;
  }

  newArray.push(post);

  // Redirect to the updated post
  res.redirect(`/posts/${targetCategory}/${post.id}`);
});


app.post("/delete/:category/:id", (req, res) => {
  const { category, id } = req.params;
  const postId = parseInt(id);

  let array;
  if (category === "music") array = musicArray;
  else if (category === "performances") array = perfArray;
  else if (category === "fashion") array = fashionArray;
  else if (category === "biniPlus") array = biniplusArray;

  const index = array.findIndex((p) => p.id === postId);

  if (index !== -1) {
    array.splice(index, 1);
    res.redirect("/#" + category);
  } else {
    res.status(404).send("Post not found");
  }
});





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
  