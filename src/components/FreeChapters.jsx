import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import emailjs from 'emailjs-com';

export function FreeChapters() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailAddress = e.target.elements['email-address'].value;
  
    // 使用您的 EmailJS 服务 ID、模板 ID 和用户 ID 更新以下值   https://www.emailjs.com/
    const serviceID = 'service_6ureu2q';
    const templateID = 'template_0jjieaz';
    const userID = 'PcVIawm6HMW7VKYcV';
  
    emailjs
      .send(serviceID, templateID, { emailAddress }, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        console.log('emailAddress:', emailAddress);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  
  
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-zinc-800 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get more information now
            </h2>
            <p className="mt-4 text-lg tracking-tight text-zinc-200">
              Enter your email address and we will send you detailed information, including our marketing book.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Get more information straight to your inbox{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-red-800 peer-focus:bg-zinc-800 peer-focus:ring-1 peer-focus:ring-red-800 sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Learn more
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  )
}
