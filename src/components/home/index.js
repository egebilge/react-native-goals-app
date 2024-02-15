import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGoalsStore } from "../../store/useGoalsStore";
import { styles } from "../home/styles";

const Home = () => {
  const navigation = useNavigation();
  const { goal, setGoal, addGoal } = useGoalsStore();

  const handleAddGoal = () => {
    addGoal();
    navigation.navigate("Goals");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your goal..."
        placeholderTextColor={"lightblue"}
        style={styles.input}
        value={goal}
        onChangeText={setGoal}
        autoComplete="off"
        autoCorrect={false}
        importantForAutofill="no"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
        <Text style={styles.text}>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Home };
