import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const store = createStore(
        combineReducers,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga, store.dispatch);
    return store;
};

export default configureStore;