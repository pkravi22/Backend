const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// ----------- Routes -----------

// Get all users
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: { blogs: true, posts: true },
  });
  res.json(users);
});

// Get all blogs
app.get("/blogs", async (req, res) => {
  const blogs = await prisma.blog.findMany({
    include: { author: true, posts: true },
  });
  res.json(blogs);
});

// Get all posts
app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { author: true, blog: true },
  });
  res.json(posts);
});

// Get all cards
app.get("/cards", async (req, res) => {
  const cards = await prisma.card.findMany();
  res.json(cards);
});

// Get a single card by ID
app.get("/cards/:id", async (req, res) => {
  const { id } = req.params;
  const card = await prisma.card.findUnique({ where: { id } });
  if (!card) return res.status(404).json({ error: "Card not found" });
  res.json(card);
});

// -----------------------------

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
