const express = require("express");
const postsController = require("../controllers/postsController");

const router = new express.Router();

// Add a new post
router.post("/", async (req, res) => {
    await postsController.Add(req, res);
});

// Show all posts
router.get("/", async (req, res) => {
    await postsController.All(req, res);
});

// Show a specific post
router.get("/:id", async (req, res) => {
    await postsController.Show(req, res);
});

// Update a specific post
router.put("/:id", async (req, res) => {
    await postsController.Update(req, res);
});

// Remove a specific post
router.delete("/:id", async (req, res) => {
    await postsController.Remove(req, res);
});

module.exports = router;