import { StyleSheet, Text, View } from "react-native"

function SubTitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#1a253d",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 4,
    borderBottomColor: "#1a253d",
    borderBottomWidth: 2,
  },
})
