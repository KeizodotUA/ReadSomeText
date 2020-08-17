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
    <div >
      <Header />
      <Content>
        {children}
      </Content>      
    </div>
  );
};

export default (customProps) => (Child) => (props) => (
  <Layout {...customProps} {...props}>
    <Child {...props} />
  </Layout>
);