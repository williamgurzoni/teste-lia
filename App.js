import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Route from './src/routes';
import rootReducers from './src/reducers';

const store = createStore(rootReducers);

const App = () => (
    <Provider store={store} >  
        <Route />
    </Provider>
);

export default App;
