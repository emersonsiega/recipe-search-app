import { colors } from "@/constants/theme";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

type CheckboxListTileProps = {
  text: string;
  trailingText: string;
  style?: StyleProp<ViewStyle>;
};

const CheckboxListTile: React.FC<CheckboxListTileProps> = ({
  text,
  trailingText,
  style,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      <View style={[styles.container, style]}>
        <FontAwesomeIcon
          icon={checked ? faSquareCheck : faSquare}
          size={20}
          color={colors.primary}
          secondaryColor={colors.primaryText}
        />
        <Text style={styles.text} numberOfLines={2}>
          {text}
        </Text>
        <Text style={styles.trailingText}>{trailingText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.backgroundAlt,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    marginLeft: 20,
    flex: 100,
  },
  trailingText: {
    marginLeft: 16,
    fontSize: 11,
  },
});

export default CheckboxListTile;
