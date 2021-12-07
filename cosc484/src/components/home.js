import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Feed from './Feed';

// import { AuthProvider } from '../auth/authProvider';

export default class Home extends Component {

  render() {
      if (false)
      {
        return(
          <div>
              <Link to="login" variant="body2">
                  {"Please sign in."}
              </Link>
          </div>
        );
      }
      else {
        return(
          <Fragment>
            <Feed />
          </Fragment>
        )
      }
  }
}