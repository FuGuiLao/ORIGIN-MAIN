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
            <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 py-1"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
              <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 py-1"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
              
              <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 py-1"
            fill="currentColor"
            viewBox="0 0 24 24">
             <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 py-1"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    class="h-5 w-5 py-1">
      <path
      fill="currentColor"
      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>

  </address>
          </div>
        </div>
      </div>
    </div>
   </container>
  </section>
  )
}
