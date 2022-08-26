// Imported
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { getGames } from '@seery/api';
import { GameCard, Filter } from '@seery/ui';
import { useFilter } from '@seery/core';

export default function App() {
  const games = getGames();
  const { value, onChangeText, items } = useFilter(games);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Filter onChangeText={onChangeText} value={value} />
        <ScrollView>
          {items.map((game, idx) => (
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
