import { writable } from 'svelte/store';

interface PlayerState {
  currentTrack: {
    src: string;
    title: string;
  } | null;
  isPlaying: boolean;
}

export const playerStore = writable<PlayerState>({
  currentTrack: null,
  isPlaying: false
});