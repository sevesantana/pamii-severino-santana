import React, { useState } from 'react';
import {
  HStack,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Input,
  InputField,
  Button,
  ButtonIcon,
  Text,
} from '@gluestack-ui/themed';
import { Edit3, Trash2, Save } from 'lucide-react-native';

/**
 * Item individual da lista de tarefas.
 *
 * Componentes do gluestack-ui usados aqui:
 * 1) Checkbox  -> marcar a tarefa como concluída
 * 2) Button    -> ações de editar / salvar / excluir
 * 3) Input     -> campo de edição do texto da tarefa
 */
export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(todo.text);

  function handleSave() {
    const trimmed = draftText.trim();
    if (trimmed.length > 0) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  }

  function handleCancelOrStartEdit() {
    if (isEditing) {
      setDraftText(todo.text);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  return (
    <HStack
      bg="$backgroundLight50"
      borderRadius="$lg"
      borderWidth={1}
      borderColor="$borderLight200"
      px="$3"
      py="$3"
      mb="$2"
      alignItems="center"
      space="sm"
    >
      {/* Checkbox do gluestack-ui para concluir a tarefa */}
      <Checkbox
        value={String(todo.id)}
        isChecked={todo.done}
        onChange={() => onToggle(todo.id)}
        aria-label={`Marcar tarefa ${todo.text} como concluída`}
        size="md"
      >
        <CheckboxIndicator mr="$0">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel />
      </Checkbox>

      {isEditing ? (
        // Input do gluestack-ui para editar o texto da tarefa
        <Input flex={1} variant="underlined" size="md">
          <InputField
            value={draftText}
            onChangeText={setDraftText}
            autoFocus
            placeholder="Edite a tarefa..."
            onSubmitEditing={handleSave}
          />
        </Input>
      ) : (
        <HStack flex={1}>
          <Text
            sx={{
              textDecorationLine: todo.done ? 'line-through' : 'none',
              color: todo.done ? '$textLight400' : '$textLight900',
              fontSize: '$md',
            }}
          >
            {todo.text}
          </Text>
        </HStack>
      )}

      {isEditing ? (
        // Button do gluestack-ui para salvar a edição
        <Button size="sm" variant="solid" action="positive" onPress={handleSave}>
          <ButtonIcon as={Save} />
        </Button>
      ) : (
        // Button do gluestack-ui para iniciar a edição
        <Button size="sm" variant="outline" action="secondary" onPress={handleCancelOrStartEdit}>
          <ButtonIcon as={Edit3} />
        </Button>
      )}

      {/* Button do gluestack-ui para excluir a tarefa */}
      <Button size="sm" variant="solid" action="negative" onPress={() => onDelete(todo.id)}>
        <ButtonIcon as={Trash2} />
      </Button>
    </HStack>
  );
}
