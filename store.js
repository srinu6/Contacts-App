import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import actionCreators from './Actions/ContactAction'
import rootReducer from "./Reducers";
const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 });
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;
