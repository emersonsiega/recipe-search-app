import { StyleSheet } from "react-native";

const colors = {
  primary: "#991EFA",
  primaryText: "#fafafa",

  darkText: '#292929',

  background: "#fff",
  backgroundAlt: "#D5D2F8",
  backgroundSoft: "#E6E6F6",
  backgroundSoft80: "rgba(230, 230, 246, 0.8)",

  errorFeedback: "#F25055"
};

const sharedStyles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    lineHeight: 28,
  },
});

export { colors, sharedStyles };
