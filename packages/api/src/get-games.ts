// Imported
import { Game } from '@seery/types';
import { games } from './games';

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
