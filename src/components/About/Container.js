import React, { Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';

const Container = ({ children }) => {
  return (
    <Fragment>
      <ReactFullpage
        licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
        fixedElements='.global-header'
        anchors={[ 'about', 'intro', 'concept', 'location', 'video', 'professors', 'footer' ]}
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
