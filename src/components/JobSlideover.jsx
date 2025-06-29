import { Fragment } from 'react'
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
                  <div className="flex h-full flex-col bg-white py-6 border border-zinc-50 shadow-sm">
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

                    <div className="relative flex-1 overflow-y-auto px-4 sm:px-6">
                      <p className="mt-4 font-display text-2xl font-bold tracking-tight text-zinc-900 px-10 py-5">At Origin, we strongly believe that our people are the foundation of our success. Their dedication, skills, and passion drive our agency forward every day. Here is what you can expect when you apply to join our team.</p>
                      <p className="mt-0 mb-0 text-base tracking-tight font-bold underline text-zinc-700 px-10 pt-0 pb-1">Hiring Process:</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1">Our hiring process is designed to attract, select, and retain the best talent in the industry. We are committed to providing a fair, transparent, and inclusive hiring experience for all candidates.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Application Submission:</b> Apply online with your updated resume and a cover letter detailing your experience and other qualifications.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Initial Screening:</b> Our human resources team reviews applications and may request a VideoAsk pre-interview.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Assessment:</b> Depending on the role, you may be asked to complete skills assessments or practical exercises to demonstrate your expertise.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Interviews:</b> Selected candidates will participate in a series of interviews, including through Microsoft Teams and in-person meetings with team members and agency leadership.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Feedback and Offer:</b> We provide timely feedback to all candidates. Successful candidates will receive a clear and comprehensive offer package outlining the role, compensation, and benefits.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Background Investigation:</b> Due to the nature of our work, a thorough background investigation will be conducted in accordance with all applicable laws and guidelines.</p>
                      <p className="mt-0 mb-0 text-base tracking-tight font-bold underline text-zinc-700 px-10 pt-4 pb-1">Quality Benefits:</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1">We offer a competitive benefits package that reflects our commitment to the well-being and growth of our employees, including:</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Health and Wellness:</b> Comprehensive medical, dental, and vision insurance.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Work-Life Balance:</b> Flexible schedule, paid time off, and remote work options.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Professional Development:</b> Opportunities for training and career advancement.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Retirement Plans:</b> 401(k) plans to help you plan for your future.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Life Insurance:</b> Company-provided life insurance to ensure peace of mind.</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1"><b>Long-Term Disability:</b> Financial protection in case of illness or injury.</p>
                      <p className="mt-0 mb-0 text-base tracking-tight text-zinc-700 font-bold underline px-10 pt-4 pb-1">Human Resources Support:</p>
                      <p className="mt-0 mb-0 text-sm tracking-tight text-zinc-700 px-10 py-1">Our dedicated human resources team is here to support you throughout your career journey. From onboarding to ongoing development, we ensure you have the resources and support needed to thrive at Origin. We foster a positive and inclusive workplace culture where every employee feels valued and empowered.</p>
                      <p className="mt-0 mb-0 font-display text-2xl tracking-tight text-zinc-900 font-bold px-10 py-4">Join us at Origin and be a part of a dynamic team that values excellence, innovation, and collaboration.</p>
                        <p className="mt-0 mb-10 font-display text-2xl tracking-tight text-red-800 hover:text-red-700 font-bold px-10 py-1"><a href="https://jobs.gusto.com/boards/origin-careers-e5e7c0e6-d25a-4784-9966-aad2669ee730" target="_blank">Please click here to get started.</a></p>
                    </div>
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
