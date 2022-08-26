// Imported
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  onChangeText: (str: string) => void;
  value: string;
};
export function Filter({ onChangeText, value }: Props) {
  return (
    <TextInput
      style={styles.filter}
      onChangeText={onChangeText}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  filter: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
