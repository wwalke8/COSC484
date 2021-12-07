import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
    return (
      <div>
        <h4>Oops! There's nothing here.</h4>
        <p>
          <Link to="/">Go home</Link>
        </p>
      </div>
    );
  }