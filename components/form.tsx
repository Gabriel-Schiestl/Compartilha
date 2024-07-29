import { Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native";


export default function Form(props: any) {

    const keys = Object.keys(props);

    return (
        <View className="w-full items-center mt-4">
            {
                keys.map((key: any, index) => (
                    <TextInput key={index} placeholder={props[key]} className="mb-4 rounded-md pl-2 w-2/3 h-10 border">
                    </TextInput>
                ))
            }
        </View>
    )
}