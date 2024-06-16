import React, { useEffect } from 'react';

const ZapierEmbed = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    
    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ maxWidth: '900px', height: '100%' }}>
      <zapier-interfaces-page-embed 
        page-id="clvsk7o9l00036z29i6c9s1pm" 
        no-background="false" 
        allow-query-params="true" 
        query-params=""
        style={{ width: '100%', height: '100%' }}
      ></zapier-interfaces-page-embed>
    </div>
  );
};

export default ZapierEmbed;
