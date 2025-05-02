import { EventEmitter } from 'events';
import AppDispatcher from './dispatcher';
import {ActionTypes} from './actionTypes';

class CounterStore extends EventEmitter {
  private readonly CHANGE_EVENT = 'COUNTER_CHANGED';
  private _counter: number = 0;

  getCounter(): number {
    return this._counter;
  }

  increment(): void {
    const beforeValue = this._counter;
    this._counter++;
    console.log(`Counter changed: ${beforeValue} -> ${this._counter}`);
    this.notifyCounterChanged();
  }

  decrement(): void {
    const beforeValue = this._counter;
    this._counter--;
    console.log(`Counter changed: ${beforeValue} -> ${this._counter}`);
    this.notifyCounterChanged();
  }

  subscribeToCounterChanges(callback: () => void): void {
    this.on(this.CHANGE_EVENT, callback);
  }

  unsubscribeFromCounterChanges(callback: () => void): void {
    this.removeListener(this.CHANGE_EVENT, callback);
  }

  private notifyCounterChanged(): void {
    this.emit(this.CHANGE_EVENT);
  }
}

const counterStore = new CounterStore();

// Register store with dispatcher
AppDispatcher.register((action) => {
  switch (action.actionType) {
    case ActionTypes.INCREMENT_COUNTER:
      counterStore.increment();
      break;
    case ActionTypes.DECREMENT_COUNTER:
      counterStore.decrement();
      break;
    default:
      // no op
  }
});

export { CounterStore, counterStore };