import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const Saved = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Ionicons name="bookmark" size={17} color="#151312" />
        <Text className="text-gray-500 text-base">Saved</Text>
      </View>
    </View>
  );
};

export default Saved;
