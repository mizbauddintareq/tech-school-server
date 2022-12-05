const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Courses Data
const courses = require("./data/courses.json");

// Blogs Data
const blogs = require("./data/blogs.json");

// Test API
app.get("/", (req, res) => {
  res.send("hello from the server");
});

// Get All Courses API
app.get("/courses", (req, res) => {
  res.send(courses);
});

// Get Single Courses API
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((course) => course.id === id);
  res.send(course);
});

// Private Route API
app.get("/premium/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((course) => course.id === id);
  res.send(course);
});

// Get All Blogs API
app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
