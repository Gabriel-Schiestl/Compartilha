import { ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { useTrainingsStore } from "@/store/trainings-store";

export default function List() {

    const {trainings} = useTrainingsStore();

    return (
        <ScrollView>
            <View className="w-full flex flex-row justify-between mt-6">
            <Text>Nome</Text>
            <Text>Descrição</Text>
            <Text>Cargos</Text>
            </View>
            {trainings.map((training, index) => (
                <View key={index} className="w-full flex flex-row justify-between mt-6">
                    <Text>{training.name}</Text>
                    <Text>{training.description}</Text>
                    {training.roles.map(() => {
                        return <Text key={index}>{training.roles}</Text>;
                    })}
                </View>
            ))}
        </ScrollView>
    )
}