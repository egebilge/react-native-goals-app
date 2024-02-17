import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { GoalsScreen } from "./src/screens/goals-screen";
import { HomeScreen } from "./src/screens/home-screen";
import { useGoalsStore } from "./src/store/useGoalsStore";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  const { loadGoals } = useGoalsStore();

  useEffect(() => {
    loadGoals();
  }, [loadGoals]);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Goals"
            component={GoalsScreen}
            options={{
              title: "Your Goals",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
