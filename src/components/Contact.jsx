import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Container'

export function Contact() {
  return (
      <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
   <container>
   
    <div className="bg-zinc-800 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
     <SectionHeading number="6" id="contact-title">
          Contact Us
        </SectionHeading>
          <p className="mt-6 text-lg leading-8 text-zinc-100">
           Our offices are open 24 hours a day - 365 days a year to serve our clients. Connect with us on social media to learn more.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-red-800 pl-6 font-semibold text-zinc-100">Los Angeles</h3>
            <address className="border-l border-zinc-200 pt-2 pl-6 not-italic text-zinc-50">
              <p>515 S. Flower Street 18th Floor</p>
              <p>Los Angeles, CA 90071</p>
              <p>(213) 314-5229</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-red-800 pl-6 font-semibold text-zinc-100">New York</h3>
            <address className="border-l border-zinc-200 pt-2 pl-6 not-italic text-zinc-50">
              <p>287 Park Avenue South 2nd Floor</p>
              <p>New York, NY 10010</p>
              <p>(212) 860-0098</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-red-800 pl-6 font-semibold text-zinc-100">Washington DC</h3>
            <address className="border-l border-zinc-200 pl-6 pt-2 not-italic text-zinc-50">
              <p>1441 L Street NW 10th Floor</p>
              <p>Washington, DC 20005</p>
              <p>(202) 558-4090</p>
            </address>
          </div>
          <div>
            <address className="border-l border-red-800 pl-6 pt-0 not-italic text-zinc-50">
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>TikTok</p>
            </address>
          </div>
        </div>
      </div>
    </div>
   </container>
  </section>
  )
}
