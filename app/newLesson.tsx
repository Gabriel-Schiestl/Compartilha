import Form from "@/components/form";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function NewLesson() {


    return (
        <View>
            <View className="flex items-center">
                <Form title='Título da aula' description='Descrição'></Form>
                <TextInput placeholder="Link do conteúdo" className="mb-1 rounded-md pl-2 w-2/3 h-10 border"></TextInput>
                <View className="flex items-start w-2/3"><Text className="text-start text-blue-500">+ Adicionar Conteúdo</Text></View>
                <View className="flex items-start w-2/3 my-4"><Text className="text-start text-xl">Materiais extras:</Text></View>
                <View className="flex items-start w-2/3 flex-row gap-[4%] mb-2">
                    <TextInput className="mb-1 rounded-md pl-2 w-[80%] h-10 border"></TextInput>
                    <TextInput className="mb-1 rounded-md pl-2 w-[15%] h-10 border">
                        <Ionicons name="file-tray" size={24} color={'#000'} />
                    </TextInput>
                </View>
                <View className="flex items-start w-2/3 flex-row gap-[4%]">
                    <TextInput className="mb-1 rounded-md pl-2 w-[80%] h-10 border"></TextInput>
                    <TextInput className="mb-1 rounded-md pl-2 w-[15%] h-10 border">
                        <Ionicons name="file-tray" size={24} color={'#000'} />
                    </TextInput>
                </View>
            </View>
            <Link href='/newLesson' asChild>
                <TouchableOpacity className="bg-primary p-3 rounded-md mt-6 mx-6">
                    <Text className="text-white text-center font-bold text-xl">Cadastrar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}