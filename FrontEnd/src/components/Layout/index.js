// Absolute imports
import React from 'react'

// Components
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default () => (Child) => () => (
  <Layout>
    <Child />
  </Layout>
);