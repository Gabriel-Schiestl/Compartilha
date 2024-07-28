import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";


export default function Course() {


    return (
        <>
        <Link href="/newCourse" asChild>
        <Pressable>
        <View className="flex flex-col w-full h-full items-center">
            <View className="bg-gray-500 w-full h-1/3"><Text>Div VideoPlayer</Text></View>
            <View className="bg-gray-200 w-full h-1/3"><Text>Conteudo</Text></View>
            <View className="bg-zinc-700 w-full h-full"><Text>Div MapaCurso</Text></View>
        </View>
        </Pressable>
        </Link>
        </>
    )
}