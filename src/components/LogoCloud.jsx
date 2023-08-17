import Image from 'next/image'

import seal_bh from '@/images/seal_bh.png'
import seal_doj from '@/images/seal_doj.png'
import seal_ic from '@/images/seal_ic.png'
import seal_la from '@/images/seal_la.png'
import seal_state from '@/images/seal_state.png'
import seal_federalcourt from '@/images/seal_federalcourt.png'

export function LogoCloud() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted to undertake the most critical investigations
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={seal_bh}
            alt=""
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={seal_federalcourt}
            alt=""
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={seal_doj}
            alt=""
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={seal_ic}
            alt=""
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={seal_la}
            alt=""
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={seal_state}
            alt=""
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}
