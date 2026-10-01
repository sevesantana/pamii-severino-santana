# To-do List: "REST API" vs API RESTful

Atividade prática para **visualizar as diferenças** entre uma API que apenas usa HTTP + JSON
(o que muita gente chama de "REST") e uma API que realmente segue as restrições do **REST**
(RESTful). As duas implementam a **mesma to-do list** (criar, listar, buscar, editar, concluir
e remover tarefas), com dados em memória, em Node.js + Express.

```
todo-rest-vs-restful/
├── README.md
├── rest-api/        → estilo "REST" informal (RPC sobre HTTP)  — porta 3001
└── restful-api/     → estilo RESTful                           — porta 3002
```

## Como executar

Requisitos: **Node.js 18+** e npm.

Em dois terminais separados:

```bash
# Terminal 1 — API "REST" informal (porta 3001)
cd rest-api
npm install
npm start

# Terminal 2 — API RESTful (porta 3002)
cd restful-api
npm install
npm start
```

> Os dados ficam em memória: ao reiniciar o servidor, a lista é zerada.

## Testando lado a lado (curl)

Em cada passo, o mesmo objetivo é feito nas duas APIs.

**1. Criar tarefa**
```bash
# REST informal
curl -i -X POST localhost:3001/createTask -H "Content-Type: application/json" -d '{"title":"Estudar REST"}'

# RESTful
curl -i -X POST localhost:3002/tasks -H "Content-Type: application/json" -d '{"title":"Estudar REST"}'
```
Observe: a RESTful responde `201 Created` com o cabeçalho `Location` e links `_links`.

**2. Listar tarefas**
```bash
curl -i localhost:3001/getTasks
curl -i localhost:3002/tasks
curl -i "localhost:3002/tasks?completed=false"     # filtro via query string
```

**3. Buscar uma tarefa**
```bash
curl -i -X POST localhost:3001/getTask -H "Content-Type: application/json" -d '{"id":1}'
curl -i localhost:3002/tasks/1
```

**4. Atualizar**
```bash
curl -i -X POST localhost:3001/updateTask -H "Content-Type: application/json" -d '{"id":1,"title":"Novo título"}'
curl -i -X PUT  localhost:3002/tasks/1 -H "Content-Type: application/json" -d '{"title":"Novo título","completed":false}'
```

**5. Concluir**
```bash
curl -i -X POST  localhost:3001/completeTask -H "Content-Type: application/json" -d '{"id":1}'
curl -i -X PATCH localhost:3002/tasks/1 -H "Content-Type: application/json" -d '{"completed":true}'
```

**6. Remover**
```bash
curl -i -X POST   localhost:3001/deleteTask -H "Content-Type: application/json" -d '{"id":1}'
curl -i -X DELETE localhost:3002/tasks/1
```

**7. Provocar um erro (o mais revelador!)**
```bash
curl -i -X POST localhost:3001/getTask -H "Content-Type: application/json" -d '{"id":999}'
curl -i localhost:3002/tasks/999
```
- REST informal: `HTTP 200 OK` + `{"success": false, ...}` — o erro está escondido no corpo.
- RESTful: `HTTP 404 Not Found` — o próprio protocolo informa o erro.

**8. Descobrir a API (HATEOAS)**
```bash
curl localhost:3002/
```
Só a RESTful responde com links que indicam o que fazer em seguida.

## Endpoints

### `rest-api` (porta 3001)
| Ação | Requisição |
|---|---|
| Listar | `GET /getTasks` |
| Buscar | `POST /getTask` `{ "id": 1 }` |
| Criar | `POST /createTask` |
| Atualizar | `POST /updateTask` |
| Concluir | `POST /completeTask` |
| Remover | `POST /deleteTask` |

### `restful-api` (porta 3002)
| Ação | Requisição | Sucesso |
|---|---|---|
| Entrada da API | `GET /` | 200 |
| Listar | `GET /tasks` (`?completed=true`) | 200 |
| Buscar | `GET /tasks/:id` | 200 |
| Criar | `POST /tasks` | 201 + `Location` |
| Substituir | `PUT /tasks/:id` | 200 |
| Atualizar parcial / concluir | `PATCH /tasks/:id` | 200 |
| Remover | `DELETE /tasks/:id` | 204 |

## Principais diferenças

| Aspecto | "REST" informal | RESTful |
|---|---|---|
| **URLs** | Verbos/ações (`/createTask`) | Recursos/substantivos (`/tasks/1`) |
| **Métodos HTTP** | Quase tudo `POST` (e `GET` para listar) | `GET`, `POST`, `PUT`, `PATCH`, `DELETE` com semântica própria |
| **Onde vai o ID** | No corpo da requisição | Na URL (`/tasks/1`) |
| **Status codes** | Sempre `200`; erro vai no corpo (`success: false`) | `201`, `204`, `400`, `404`, `422`... |
| **Formato de erro** | Formato próprio da aplicação | `application/problem+json` (RFC 7807) |
| **Criação de recurso** | Devolve o objeto | `201` + cabeçalho `Location` |
| **Filtros** | Normalmente inexistentes / no corpo | Query string (`?completed=true`) |
| **HATEOAS** | Não possui | Respostas trazem `_links` com as ações possíveis |
| **Cache/idempotência** | Não aproveita o HTTP (tudo `POST`) | `GET`, `PUT` e `DELETE` são idempotentes; `GET` é cacheável |
| **Descoberta** | Precisa ler a documentação | Navegável a partir de `GET /` |

## Por que isso importa?

- **Previsibilidade:** quem conhece HTTP já sabe usar a API RESTful sem ler muito.
- **Infraestrutura:** proxies, caches, gateways e ferramentas de monitoramento entendem métodos e status codes.
- **Tratamento de erros:** clientes checam o status HTTP em vez de interpretar um formato customizado.
- **Evolução:** com HATEOAS, o cliente segue links em vez de montar URLs fixas.

> Nota: o termo "REST API" é usado no dia a dia para qualquer API HTTP+JSON. Aqui, "REST informal"
> designa o estilo RPC sobre HTTP, e "RESTful" designa a que respeita as restrições de Roy Fielding.
> Na prática, muitas APIs ficam no meio do caminho (recursos e verbos corretos, mas sem HATEOAS).
