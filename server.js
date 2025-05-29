const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.json({ message: 'Todo added', todos });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
