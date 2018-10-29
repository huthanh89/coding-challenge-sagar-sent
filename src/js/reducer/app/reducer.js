//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import _ from 'lodash';

//-----------------------------------------------------------------------------//
// Model
//-----------------------------------------------------------------------------//

const initialState = function(){
  return {
    authorized: false,
    password:  'supersecret',
    show:       {},
    fetch:      false
  };
};

//-----------------------------------------------------------------------------//
// Reducer
//-----------------------------------------------------------------------------//

function reducer (prevState=initialState(), action){

  switch (action.type){

    case 'SET_AUTHORIZE': {
      let state        = prevState;
      state.authorized = true;
      return state;
    }

    case 'LOADING': {
      let state   = prevState;
      state.fetch = action.status;
      return _.clone(state);
    }

    case 'SHOW_DETAIL': {
      let state  = prevState;
      state.show = action.data;
      return _.clone(state);
    }
    
    default: {
      return prevState;
    }
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default reducer;

//-----------------------------------------------------------------------------//