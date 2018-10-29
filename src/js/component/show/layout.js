//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import   _          from 'lodash'
import   React      from 'react';
import   Search     from './component/search/layout.js';
import   Loading    from './component/loading/layout.js';
import   Detail     from './component/detail/layout.js';
import   NoResult   from './component/noresult/layout.js';
import { Redirect } from 'react-router-dom';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props);
  }

  getView(){
    let state = this.props.state;

    if(state.fetch){
      return(<Loading/>);
    }
    else if(state.show.data == -1){
      return(<NoResult/>);
    }
    else if(!_.isUndefined(state.show.data)){
      return(<Detail {...this.props}/>);
    }
    else{
      return(
        <div>
          <h1>Search</h1>
        </div>);
    }
  }

  render() {

    if(!this.props.state.authorized){
      return (
        <Redirect to="/"/>
      );
    }

    return (
      <div className="row">
        <div className="col-lg-4">
          <Search {...this.props}/>
        </div>
        <div className="col-lg-8">
          {this.getView()}
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
