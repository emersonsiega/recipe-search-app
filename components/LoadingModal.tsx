import { colors } from "@/constants/theme";
import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";

type LoadingModalProps = {
  visible: boolean;
};

const LoadingModal: React.FC<LoadingModalProps> = ({ visible }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundSoft80,
    // position: "absolute",
  },
});

export default LoadingModal;
