import { colors, sharedStyles } from "@/constants/theme";
import { StyleSheet, Text } from "react-native";

type ErrorTextProps = {
  text: string;
  error?: string | null;
};

const ErrorText: React.FC<ErrorTextProps> = ({ text, error }) => {
  if (!error) return <></>;

  return (
    <>
      <Text
        style={{
          ...sharedStyles.title,
          marginTop: 14,
          color: colors.errorFeedback,
        }}
      >
        {text}
      </Text>
      <Text style={styles.errorText}>{error}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    color: colors.errorFeedback,
  },
});

export default ErrorText;
