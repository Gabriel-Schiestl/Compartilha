import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import WarningCards, { WarningCardsOptions } from "./warningCards";

interface CardProps {
  id: number;
  title: string;
  image: ImageSourcePropType;
  description: string;
}

export const Card = (props: CardProps) => {
  return (
    <Link href="/course" asChild className="w-full h-full">
      <Pressable>
        <View className="w-full rounded-md flex justify-center bg-white">
          <View className="w-full rounded-lg flex justify-center p-4">
            <View className="flex items-center justify-center p-4 bg-zinc-300 rounded-lg overflow-hidden relative border border-zinc-300">
              <Image
                source={props.image}
                className="w-full h-48"
                resizeMode="contain"
              />
              <View className="absolute w-10 h-10 bg-gray-500 top-25 left-50 rounded-full opacity-70 flex justify-center items-center">
                <Ionicons name="play" size={16} className="text-white" />
              </View>
            </View>
            <View className="flex flex-row items-center justify-between mt-2">
              <Text className="text-zinc-500 text-xl">{props.title}</Text>
              <View className="flex flex-row items-center gap-3">
                <View className="w-24 h-1 bg-zinc-300 flex flex-row">
                  <View className="w-8 h-1 bg-zinc-500"></View>
                </View>
                <Text className="text-zinc-500">3/7</Text>
                <View className="bg-zinc-300 rounded-full p-2">
                  <Ionicons name="play" size={16} className="text-white" />
                </View>
              </View>
            </View>
            <Text className="text-zinc-500 text-sm my-3">
              {props.description}
            </Text>
            <View className="flex flex-row">
              <WarningCards
                status={WarningCardsOptions.EmAndamento}
                content="Em andamento"
              />
              <WarningCards
                status={WarningCardsOptions.Expirando}
                content="Expirando"
              />
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
