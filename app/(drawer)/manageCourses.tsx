import { Card } from "@/components/card";
import { useTrainingsStore } from "@/store/trainings-store";
import { Button, Text, TouchableOpacity, View } from "react-native";
import 'nativewind'
import List from "@/components/list";


export default function ManageCourses() {

    const { trainings } = useTrainingsStore();

    return (
        <View className="flex w-full h-full box-border">
            <View className="flex items-end p-4">
            <TouchableOpacity className="bg-primary p-3 rounded-md">
                <Text className="text-white">Novo curso</Text>
            </TouchableOpacity>
                <List></List>
            </View>
        </View>
    )
}