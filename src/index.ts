// Entry point for the application
import { counterStore } from './flux/store';
import { CounterActions } from './flux/actions';

console.log('TypeScript environment is set up!');
console.log('Flux library is installed and ready to use!');

// Initial counter value
console.log(`Initial counter value: ${counterStore.getCounter()}`);

// Add change listener
counterStore.subscribeToCounterChanges(() => {
  console.log(`Counter updated: ${counterStore.getCounter()}`);
});

// Dispatch some actions
console.log('Incrementing counter...');
CounterActions.increment();

console.log('Incrementing counter again...');
CounterActions.increment();

console.log('Decrementing counter...');
CounterActions.decrement();

export {};
