import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { someAction } from './actions';

const mockStore = configureMockStore([thunk]);

test('dispatches someAction correctly', async () => {
  const store = mockStore({});
  await store.dispatch(someAction());
  const actions = store.getActions();
  expect(actions[0]).toEqual({ type: 'SOME_ACTION_TYPE', payload: 'data' });
});
