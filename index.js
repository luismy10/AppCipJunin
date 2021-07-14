import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {Contactenos} from './screens/';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './screens/store';

const store = configureStore();

const ReduxComponent = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Contactenos);
