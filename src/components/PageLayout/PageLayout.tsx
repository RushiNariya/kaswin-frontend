import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface PageLayoutPropsType {
  pageTitle: string;
  children?: React.ReactNode;
  status?: string;
  message?: number;
}

function PageLayout(props: PageLayoutPropsType) {
  return (
    <div className="">
      <HelmetProvider>
        <Helmet>
          <title>{props.pageTitle} | Kaswin</title>
        </Helmet>
      </HelmetProvider>
      <div className="px-8 py-4 flex flex-row min-h-[90vh] flex-1">{props.children}</div>
    </div>
  );
}

export default PageLayout;
