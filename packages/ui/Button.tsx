import { Text, StyleSheet, Pressable, ViewStyle } from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

export function Button({ onPress, title, accessibilityLabel, style }: Props) {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
