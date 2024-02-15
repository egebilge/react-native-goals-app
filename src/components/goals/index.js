import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useGoalsStore } from "../../store/useGoalsStore";
import { styles } from "../goals/styles";

const Goals = () => {
  const { goals, removeGoal } = useGoalsStore();

  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => removeGoal(index)}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export { Goals };
