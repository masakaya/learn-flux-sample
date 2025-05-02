export const ActionTypes = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  DECREMENT_COUNTER: 'DECREMENT_COUNTER'
} as const;

export type ActionType = typeof ActionTypes[keyof typeof ActionTypes];