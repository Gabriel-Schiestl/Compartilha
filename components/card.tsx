import { Image, ImageSourcePropType, Text, View } from "react-native";

interface CardProps {
    id: number,
    title: string;
    image: ImageSourcePropType;
    description: string;
}

export const Card = (props: CardProps) => {
    return (
        <View className='bg-primary w-full h-[50%] rounded-lg flex justify-center'>
            <Image
                source={props.image}
                className='w-full'
                resizeMode='contain'
            />
            <Text className=''>{props.description}</Text>
        </View>
    );
};