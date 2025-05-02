import { Dispatcher } from 'flux';

// Dispatcher
const AppDispatcher = new Dispatcher<{
  actionType: string;
  data?: any;
}>();

export default AppDispatcher;