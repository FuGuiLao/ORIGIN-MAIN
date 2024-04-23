import { useEffect, useRef } from "react";


function CalendlyWidget() {
  const iframeRef = useRef(null);

  
  // useEffect(() => {
  //   // Function to handle script load event
  //   // Create script element
  //   const script = document.createElement('script');
  //   script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
  //   script.addEventListener('load', handleScriptLoad);

  //   // Append script to head
  //   document.head.appendChild(script);
  // }, []);

  return (
    <>
    <iframe ref={iframeRef}
    src="https://outlook.office365.com/book/ORIGINClientConsultation@origininvestigations.com/"
    style={{ minWidth: '350px', height: '100%' }} loading="lazy" />
    <div className="fixed bg-white left-0 top-[50px] w-full h-[28px]" />
    <div className="fixed bg-white left-0 top-[50px] w-[120px] h-full max-sm:hidden" />
    <div className="fixed bg-white right-4 top-[50px] w-[120px] h-full max-sm:hidden" />
    </>
    // <div id="calendly-inline-widget" className="calendly-inline-widget" data-url="https://outlook.office365.com/book/ORIGINClientConsultation@origininvestigations.com/" style={{ minWidth: '350px', height: '100%' }} />
  );
}

export default CalendlyWidget;