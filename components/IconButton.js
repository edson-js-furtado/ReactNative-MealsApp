import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, pressed }) {
  return (
    <Pressable onPress={pressed} style={({pressed}) => pressed && styles.pressedStyle}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.5
  }
});
