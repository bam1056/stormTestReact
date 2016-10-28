import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import Header from './Header';

const MasterPage = (props) => (
  <DocumentTitle title='My React App'>
    <div className='MasterPage'>
      <Header />
      { props.children }
    </div>
  </DocumentTitle>
);

export default MasterPage;
