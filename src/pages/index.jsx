import Head from 'next/head'

import { Banner } from '@/components/Banner' 
import { OurPeople } from '@/components/OurPeople'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Investigation } from '@/components/Investigation'
import { OurServices } from '@/components/OurServices'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Team } from '@/components/Team'
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

          <script

          dangerouslySetInnerHTML={{

            __html: `

              (function(a,b,c,d,e,f,g){c[d]=c[d]||function(){(c[d].q=c[d].q||[]).push(arguments)};c['_lsAlias']=c[d];e=a.createElement(b);e.type='text/javascript';e.async=true;e.src='https://app.chatsupport.co/api/client/get/script/LS-42bf8cb7';f=function(){g=a.getElementsByTagName(b)[0];g.parentNode.insertBefore(e,g)};c.addEventListener('load',f)})(document,'script',window,'_ls');_ls('init',{'projectId':'LS-42bf8cb7'});

            `

          }}

        />

      </Head>

   
    <Banner />
    <Hero />
      <Introduction />
      <NavBar />
      <OurServices />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          
        }}
      >
      <title>
          CA SUPERIOR COURT CASES
        </title>
        <p>
          Origin is a member of the <b>California Superior Court Investigator Panel</b>. This means that we can provide comprehensive criminal case investigative services at no cost to qualified defendants.
        </p>
        <p>
        &nbsp;
        </p>
       <p>
         We also offer these services in partnership with law firms through our <b>fully integrated case review</b> process. Our highly experienced investigators can help make the difference in court.
        </p>
       <p>
        &nbsp;
        </p>
              <Button href="https://calendly.com/origin-investigation/client-consultation" target="_blank" color="red">
                Schedule a Consultation
              </Button>
        
      </Testimonial>
 
      <Investigation />
      <Testimonial
        id="testimonial-from-gerardo-stark"
         author={{
          
        }}
      >
       <title>
          SPECIALIZED DATA
        </title>
        <p>
          Origin's specialized data services can <b>uncover hidden informatio</b>n that can be valuable in criminal and civil cases. Our intelligence analysts can bring relevance to complex information. 

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
          <Button href="https://heyflow.id/specialized-data-request#start" target="_blank" color="red">
                Order Specialized Data Now
              </Button>
      
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <OurPeople />
      <Team />
      <Contact /> 
      <Footer />
      </>
  )
}
