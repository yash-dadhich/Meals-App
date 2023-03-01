import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#8585e7" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: 0.7,
})
