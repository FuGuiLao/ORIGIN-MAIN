import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const TeamMember = ({ member }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex flex-col gap-6 xl:flex-row">
      <Image className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={member.image} alt="" />
      <div className="flex-auto">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-900">{member.name}</h3>
        <p className="text-base leading-7 text-zinc-600">{member.role}</p>
        <p className="mt-6 text-base leading-7 text-zinc-600">{member.bio}</p>
        <div>
          <button onClick={() => setOpen(true)}><p className="text-red-800 py-3">Learn more</p></button>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={() => setOpen(false)}>
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
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 border border-zinc-50 shadow-sm">
                          <div className="px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-base font-semibold leading-6 text-zinc-900">
                                {member.name}
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="rounded-md bg-white text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <p className="relative mt-6 flex-1 px-4 sm:px-6">{member.content}</p>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </li>
  )
}

export default TeamMember;
