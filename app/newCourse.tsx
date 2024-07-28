import Form from "@/components/form";
import { Text, View } from "react-native";

export default function NewCourse() {
    return (
        <View className="w-full h-full">
            <Form name='Nome do curso' description='Descrição' />
            <View className="w-full flex flex-row justify-between px-8 mt-12">
                <Text className="text-2xl">Módulos:</Text>
                <Text className="text-2xl">+</Text>
            </View>
        </View>
    );
}