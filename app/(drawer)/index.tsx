import { Card } from '@/components/card';
import { useTrainingsStore } from '@/store/trainings-store';
import { Image, Platform, View, Text, Pressable } from 'react-native';
import 'nativewind'
import { Link } from 'expo-router';

export default function HomeScreen() {

  const { trainings } = useTrainingsStore();

  return (
    <Link href='/course' asChild>
    <Pressable>
    <View className='flex w-full h-full box-border flex-wrap p-6 justify-center items-center'>
      <Card id={trainings.length} title='Olá' description='Teste' image={require("../../assets/images/download.png")}></Card>
    </View>
    </Pressable>
    </Link>
  )
}
