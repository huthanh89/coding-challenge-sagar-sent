//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   $             from 'jquery';
import   React         from 'react';
import   App           from './App';
import   reducer       from './reducer';
import { Provider }    from 'react-redux';
import { render }      from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//-----------------------------------------------------------------------------//

const store = createStore(reducer);

$( document ).ready(function() {
    render(
        <Provider store={store}>
            <Router>
                <Route 
                    path="/" 
                    component={App} 
                />
            </Router>
        </Provider>,
        $('#root')[0]
    );
});

//-----------------------------------------------------------------------------//