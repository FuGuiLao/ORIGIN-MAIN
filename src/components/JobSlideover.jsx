import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'



const JobSlideover = ({ open, onClose }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-1000 sm:duration-1000"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-1000 sm:duration-1000"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col overflow-y-hidden bg-white py-6 border border-zinc-50 shadow-sm">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-zinc-900">
                          Submit an Application
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
      
        <p className="mt-4 text-lg tracking-tight text-zinc-700 px-10 py-5">
         Origin partners with Gusto from the inital application to after you are hired to provide the highest quality human resources experience. Our hiring process is outlined below.
          <p><b>Hiring Process</b><br></br>
          1) Initial Online Application<br></br>
          2) VideoAsk Pre-Interview<br></br>
          3) Microsoft Teams Interview<br></br>
          4) In-Person Interview<br></br>
          5) Offer Letter<br></br>
          6) Background Investigation<br></br>
          7) Hired / Onboarding Process
            </p><br></br>
          <p>Please click <a href="https://jobs.gusto.com/boards/origin-careers-e5e7c0e6-d25a-4784-9966-aad2669ee730" target="_blank"><b>here</b></a> to view available positions and begin the process.</p>
        </p>
   
  
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default JobSlideover;
