import { Game } from '@seery/types';

const games: Game[] = [
  {
    id: 1,
    title: 'Elden Ring',
    developer: 'From Software',
    publisher: 'Bandai Namco Entertainment',
    director: 'Hidetaka Miyazaki',
    releaseDate: 1645765200000,
    reviewScore: 96,
  },
  {
    id: 2,
    title: 'Metal Gear Solid V: The Phantom Pain',
    developer: 'Kojima Productions',
    publisher: 'Konami',
    director: 'Hideo Kojima',
    releaseDate: 1441080000000,
    reviewScore: 93,
  },
  {
    id: 3,
    title: 'Super Mario World',
    developer: 'Nintendo EAD',
    publisher: 'Nintendo',
    director: 'Takashi Tezuka',
    releaseDate: 659163600000,
    reviewScore: 100,
  },
];

/**
 * A function to retrieve a list of games
 */
export function getGames(): Game[] {
  return games;
}

/**
 * @param id id of a game
 */
export function getAGame(id: number): Game | null {
  const game = games.find((game: Game) => game.id == id);
  if (game) return game;
  return null;
}
