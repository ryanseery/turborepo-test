import { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};
export function Card({ children, style }: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
    elevation: 1,
    shadowOpacity: 0.06,
    shadowRadius: 22,
    shadowColor: '#9292d7',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
