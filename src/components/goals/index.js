import React from "react";
import { FlatList, View } from "react-native";
import { useGoalsStore } from "../../store/useGoalsStore";
import { styles } from "./styles";
import { GoalItem } from "./goal-item";

const Goals = () => {
  const { goals, removeGoal } = useGoalsStore();

  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <GoalItem item={item} index={index} onRemoveGoal={removeGoal} />
        )}
        contentContainerStyle={styles.listContent}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export { Goals };
