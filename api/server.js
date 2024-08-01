const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const server = express();
const host = "http://localhost";
const port = 4435;

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// POST
server.post("/accounts/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO accounts VALUES(id, ?,?,?,?,?,?,?,?,?)",
    [
      task.fname,
      task.mname,
      task.lname,
      task.age,
      task.sex,
      task.civilstatus,
      task.occupation,
      task.birthday,
      task.role,
    ]
  );

  console.log(data);
});

server.post("/accounts/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM accounts WHERE id=? OR fname=? OR mname=? OR lname=?",
    [task.id, task.fname, task.mname, task.lname]
  );

  res.send(data);
});

server.post("/residents/post", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "INSERT INTO residents VALUES(id, ?,?,?,?,?,?,?,?)",
    [
      task.fname,
      task.mname,
      task.lname,
      task.age,
      task.sex,
      task.civilstatus,
      task.occupation,
      task.birthday,
    ]
  );

  console.log(data);
});

server.post("/residents/search", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "SELECT * FROM residents WHERE id=? OR fname=? OR mname=? OR lname=?",
    [task.id, task.fname, task.mname, task.lname]
  );

  res.send(data);
});

server.post("/accounts/delete", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("DELETE FROM accounts  WHERE id=?", [
    task.id,
  ]);
  console.log(data);
});

server.post("/residents/delete", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("DELETE FROM residents WHERE id=?", [
    task.id,
  ]);
  console.log(data);
});

// GET
server.get("/accounts/order/id", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM accounts", [task.id]);
  res.send(data);
});

server.get("/residents/order/id", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query("SELECT * FROM residents", [task.id]);
  res.send(data);
});

// PUT
server.put("/accounts/edit", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE accounts SET fname=?, mname=?, lname=?, age=?, sex=?, civilstatus=?, occupation=?, birthday=? WHERE id=?",
    [
      task.fname,
      task.mname,
      task.lname,
      task.age,
      task.sex,
      task.civilstatus,
      task.occcupation,
      task.birthday,
      task.id,
    ]
  );

  res.send(data);
});

server.put("/residents/edit", async (req, res) => {
  const task = req.body;
  const data = await db.pool.query(
    "UPDATE residents SET fname=?, mname=?, lname=?, age=?, sex=?, civilstatus=?, occupation=?, birthday=? WHERE id=?",
    [
      task.fname,
      task.mname,
      task.lname,
      task.age,
      task.sex,
      task.civilstatus,
      task.occcupation,
      task.birthday,
      task.id,
    ]
  );

  res.send(data);
});

server.listen(port, () =>
  console.log(`API server are now running at ${host}:${port}...`)
);
