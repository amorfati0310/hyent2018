import React, { Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Container = ({ children }) => {
  return (
    <Fragment>
      <ReactFullpage
        licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
        fixedElements='.global-header'
        verticalCentered={false}
        anchors={[ 'about', 'intro', 'concept', 'location', 'video', 'professors', 'footer' ]}
        navigation={true}
        navigationPosition="bottom"
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
