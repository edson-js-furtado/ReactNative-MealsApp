import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({ route, navigation }) {
  //Get the data from the previous screen
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealsItem) => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });

  //Set the Category name to the Title Bar
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList item={displayMeals} />;
}

export default MealsOverviewScreen;
