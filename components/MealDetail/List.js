import { StyleSheet, Text, View } from "react-native"

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ))
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#778bcc",
  },
  itemText: {
    fontSize: 16,
    color: "##132744",
    textAlign: "center",
  },
})
