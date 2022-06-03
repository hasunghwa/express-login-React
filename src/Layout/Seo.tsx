import React from 'react';
import { HelmetProvider, Helmet} from 'react-helmet-async';
interface propsType {
  title:string;
}

const Seo = ({title}:propsType) => {
  return (
    <HelmetProvider>    
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;