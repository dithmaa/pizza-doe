import React from 'react'
import ContentLoader from 'react-content-loader';

function PizzaBlockLoading() {
  return <ContentLoader 
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="124" r="113" /> 
        <rect x="0" y="264" rx="6" ry="6" width="280" height="30" /> 
        <rect x="0" y="311" rx="6" ry="6" width="280" height="80" /> 
        <rect x="124" y="404" rx="29" ry="29" width="157" height="49" /> 
        <rect x="0" y="404" rx="6" ry="6" width="98" height="39" />
    </ContentLoader>
  
}

export default PizzaBlockLoading