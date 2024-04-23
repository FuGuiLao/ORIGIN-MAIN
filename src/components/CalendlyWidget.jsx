import React, { useEffect } from 'react';

function CalendlyWidget() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://outlook.office365.com/book/ORIGINClientConsultation@origininvestigations.com/" style={{ minWidth: '320px', height: '100%' }} />
  );
}

export default CalendlyWidget;
