import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";

interface CardProps {
    id: number;
    title: string;
    image: ImageSourcePropType;
    description: string;
}

export const Card = (props: CardProps) => {
    return (
        <Link href='/course' asChild className='w-full h-full'>
            <Pressable>
                <View className="w-full h-full">
                    <View className='bg-primary w-full h-[50%] rounded-lg flex justify-center p-4 mb-4'>
                        <View className="flex items-center justify-center p-4 bg-white rounded-lg overflow-hidden relative">
                            <Image
                                source={props.image}
                                className='w-full h-48'
                                resizeMode='contain'
                            />
                            <View className='absolute w-10 h-10 bg-gray-500 top-25 left-50 rounded-full opacity-70 flex justify-center items-center'><Ionicons name="play" size={16} className="text-white" /></View>
                        </View>
                        <Text className='text-white text-2xl mt-3'>{props.title}</Text>
                        <Text className='text-white text-base mt-3'>{props.description}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>

    );
};