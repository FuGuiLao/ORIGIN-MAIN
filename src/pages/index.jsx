import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ORIGIN / Investigation / Intelligence
        </title>
        <meta
          name="description"
          content="Origin is a private investigation and intelligence agency. We assist governments, corporations, law firms, and individuals."
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          
        }}
      >
      <title>
          CA SUPERIOR COURT CASES
        </title>
        <p>
          Origin is a member of the <b>California Superior Court Investigator Panel</b>. This means that we can provide criminal case investigative services at no cost to qualified defendants.
        </p>
        <p>
        &nbsp;
        </p>
       <p>
         We also offer these services in partnership with law firms through our <b>fully integrated case review</b> process. Our highly experienced investigators can help make the difference.
        </p>
       <p>
        &nbsp;
        </p>
              <Button href="#free-chapters" color="blue">
                Schedule a Consultation
              </Button>
        
      </Testimonial>
 
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
         author={{
          
        }}
      >
       <title>
          SPECIALIZED DATA
        </title>
        <p>
          Origin's specialized data services can <b>uncover hidden informatio</b>n that can be valuable in criminal and civil proceedings. Our experienced intelligence analysts can bring relevance to complex information. 

            </p>
        <p>
        &nbsp;
        </p>
 <p>
          We specialize in <b>impossible to get information</b>, including bank and asset locates, insurance policy information, employment data, medical records, travel information, and social media activity.
           </p> 
 <p>
        &nbsp;
        </p>
          <Button href="#free-chapters" color="blue">
                Order Specialized Data Now
              </Button>
      
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
