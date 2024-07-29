import Form from "@/components/form";
import { useTrainingsStore } from "@/store/trainings-store";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState, useRef } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View, TextInput } from "react-native";

interface Module {
    name: string;
}

export default function NewCourse() {
    const [newModule, setNewModule] = useState('');
    const [modules, setModules] = useState<Module[]>([]);
    const [createModule, setCreateModule] = useState(false);

    const addModule = () => {
        setCreateModule(false);
        if (!modules) return;
        setModules([...modules, { name: newModule }]);
        setNewModule('');
    }

    return (
        <View className="w-full h-full">
            <Form name='Nome do curso' description='Descrição' />
            <View className="w-full flex flex-row justify-between px-8 mt-12">
                <Text className="text-2xl">Módulos:</Text>
                <Pressable onPress={() => setCreateModule(true)}>
                    <Text className="text-2xl">+</Text>
                </Pressable>
            </View>
            <View className="mt-4 flex justify-start px-8">
                {modules && modules.map((module, index) => (
                    <View key={index} className="bg-primary w-full p-3 rounded-lg flex flex-row justify-between mb-4">
                        <TextInput
                            value={module.name}
                            onChangeText={(text) => {
                                const newModules = [...modules];
                                newModules[index].name = text;
                                setModules(newModules);
                            }}
                            className="text-xl text-white"
                        />
                        <Ionicons name="arrow-forward" size={24} color={'#FFFF'} />
                    </View>
                ))}
                {createModule && (
                    <View className="bg-primary w-full p-3 rounded-lg flex flex-row justify-between mb-4">
                        <TextInput
                            value={newModule}
                            onChangeText={(text) => setNewModule(text)}
                            placeholder="Novo módulo"
                            className="text-xl text-white"
                            onEndEditing={addModule}
                        />
                        <Ionicons name="arrow-forward" size={24} color={'#FFFF'} />
                    </View>
                )}
                <Link href='/newForm' asChild>
                    <TouchableOpacity className="bg-primary p-3 rounded-md mt-6">
                        <Text className="text-white text-center font-bold text-xl">Cadastrar</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View >
    );
}