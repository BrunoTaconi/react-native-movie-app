import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.7 : 1}
      onPress={onPress}
      className="flex-row items-center bg-dark-200 rounded-full px-5 py-2"
    >
      <Ionicons name="search" size={20} color="#ab8bff" />
      <TextInput
        editable={!onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </TouchableOpacity>
  );
};

export default SearchBar;
