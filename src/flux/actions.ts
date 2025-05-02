import { ActionType, ActionTypes } from './actionTypes';
import AppDispatcher from './dispatcher';

export interface Action {
  actionType: ActionType;
}

export interface CounterAction extends Action {}

export const CounterActions = {
  increment: (): void => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.INCREMENT_COUNTER
    });
  },
  decrement: (): void => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.DECREMENT_COUNTER
    });
  }
};
