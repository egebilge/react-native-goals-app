import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  listContent: {
    flexGrow: 1,
    justifyContent: "center",
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
  },
});

export { styles };
