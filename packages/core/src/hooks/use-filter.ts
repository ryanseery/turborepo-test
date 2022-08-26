// Imported
import { useState } from 'react';
import { Game } from '@seery/types';

export function useFilter(games: Game[]) {
  const [value, onChangeText] = useState('');

  const items = games.filter((game) =>
    game.title.toLowerCase().includes(value.toLocaleLowerCase())
  );

  return {
    value,
    onChangeText,
    items,
  };
}
