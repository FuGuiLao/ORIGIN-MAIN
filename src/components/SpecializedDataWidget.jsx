import React, { useEffect } from 'react'

function SpecializedDataWidget() {
  // useEffect(() => {
  //   const head = document.querySelector('head')
  //   const script = document.createElement('script')
  //   script.setAttribute(
  //     'src',
  //     'https://assets.calendly.com/assets/external/widget.js'
  //   )
  //   head.appendChild(script)
  // }, [])
  // useEffect(() => {
  //   window.open(
  //     'https://get-in-touch-733c19.zapier.app/specialized-data-request',
  //     '_blank'
  //   )
  // }, [])

  return (
    // <div
    //   className="calendly-inline-widget"
    //   data-url="https://get-in-touch-733c19.zapier.app/specialized-data-request"
    //   style={{ minWidth: '320px', height: '100%' }}
    // />
    <iframe
      src="https://origin-specialized-data.zapier.app"
      width="100%"
      height="100%"
    />
  )
}

export default SpecializedDataWidget
