// Imported
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { getGames } from '@seery/api';

// Local
import GameCard from './GameCard';

export default function App() {
  const games = getGames();

  console.log(games);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <ScrollView>
          {games.map((game, idx) => (
            <GameCard key={idx} game={game} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inner: {
    marginTop: 20,
    paddingHorizontal: 12,
  },
});
