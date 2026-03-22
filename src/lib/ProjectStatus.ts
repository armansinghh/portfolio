export type ProjectStatus = 'in-progress' | 'completed' | 'mvp';

export const statusConfig: Record<
  ProjectStatus,
  { label: string; dotClass: string; pulse: boolean }
> = {
  'in-progress': { label: 'in-progress', dotClass: 'bg-orange-400', pulse: true },
  completed:     { label: 'completed',   dotClass: 'bg-green-400',   pulse: false },
  mvp:           { label: 'mvp',         dotClass: 'bg-purple-400',   pulse: false },
};