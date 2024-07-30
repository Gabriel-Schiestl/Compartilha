import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
import { Link } from "expo-router";
import { useTrainingsStore } from "@/store/trainings-store";
import Ionicons from "@expo/vector-icons/Ionicons";
import VideoPlayer from "@/components/videoPlayer";

export default function Course() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [openedModules, setOpenedModules] = useState<{
    [key: number]: boolean;
  }>({});
  const { trainings } = useTrainingsStore();

  const handleClick = () => {
    setIsMapOpen(!isMapOpen);
  };

  const handleModuleClick = (index: number) => {
    setOpenedModules((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <View className="flex flex-col w-full h-full items-center">
        <View className="flex flex-row items-center justify-center px-1 py-2">
          <View className="flex-1">
            <Text>{trainings[0].name}</Text>
          </View>
          <TouchableOpacity
            onPress={handleClick}
            className="bg-zinc-300 rounded-full w-6 h-6 flex justify-center items-center"
          >
            <Ionicons name="arrow-forward" size={16} />
          </TouchableOpacity>
        </View>

        <View className="bg-gray-500 w-full h-1/3">
          <VideoPlayer/>
        </View>
        <View className="bg-gray-200 w-full h-full p-5">
          <View className="flex justify-center border-b-[.5px] mb-1">
            <Text className="mb-2 font-bold text-zinc-700 text-lg">
              {trainings[0].modules[0].lessons[0].lesson?.title}
            </Text>
          </View>
          <View className="flex justify-center border-b-[.5px] mb-3">
            <Text className="font-bold mb-1 text-zinc-700">Descrição:</Text>
            <Text className="mb-1 text-zinc-600">
              {trainings[0].modules[0].lessons[0].lesson?.description}
            </Text>
          </View>
          <Text className="font-bold mb-2 text-zinc-700">
            Materiais extras:
          </Text>
          <View className="flex flex-row gap-3">
            {trainings[0].modules[0].lessons[0].lesson?.extraMaterials.map(
              (material, index) => {
                return (
                  <Link href={material.url} asChild key={index}>
                    <Text className="border border-zinc-400 text-zinc-500 rounded-full flex flex-row justify-center items-center py-1 px-3">
                      {material.placeholder}
                    </Text>
                  </Link>
                );
              }
            )}
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isMapOpen}
        onRequestClose={() => setIsMapOpen(false)}
      >
        <View className="flex-1 bg-black bg-opacity-50 justify-center items-center">
          <View className="w-full h-full bg-white rounded-lg">
            <TouchableOpacity
              onPress={handleClick}
              className="flex flex-row justify-between items-center bg-primary p-2"
            >
              <Ionicons name="arrow-back" size={16} color={"#FFF"} />
              <Text className="text-white text-xl">{trainings[0].name}</Text>
            </TouchableOpacity>
            {trainings[0].modules.map((module, index) => (
              <View key={index} className="">
                <Text
                  onPress={() => handleModuleClick(index)}
                  className={`p-2 text-base ${
                    openedModules[index] ? "bg-zinc-200" : "bg-white"
                  }`}
                >
                  {module.name}
                </Text>
                {openedModules[index] ? (
                  <View className="px-5 py-1">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <View key={lessonIndex}>
                        {lesson.lesson ? (
                          <View>
                            <Text className="text-base">
                              {lesson.lesson?.title}
                            </Text>
                          </View>
                        ) : null}
                        {lesson.questions ? (
                          <View>
                            <Text>{lesson.questions?.title}</Text>
                          </View>
                        ) : null}
                      </View>
                    ))}
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}
