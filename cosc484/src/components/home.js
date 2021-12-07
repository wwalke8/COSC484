import * as React from 'react';
import { Link } from 'react-router-dom';
import InfiniteList from './infinitelist';
// import { AuthProvider } from '../auth/authProvider';

export default class Home extends React.Component {

  render() {
      if (true)
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
        <InfiniteList />
      }
  }
}