import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'Gerenciar cursos',
          }}
        />
        <Drawer.Screen
          name="explore"
          options={{
            drawerLabel: 'Gerenciar cursos',
            title: 'Gerenciar cursos',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
