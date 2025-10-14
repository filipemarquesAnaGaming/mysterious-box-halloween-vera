'use client';

import { GameContext } from '@/contexts/GameContext';
import { useContext } from 'react';

export const useGame = () => useContext(GameContext);
