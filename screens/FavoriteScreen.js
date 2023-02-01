import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
// import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
// import { FavoriteContext } from "../store/context/favorite-context";

function FavoriteScreen() {
  // const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMealId = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealId.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet!</Text>
      </View>
    );
  }

  return <MealList item={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
