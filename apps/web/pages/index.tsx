import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        TEST THIS THING OUT
      </Text>
    </View>
  );
}
