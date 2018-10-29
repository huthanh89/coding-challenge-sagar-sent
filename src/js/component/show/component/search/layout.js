//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import $     from 'jquery';
import React from 'react';
import fetch from 'node-fetch'

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  constructor(props){
    super(props)
    this.changedTitle  = this.changedTitle.bind(this);
    this.clickedSearch = this.clickedSearch.bind(this);

    this.state = {
      title: ''
    }

  }

  changedTitle(){
    let title = $('#search-title').val();
    this.setState({
      title: title
    })
  }

  clickedSearch(event){

    let props  = this.props;
    let search = $('#search-title').val();
    let url    = `https://api.tvmaze.com/singlesearch/shows?q=${search}&embed=episodes`;

    if(this.isValid()){

      props.actionLoading(true);

      fetch(url)

      // Promise to return json data.
  
      .then(function(res){
          return res.json();
      })
  
      // Handle json data.
  
      .then(function(json){
        props.actionLoading(false);
        props.actionShowDetail({
          data: json
        });
      })
      
      .catch(function(){
        props.actionLoading(false);
        props.actionShowDetail({
          data: -1
        });
      });
    }
  }

  isValid(){
    let flag = true;
    if(this.state.title.length <= 2){
      flag = false;
    }
    return flag;
  }

  render() {

    let isValid     = this.isValid();
    let buttonClass = 'btn btn-primary mt-2 float-right';

    if(!isValid){
      buttonClass += ' disabled';
    }

    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="form-group">
                  <label htmlFor="search-title">Title Search</label>
                  <input type="text" className="form-control" id="search-title" placeholder="Input a title here..." onChange={this.changedTitle}/>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className={buttonClass} id="search-button" onClick={this.clickedSearch}>
                GO
              </button>
            </div>
          </div>
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
