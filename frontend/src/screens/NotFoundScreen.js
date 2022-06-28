import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundScreen() {
  return (
    <div>
      {' '}
      <h1 className="not-found">404</h1>
      <h3 className="not-found-h3">
        Page not found, try searching or go to
        <Link to="/" className="text-decoration-none">
          {' '}
          Amazona home page
        </Link>
      </h3>
    </div>
  );
}
