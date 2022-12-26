export const calculateTween = ({
  calculation,
  progress,
  from,
  to,
}: {
  from: number;
  to: number;
  progress: number;
  calculation: (input: number) => number;
}) => {
  const calculatedProgress = Math.min(1, Math.max(0, calculation(progress)));
  return from + (to - from) * calculatedProgress;
};
