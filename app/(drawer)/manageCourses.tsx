
import { useTrainingsStore } from "@/store/trainings-store";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import 'nativewind'
import List from "@/components/list";
import { Link } from "expo-router";


export default function ManageCourses() {

    return (
        <View className="flex w-full h-full box-border">
            <View className="flex items-end p-4">
                <Link href='/newCourse' asChild>
                    <TouchableOpacity className="bg-primary p-3 rounded-md">
                        <Text className="text-white">Novo curso</Text>
                    </TouchableOpacity>
                </Link>
                <List></List>
            </View>
        </View>
    )
}