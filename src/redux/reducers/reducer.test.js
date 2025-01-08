import reducer from './reducer';
import { SOME_ACTION } from './actionTypes';

test('should handle SOME_ACTION', () => {
  const initialState = { key: 'value' };
  const action = { type: SOME_ACTION, payload: 'new value' };
  const newState = reducer(initialState, action);
  expect(newState.key).toBe('new value');
});
