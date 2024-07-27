import { Card } from '@/components/card';
import { useTrainingsStore } from '@/store/trainings-store';
import { Image, Platform, View, Text } from 'react-native';

export default function HomeScreen() {

  const { trainings } = useTrainingsStore();

  return (
    <View className='flex w-full h-full box-border flex-wrap p-6 justify-center items-center'>
      <Card id={trainings.length} title='Olá' description='Teste' image='https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg'></Card>
    </View>
  )
}
