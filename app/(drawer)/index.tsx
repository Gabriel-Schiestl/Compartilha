import { Card } from '@/components/card';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Card title='Olá' description='Teste' image='Oi'></Card>
    </View>
  )
}
