import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const GoalItem = ({ item, index, onRemoveGoal }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onRemoveGoal(index)}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

export { GoalItem };
