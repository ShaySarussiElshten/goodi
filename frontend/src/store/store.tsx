import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PROCESS_ENV } from '../constants';
import apiResponseMiddleware from './middleware/apiMiddleware';
import reducers from './reducers';


const rootReducer = () => combineReducers({
  productData: reducers.productReducer,
});

const TopLevelReducer = () => (state:any, action:any) => {
  // We use this reducer to catch the logout action so we can safely clear all the Reducers and
  // turn them back to the initial state.
  // Note that we are not mutating the state here,
  // we just reassigning the reference of a local variable called state.
  // if (action.type === USER.LOGOUT) {
  //   state = undefined;
  // }

  return rootReducer()(state, action);
};

const store = (() => {
  let storeObj;
    storeObj = createStore(
      TopLevelReducer(),
      composeWithDevTools(applyMiddleware(apiResponseMiddleware, thunk)),
    );
  return storeObj;
})();

export default store;
