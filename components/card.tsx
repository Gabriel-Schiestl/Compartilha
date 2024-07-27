import { Image, Text, View } from "react-native";

interface CardProps {
    title: string;
    image: string;
    description: string;
}

export const Card = (props: CardProps) => {
    return (
        <View className='bg-primary'>
            <Text className=''>{props.title}</Text>
            <Image
                source={{ uri: props.image }}
                className=''
                resizeMode='cover'
            />
            <Text className=''>{props.description}</Text>
        </View>
    );
};