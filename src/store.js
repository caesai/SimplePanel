import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducerState = {
  departments: [],
  depchoice: {}
}

export function reducer (state = reducerState, action) {
  switch (action.type) {
    case 'GET_DEPARTMENTS_LIST':
    return Object.assign({}, state, action.departments)
    case 'CHOOSE_DEPARTMENT':
    return Object.assign({}, state, {
      depchoice: action.choice
    })
    default:
      return state
  }
}

const rootReducer = combineReducers({reducer});

export default function configureStore(initialState) {
  let middleware = applyMiddleware(thunkMiddleware);
  let createStoreWithMiddleware = compose(middleware,(typeof window !== 'undefined') && window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
