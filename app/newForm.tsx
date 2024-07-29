import Form from "@/components/form";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function NewForm() {


    return (
        <View>
            <View>
                <Form question='Questão:'></Form>
                <View className="flex items-center">
                    <Text className="text-2xl text-start w-2/3">Alternativas:</Text>
                </View>
                <Form a='Alternativa A' b='Alternativa B' c='Alternativa C' d='Alternativa D' e='Alternativa E'></Form>
            </View>
            <Link href='/newLesson' asChild>
                <TouchableOpacity className="bg-primary p-3 rounded-md mt-6 mx-6">
                    <Text className="text-white text-center font-bold text-xl">Cadastrar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}