# Todo List — Expo + React Native + gluestack-ui

App de lista de tarefas (to-do list) feito com **Expo / React Native**, com
criar, concluir, editar e excluir tarefas, e 3 componentes interativos do
**gluestack-ui**.

## Componentes do gluestack-ui usados

| Componente | Onde é usado | Para quê |
|---|---|---|
| `Checkbox` | `components/TodoItem.js` | Marcar a tarefa como concluída/pendente |
| `Input` | `screens/TodoListScreen.js` e `components/TodoItem.js` | Digitar nova tarefa e editar tarefa existente |
| `Button` | `screens/TodoListScreen.js` e `components/TodoItem.js` | Adicionar, editar/salvar e excluir tarefas |

Nenhum dos três é puramente de layout — todos disparam uma ação real no app.

## Estrutura do projeto

```
todo-app/
├── App.js                     # Provider do gluestack-ui (GluestackUIProvider)
├── app.json                   # Configuração do Expo
├── babel.config.js
├── package.json
├── screens/
│   └── TodoListScreen.js      # Tela principal (lista + criação de tarefas)
└── components/
    └── TodoItem.js            # Item da lista (concluir / editar / excluir)
```

## Como rodar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o projeto com o Expo:

   ```bash
   npx expo start
   ```

3. Abra no celular com o app **Expo Go** (escaneando o QR code) ou pressione
   `w` no terminal para abrir no navegador, `a` para Android ou `i` para iOS
   (precisa de simulador configurado).

## Funcionalidades

- ✅ Criar uma nova tarefa (campo de texto + botão "Adicionar")
- ✅ Marcar/desmarcar tarefa como concluída (Checkbox, com texto tachado)
- ✅ Editar o texto de uma tarefa existente (botão de editar → Input → botão salvar)
- ✅ Excluir uma tarefa (botão de excluir)
- ✅ Contador de tarefas pendentes
- ✅ Estado vazio quando não há tarefas

## Observações técnicas

- Usei o pacote **`@gluestack-ui/themed`** junto com **`@gluestack-ui/config`**,
  que é a forma mais simples de integrar o gluestack-ui em um projeto Expo
  (não exige configurar Tailwind/NativeWind).
- O estado das tarefas é mantido em memória com `useState` (não persiste ao
  fechar o app). Se quiser persistência, dá pra adicionar
  `@react-native-async-storage/async-storage` facilmente.
- Ícones vêm do `lucide-react-native`.
