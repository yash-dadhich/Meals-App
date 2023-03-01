import { useLayoutEffect } from "react"
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import IconButton from "../components/IconButton"
import List from "../components/MealDetail/List"
import SubTitle from "../components/MealDetail/Subtitle"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  function headerButtonPressHandler() {
    console.log("pressed!")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        )
      },
    })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView
      style={styles.rootContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  detailItem: {
    flex: 1,
    textAlign: "center",
    marginHorizontal: 4,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
})
