import { counterStore } from './flux/store';
import { CounterActions } from './flux/actions';
import '../index.sass';

// DOM elements
const counterElement = document.getElementById('counter') as HTMLElement;
const upButton = document.getElementById('up-button') as HTMLButtonElement;
const downButton = document.getElementById('down-button') as HTMLButtonElement;

// Update the UI when the counter changes
function updateCounter() {
  const count = counterStore.getCounter();
  if (counterElement) {
    counterElement.textContent = count.toString();
  }
}

// Initialize the counter display
updateCounter();

// Add change listener to update the UI when the store changes
counterStore.subscribeToCounterChanges(updateCounter);

// Add event listeners to buttons
if (upButton) {
  upButton.addEventListener('click', () => {
    CounterActions.increment();
  });
}

if (downButton) {
  downButton.addEventListener('click', () => {
    CounterActions.decrement();
  });
}

// For debugging
console.log('Flux browser application initialized');
