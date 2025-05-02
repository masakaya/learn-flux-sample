import { EventEmitter } from 'events';
import AppDispatcher from './dispatcher';
import {ActionTypes} from './actionTypes';

class CounterStore extends EventEmitter {
  private readonly CHANGE_EVENT = 'COUNTER_CHANGED';
  private _counter: number = 0;

  constructor() {
    super();
    // Register store with dispatcher
    AppDispatcher.register(this.handleActions.bind(this));
  }

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

  // @ts-ignore
  on(callback: () => void): void {
    super.on(this.CHANGE_EVENT, callback);
  }

  private notifyCounterChanged(): void {
    this.emit(this.CHANGE_EVENT);
  }

  private handleActions(action: any): void {
    switch (action.actionType) {
      case ActionTypes.INCREMENT_COUNTER:
        this.increment();
        break;
      case ActionTypes.DECREMENT_COUNTER:
        this.decrement();
        break;
      default:
        // no op
    }
  }
}

const counterStore = new CounterStore();

export { CounterStore, counterStore };
