import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { tempoList, tempoMap } from '@/constants/tempos';

export type TempoName = keyof typeof tempoMap;

const DEFAULT_TEMPO: TempoName = 'Moderato';

type AppContextValue = {
  tempoList: typeof tempoList;
  tempoMap: typeof tempoMap;
  selectedTempo: TempoName;
  setSelectedTempo: (tempo: TempoName) => void;
  bpm: number;
  setBpm: (bpm: number) => void;
  timeSignature: number;
  setTimeSignature: (timeSignature: number) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  togglePlaying: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [selectedTempo, setSelectedTempoState] = useState<TempoName>(DEFAULT_TEMPO);
  const [bpm, setBpm] = useState(tempoMap[DEFAULT_TEMPO].defaultBPM);
  const [timeSignature, setTimeSignature] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);

  const setSelectedTempo = useCallback((tempo: TempoName) => {
    setSelectedTempoState(tempo);
    setBpm(tempoMap[tempo].defaultBPM);
  }, []);

  const togglePlaying = useCallback(() => {
    setIsPlaying((current) => !current);
  }, []);

  const value = useMemo(
    () => ({
      tempoList,
      tempoMap,
      selectedTempo,
      setSelectedTempo,
      bpm,
      setBpm,
      timeSignature,
      setTimeSignature,
      isPlaying,
      setIsPlaying,
      togglePlaying,
    }),
    [selectedTempo, setSelectedTempo, bpm, timeSignature, isPlaying, togglePlaying],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }

  return context;
}
