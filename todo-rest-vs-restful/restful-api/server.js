/**
 * TO-DO LIST — API RESTful
 *
 * Características deste estilo:
 *  - A URL identifica RECURSOS (substantivos): /tasks, /tasks/:id
 *  - O MÉTODO HTTP define a ação: GET, POST, PUT, PATCH, DELETE
 *  - Códigos de status HTTP significativos (201, 204, 400, 404, 422...)
 *  - Cabeçalho Location ao criar recursos
 *  - HATEOAS: respostas trazem links (_links) para navegar pela API
 */
const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];
let nextId = 1;

const BASE = (req) => `${req.protocol}://${req.get("host")}`;

// Adiciona os links HATEOAS a uma tarefa
const withLinks = (req, task) => ({
  ...task,
  _links: {
    self: { href: `${BASE(req)}/tasks/${task.id}`, method: "GET" },
    update: { href: `${BASE(req)}/tasks/${task.id}`, method: "PUT" },
    partialUpdate: { href: `${BASE(req)}/tasks/${task.id}`, method: "PATCH" },
    delete: { href: `${BASE(req)}/tasks/${task.id}`, method: "DELETE" },
    collection: { href: `${BASE(req)}/tasks`, method: "GET" },
  },
});

// Erros no formato application/problem+json (RFC 7807)
const problem = (res, status, title, detail) =>
  res
    .status(status)
    .type("application/problem+json")
    .json({ status, title, detail });

const loadTask = (req, res, next) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return problem(res, 404, "Not Found", `Tarefa ${req.params.id} não existe`);
  req.task = task;
  next();
};

// Ponto de entrada: descobre o resto da API pelos links
app.get("/", (req, res) =>
  res.json({
    name: "To-do API (RESTful)",
    _links: { tasks: { href: `${BASE(req)}/tasks`, method: "GET" } },
  })
);

// GET /tasks  (aceita filtro ?completed=true|false)
app.get("/tasks", (req, res) => {
  let list = tasks;
  if (req.query.completed !== undefined) {
    list = list.filter((t) => String(t.completed) === req.query.completed);
  }
  res.status(200).json({
    total: list.length,
    items: list.map((t) => withLinks(req, t)),
    _links: {
      self: { href: `${BASE(req)}/tasks`, method: "GET" },
      create: { href: `${BASE(req)}/tasks`, method: "POST" },
    },
  });
});

// POST /tasks -> 201 Created + Location
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title || typeof title !== "string") {
    return problem(res, 422, "Unprocessable Entity", "O campo 'title' é obrigatório");
  }
  const task = {
    id: nextId++,
    title,
    description: description || "",
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  res.status(201).location(`${BASE(req)}/tasks/${task.id}`).json(withLinks(req, task));
});

// GET /tasks/:id
app.get("/tasks/:id", loadTask, (req, res) => res.json(withLinks(req, req.task)));

// PUT /tasks/:id -> substitui o recurso inteiro
app.put("/tasks/:id", loadTask, (req, res) => {
  const { title, description, completed } = req.body;
  if (!title || typeof completed !== "boolean") {
    return problem(res, 422, "Unprocessable Entity",
      "PUT exige representação completa: 'title' (string) e 'completed' (boolean)");
  }
  req.task.title = title;
  req.task.description = description || "";
  req.task.completed = completed;
  res.json(withLinks(req, req.task));
});

// PATCH /tasks/:id -> atualização parcial
app.patch("/tasks/:id", loadTask, (req, res) => {
  const { title, description, completed } = req.body;
  if (title !== undefined) req.task.title = title;
  if (description !== undefined) req.task.description = description;
  if (completed !== undefined) req.task.completed = completed;
  res.json(withLinks(req, req.task));
});

// DELETE /tasks/:id -> 204 No Content
app.delete("/tasks/:id", loadTask, (req, res) => {
  tasks = tasks.filter((t) => t.id !== req.task.id);
  res.status(204).send();
});

// JSON inválido -> 400
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return problem(res, 400, "Bad Request", "JSON inválido");
  }
  next(err);
});

// Rota inexistente -> 404
app.use((req, res) => problem(res, 404, "Not Found", "Recurso não existe"));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`API RESTful em http://localhost:${PORT}`));
