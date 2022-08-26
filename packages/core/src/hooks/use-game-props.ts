// Imported
import React from 'react';
import { Game } from '@seery/types';
// Local
import { getDate } from '../services';

export function useGameProps(game: Game) {
  const { releaseDate, reviewScore, ...rest } = game;

  const date = getDate(releaseDate);
  const score = reviewScore.toString();

  return {
    ...rest,
    date,
    score,
  };
}
