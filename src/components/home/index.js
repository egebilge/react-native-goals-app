import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useGoalsStore } from "../../store/useGoalsStore";
import { styles } from "./styles";

const Home = () => {
  const navigation = useNavigation();
  const { goal, setGoal, addGoal } = useGoalsStore();

  const handleAddGoal = useCallback(() => {
    addGoal();
    navigation.navigate("Goals");
  }, [addGoal, navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Image
          source={require("../../../assets/images/goal.png")}
          style={styles.image}
          accessibilityLabel="Goal"
        />
        <TextInput
          placeholder="Enter your goal..."
          placeholderTextColor={"#311C87"}
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export { Home };
