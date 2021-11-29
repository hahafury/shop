import React, {useState} from 'react';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import App from '../App';

const Setup = () => {
    const [store, setStore] = useState(configureStore());

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Setup;