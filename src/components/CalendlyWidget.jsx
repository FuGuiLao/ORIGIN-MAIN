import React from 'react';

function openCalendly() {
    window.open('https://app.apollo.io/#/meet/nu5-nq3-iw3/origin-client-consultation?booking_type=preview?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=393939', '_blank');
}

function CalendlyWidget() {
    return (
        <button onClick={openCalendly}>Open Calendly</button>
    );
}

export default CalendlyWidget;
