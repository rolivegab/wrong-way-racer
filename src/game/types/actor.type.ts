export interface Actor {
  load: () => void;
  onTick?: (delta: number, elapsedMS: number) => void;
}
