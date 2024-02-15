import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { GoalsScreen } from "./src/screens/goals-screen";
import { HomeScreen } from "./src/screens/home-screen";
import { useGoalsStore } from "./src/store/useGoalsStore";

const Stack = createNativeStackNavigator();

export default function App() {
  const { loadGoals } = useGoalsStore();

  useEffect(() => {
    loadGoals();
  }, []);

  return (
    <NavigationContainer initialState={{ routes: [{ name: "Home" }] }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
