// Absolute imports
import React from 'react'

// Components
import Header from './Header'

// Styled
import {
  Content
} from './styled';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>      
    </>
  );
};

export default (customProps) => (Child) => (props) => (
  <Layout {...customProps} {...props}>
    <Child {...props} />
  </Layout>
);