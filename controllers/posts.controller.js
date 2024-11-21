const sqlite = require("sqlite3");

const db = new sqlite.Database(
  "./db/posts.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) throw err;
  }
);

const allPosts = (req, res) => {
  db.all("SELECT * FROM post", [], (err, posts) => {
    if (err) throw err;
    res.status(200).json(posts);
  });
};

const createPost = (req, res) => {
  const { title, post } = req.body;
  db.run("INSERT INTO post(title, post) VALUES(?, ?)", [title, post], (err) => {
    if (err) throw err;
    res.status(201).json("Add post successfully");
  });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM post WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.status(200).json("Delete post successfully");
  });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, post } = req.body;
  db.run(
    "UPDATE post SET title = ?, post = ? WHERE id = ?",
    [title, post, id],
    (err) => {
      if (err) throw err;
      res.status(200).json("Update post successfully");
    }
  );
};
module.exports = {
  allPosts,
  createPost,
  deletePost,
  updatePost,
};
