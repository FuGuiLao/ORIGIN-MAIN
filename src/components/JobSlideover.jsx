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
      
         <p className="mt-8 font-display text-4xl font-bold tracking-tight text-zinc-900">
		 
         At Origin, we believe that our people are the foundation of our success. Our hiring process is designed to attract, select, and retain the best talent in the industry. We are committed to providing a fair, transparent, and inclusive hiring experience. Here is what you can expect when you apply to join our team:
</p>
		 <br></br><br></br>
		 <p className="mt-4 text-lg tracking-tight text-zinc-700 px-10 py-5">
<b>Hiring Process:</b><br></br>
	1. <b>Application Submission:</b> Apply online with your updated resume and a cover letter detailing your experience and other qualifications.<br></br><br></br>
	<b></b>2. Initial Screening:</b> Our human resources team reviews applications and may request a VideoAsk pre-interview.<br></br><br></br>
	3. Interviews: Selected candidates will participate in a series of interviews, including Microsoft Teams and in-person meetings with team members and leadership.<br></br><br></br>
	4. Assessment: Depending on the role, you may be asked to complete skills assessments or practical exercises to demonstrate your expertise.<br></br><br></br>
	5. Feedback and Offer: We provide timely feedback to all candidates. Successful candidates will receive a comprehensive offer package outlining the role, compensation, and benefits.<br></br><br></br>
  	6. Background Investigation: Due to the nature of our work, a thorough background investigation will be completed in accordance with laws and applicable guidelines.
<br></br><br></br>
Quality Benefits:<br></br>
We offer a competitive benefits package that reflects our commitment to the well-being and growth of our employees, including:<br></br>
	• Health and Wellness: Comprehensive medical, dental, and vision insurance plans.<br></br>
	• Work-Life Balance: Flexible working hours, generous paid time off, and remote work options.<br></br>
	• Professional Development: Opportunities for training, certifications, and career advancement.<br></br>
	• Retirement Plans: 401(k) plans to help you plan for your future.<br></br>
	• Life Insurance: Company-provided life insurance to ensure peace of mind for you and your loved ones.<br></br>
	• Long-Term Disability Insurance: Financial protection in case of prolonged illness or injury, ensuring you have support during challenging times.
<br></br><br></br>
Human Resources Support:<br></br>
Our dedicated human resources team is here to support you throughout your career journey. From onboarding to ongoing development, we ensure you have the resources and support needed to thrive at Origin. We foster a positive and inclusive workplace culture where every employee feels valued and empowered.
<br></br><br></br>
Join us at Origin and be a part of a dynamic team that values excellence, innovation, and collaboration. Please click <a href="https://jobs.gusto.com/boards/origin-careers-e5e7c0e6-d25a-4784-9966-aad2669ee730" target="_blank"><b>here</b></a> to get started.
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
