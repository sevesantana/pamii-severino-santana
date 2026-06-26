import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { Plus } from 'lucide-react-native';

import TodoItem from '../components/TodoItem';

let nextId = 1;

export default function TodoListScreen() {
  const [todos, setTodos] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleAddTodo() {
    const trimmed = newTaskText.trim();
    if (trimmed.length === 0) return;

    setTodos((prev) => [
      ...prev,
      { id: nextId++, text: trimmed, done: false },
    ]);
    setNewTaskText('');
  }

  function handleToggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(id, newText) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }

  const pendingCount = todos.filter((t) => !t.done).length;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Box flex={1} bg="$backgroundLight0" safeAreaTop px="$4" pt="$6">
        <VStack space="md" flex={1}>
          <Heading size="2xl">Minhas tarefas</Heading>
          <Text color="$textLight500">
            {pendingCount} tarefa(s) pendente(s)
          </Text>

          {/* Linha para adicionar nova tarefa: Input + Button do gluestack-ui */}
          <HStack space="sm" alignItems="center">
            <Input flex={1} variant="outline" size="md">
              <InputField
                placeholder="Digite uma nova tarefa..."
                value={newTaskText}
                onChangeText={setNewTaskText}
                onSubmitEditing={handleAddTodo}
                returnKeyType="done"
              />
            </Input>
            <Button size="md" variant="solid" action="primary" onPress={handleAddTodo}>
              <ButtonIcon as={Plus} />
              <ButtonText ml="$1">Adicionar</ButtonText>
            </Button>
          </HStack>

          <FlatList
            data={todos}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ paddingTop: 8, paddingBottom: 24 }}
            renderItem={({ item }) => (
              <TodoItem
                todo={item}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
                onEdit={handleEditTodo}
              />
            )}
            ListEmptyComponent={
              <Box mt="$8" alignItems="center">
                <Text color="$textLight400">
                  Nenhuma tarefa ainda. Adicione a primeira acima!
                </Text>
              </Box>
            }
          />
        </VStack>
      </Box>
    </KeyboardAvoidingView>
  );
}
