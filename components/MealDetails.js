import { View, Text, StyleSheet } from "react-native"

function MealDetails({duration,complexity,affordability}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration} minutes</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  details: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flexDirection: "row",
  },
  detailItem: {
    flex: 1,
    textAlign: "center",
    marginHorizontal: 4,
    fontSize: 12,
  },
})
