import * as React from 'react';
import {Link} from 'gatsby';

const Layout = () => {
  return (
    <div className = "links">
      <Link to ="/projects">
      Projects!
      </Link>

      <Link to = "/music">
        Music!
      </Link>

      <Link to = "/resume">
        Resume!
      </Link>
    </div>
  );
};

export default Layout;
