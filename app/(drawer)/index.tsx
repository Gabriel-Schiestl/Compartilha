import { Card } from '@/components/card';
import { useTrainingsStore } from '@/store/trainings-store';
import { Image, Platform, View, Text, Pressable } from 'react-native';
import 'nativewind'
import { Link } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {

  const { trainings } = useTrainingsStore();

  return (
    <View className='flex w-full h-full box-border flex-wrap p-6 items-center'>

      <Card id={trainings.length} title='Olá' description='Teste' image={require("../../assets/images/download.png")}></Card>
    </View>
  )
}
