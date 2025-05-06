import React, { useEffect } from 'react';

function CalendlyWidget() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/origin-investigation/client-consultation/?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=7f1d1d&primary_color=7f1d1d" style={{ border: 0; minWidth: '320px', height: '100%' }} />
  );
}

export default CalendlyWidget;
