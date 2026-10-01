/**
 * TO-DO LIST — "REST API" informal (estilo RPC sobre HTTP)
 *
 * Características deste estilo (o que NÃO é RESTful):
 *  - A URL descreve AÇÕES (verbos): /createTask, /deleteTask...
 *  - Quase tudo é POST; o ID vai no corpo da requisição
 *  - Sempre responde 200 OK; o sucesso/erro está no corpo (success: true/false)
 *  - Sem links de navegação (HATEOAS)
 */
const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];
let nextId = 1;

const ok = (res, data, message = "Operação realizada com sucesso") =>
  res.status(200).json({ success: true, message, data });

// Note: erro também devolve 200!
const fail = (res, message) =>
  res.status(200).json({ success: false, message, data: null });

const findTask = (id) => tasks.find((t) => t.id === Number(id));

// Listar todas as tarefas
app.get("/getTasks", (req, res) => ok(res, tasks));

// Buscar uma tarefa (ID no corpo, via POST)
app.post("/getTask", (req, res) => {
  const task = findTask(req.body.id);
  if (!task) return fail(res, "Tarefa não encontrada");
  ok(res, task);
});

// Criar tarefa
app.post("/createTask", (req, res) => {
  const { title, description } = req.body;
  if (!title) return fail(res, "O campo 'title' é obrigatório");
  const task = {
    id: nextId++,
    title,
    description: description || "",
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  ok(res, task, "Tarefa criada");
});

// Atualizar tarefa
app.post("/updateTask", (req, res) => {
  const { id, title, description } = req.body;
  const task = findTask(id);
  if (!task) return fail(res, "Tarefa não encontrada");
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  ok(res, task, "Tarefa atualizada");
});

// Marcar como concluída (ação dedicada)
app.post("/completeTask", (req, res) => {
  const task = findTask(req.body.id);
  if (!task) return fail(res, "Tarefa não encontrada");
  task.completed = true;
  ok(res, task, "Tarefa concluída");
});

// Remover tarefa (POST em vez de DELETE)
app.post("/deleteTask", (req, res) => {
  const task = findTask(req.body.id);
  if (!task) return fail(res, "Tarefa não encontrada");
  tasks = tasks.filter((t) => t.id !== task.id);
  ok(res, null, "Tarefa removida");
});

// Rota inexistente: também 200
app.use((req, res) => fail(res, "Endpoint não existe"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`REST API (informal) em http://localhost:${PORT}`));
