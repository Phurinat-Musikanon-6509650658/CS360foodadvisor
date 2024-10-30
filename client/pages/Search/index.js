import React from 'react';
import Layout from '../../components/layout'

const Login = ({ global, pageData, preview }) => {
  return (
    <Layout
      global={global}
      type="restaurant-page"
      pageData={pageData}
      preview={preview}
    >
      <h1>Welcome to Search page</h1>
    </Layout>
  );
};

export default Login;