import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export enum WarningCardsOptions {
    Finalizado = "Finalizado",
    EmAndamento = "Em andamento",
    NaoIniciado = "Não iniciado",
    Expirando = "Expirando",
    Atrasado = "Atrasado",
  }

interface WarningCardsProps {
    content: string;
    status: WarningCardsOptions
}

const WarningCards: React.FC<WarningCardsProps> = ({ content, status }) => {
    const backgroundColorClass = getBackgroundColorClass(status);
  
    return (
      <TouchableOpacity>
        <View className={`px-3 py-1 m-1 rounded-full items-center self-start ${backgroundColorClass}`}>
          <Text className="text-white font-bold">{content}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const getBackgroundColorClass = (status: WarningCardsOptions): string => {
    switch (status) {
      case WarningCardsOptions.Finalizado:
        return 'bg-green-500';
      case WarningCardsOptions.EmAndamento:
        return 'bg-blue-500';
      case WarningCardsOptions.NaoIniciado:
        return 'bg-gray-500';
      case WarningCardsOptions.Expirando:
        return 'bg-red-500';
      case WarningCardsOptions.Atrasado:
        return 'bg-red-500';
      default:
        return 'bg-white';
    }
  };

export default WarningCards