import React, { useEffect } from 'react';

function CalendlyWidget() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);

  return (
<iframe src='
https://outlook.office365.com/owa/calendar/ORIGINClientConsultation@origininvestigations.com/bookings/'
width='100%' height='100%' scrolling='yes' style='border:0'></iframe>  );
}

export default CalendlyWidget;
