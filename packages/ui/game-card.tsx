import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Card, Circle } from '@seery/ui';
import { Game } from '@seery/types';
import { useGameProps } from '@seery/core';

type Props = {
  game: Game;
};
export function GameCard({ game }: Props) {
  const { title, developer, publisher, director, date, score } =
    useGameProps(game);

  const onPress = (gameTitle: string) =>
    Alert.alert(`Selected \n ${gameTitle}`);

  return (
    <Card style={styles.container}>
      <View style={styles.gameCard}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Circle text={score} />
        </View>

        <Text>{developer}</Text>
        <Text>{publisher}</Text>
        <Text>{director}</Text>
        <Text>{date}</Text>
        <Button
          title="Select"
          onPress={() => onPress(title)}
          style={styles.button}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  gameCard: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  button: {
    marginTop: 12,
  },
});
