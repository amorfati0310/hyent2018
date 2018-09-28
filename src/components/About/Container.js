import React, { Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';

const Container = ({ children }) => {
  return (
    <Fragment>
      <ReactFullpage
        fixedElements='.global-header'
        render={({ state, fullpageApi }) => {
          return (
            <article id="fullpage-wrapper">
              {children}
            </article>
          );
        }}
      />
    </Fragment>
  );
};

export default Container;
