import { Card } from "@/components/card";
import { useTrainingsStore } from "@/store/trainings-store";
import { Button, Text, TouchableOpacity, View } from "react-native";


export default function ManageCourses() {

    const { trainings } = useTrainingsStore();

    return (
        <View className="flex w-full h-full box-border flex-wrap p-6">
            <TouchableOpacity style={{ backgroundColor: '#008D53', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 }}>
                <Text className="">Novo curso</Text>
            </TouchableOpacity>
            <View className="">
                {trainings.map((training) => (
                    <Card
                        id={training.id}
                        title={training.name}
                        description={training.description}
                        image={training.image ?? '../../assets/images/download.jpg'}
                    />
                ))}
            </View>
        </View>
    )
}