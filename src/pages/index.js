import { Link } from 'gatsby';
import * as React from 'react';
import FooterLinks from '../components/FooterLinks';
import Layout from '../components/layout';

const IndexPage = () => (
  <>
  <Layout />
  <h1>amanda barrafato</h1>
  <Link to ="/projects">
    Projects!
  </Link>
  <FooterLinks />
  </>
);

export default IndexPage;
