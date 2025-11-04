import { colors } from "@/constants/theme";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type ChipProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Chip: React.FC<React.PropsWithChildren<ChipProps>> = ({
  text,
  style,
  children,
  onPress,
}) => {
  const content = (
    <View style={[styles.container, style]}>
      {children}
      <Text style={styles.chip}>{text}</Text>
    </View>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  ) : (
    content
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkText,
  },
  chip: {
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
});

export default Chip;
