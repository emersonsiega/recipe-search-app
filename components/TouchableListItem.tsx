import { colors } from "@/constants/theme";
import React from "react";
import {
    Image,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

type TouchableListItemProps = {
  charIdentifier: string;
  title: string;
  subtitle?: string;
  image?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const TouchableListItem = ({
  charIdentifier,
  title,
  subtitle,
  image,
  onPress,
  style,
}: TouchableListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.container}>
        <View style={styles.identifier}>
          <Text style={styles.charIdentifier}>{charIdentifier}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          {subtitle && (
            <Text style={styles.subtitle} numberOfLines={2}>
              {subtitle}
            </Text>
          )}
        </View>

        {image && (
          <Image
            resizeMode="cover"
            source={{ uri: image }}
            width={80}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
    boxShadow: "1px 2px 2px #c6c6c6",
    marginBottom: 12,
  },
  identifier: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.backgroundSoft,
    marginVertical: 20,
    marginHorizontal: 16,
    alignSelf: "center",
  },
  charIdentifier: {
    fontSize: 16,
    fontWeight: "medium",
  },
  titleContainer: {
    flex: 1,
    marginVertical: 20,
    marginRight: 16,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "medium",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "medium",
  },
  image: {
    backgroundColor: colors.backgroundSoft,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default TouchableListItem;
