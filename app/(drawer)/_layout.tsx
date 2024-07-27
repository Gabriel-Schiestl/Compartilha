import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Pressable, View } from 'react-native';
import { useNavigation, Redirect } from 'expo-router';
import 'nativewind'
import { Card } from '@/components/card';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const options = {
    drawerLabel: 'Início',
    headerTitle: () =>
      <Image source={require('../../assets/images/download.png')}
        resizeMode='contain'
        className='w-48'
      />,
    headerStyle: {
      backgroundColor: '#008D53',
    },
  }

  return (
    <GestureHandlerRootView className='flex-1'>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={options}
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
