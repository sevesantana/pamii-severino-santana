import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import TodoListScreen from './screens/TodoListScreen';

export default function App() {
  return (
    // GluestackUIProvider fornece o tema e os tokens de design
    // para todos os componentes do gluestack-ui usados no app.
    <GluestackUIProvider config={config}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <TodoListScreen />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
