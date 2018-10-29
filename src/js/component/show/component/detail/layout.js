//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import moment from 'moment'
import React  from 'react';

//-----------------------------------------------------------------------------//
// Component
//-----------------------------------------------------------------------------//

class Layout extends React.Component {

  render() {

    let data = this.props.state.show.data;
    let ep1  = data._embedded.episodes[0]
    let ep2  = data._embedded.episodes[1]

    return (
      <div>
        <h2 className="text-center">
          {data.name}
        </h2>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                  <img className="detail-image" src={data.image.medium} alt="Image"/>
              </div>
              <div className="col-10">
                <p>
                  {data.summary.substring(3, data.summary.length-4)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                  <img className="detail-image" src={ep1.image.medium} alt="Image"/>
              </div>
              <div className="col-10">
              <p>
                  <span>{moment(ep1.airdate).format('MMMM DD, YYYY')}, Season {ep1.season} episode {ep1.number}</span>
                </p>
                <p>
                  <span className="mr-1">Summary:</span>
                  <span>{ep1.summary.substring(3, ep1.summary.length-4)} </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                  <img className="detail-image" src={ep2.image.medium} alt="Image"/>
              </div>
              <div className="col-10">
              <p>
                  <span>{moment(ep2.airdate).format('MMMM DD, YYYY')}, Season {ep2.season} episode {ep2.number}</span>
                </p>
                <p>
                  <span className="mr-1">Summary:</span>
                  <span>{ep2.summary.substring(3, ep2.summary.length-4)} </span>
                </p>
              </div>
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
