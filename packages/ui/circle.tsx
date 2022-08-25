import { Dimensions, View, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
};
export function Circle({ text }: Props) {
  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height
      ) / 2,
    width: 35,
    height: 35,
    backgroundColor: '#4290f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
