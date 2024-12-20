import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Pattern } from '@/components/Pattern';
import emailjs from 'emailjs-com';

export function FreeChapters() {
  const [emailAddress, setEmailAddress] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [formStartTime, setFormStartTime] = useState(Date.now()); // Track form start time
  const [honeypot, setHoneypot] = useState(''); // Honeypot field state

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChangeEmail = (e) => {
    setEmailAddress(e.target.value);
    if (!!e.target.value && !validateEmail(e.target.value)) {
      setErrorText('Invalid email address');
    } else {
      setErrorText('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot validation
    if (honeypot) {
      console.log('Spam bot detected via honeypot!');
      return;
    }

    // Time-based validation
    const timeElapsed = Date.now() - formStartTime;
    if (timeElapsed < 2000) { // 2 seconds
      setErrorText('Form submission too fast. Please try again.');
      return;
    }

    if (!validateEmail(emailAddress)) {
      return;
    }

    const serviceID = 'service_9eddj4w';
    const templateID = 'template_0jjieaz';
    const userID = 'njnJ53uqzX5AysTcD';

    emailjs
      .send(serviceID, templateID, { emailAddress }, userID)
      .then((response) => {
        setIsSent(true);
        setEmailAddress('Information sent');
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        setErrorText('Error sending email');
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
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }} // Hidden field
            />
            <h3 className="text-base font-medium tracking-tight text-white">
              Get more information straight to your inbox{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="Email Address"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                  disabled={isSent}
                  value={emailAddress}
                  onChange={handleChangeEmail}
                />
                <div
                  className={`absolute inset-0 rounded-md border ${
                    !!errorText ? 'border-red-800' : 'border-white/20'
                  } peer-focus:border-white/50 peer-focus:bg-zinc-800 peer-focus:ring-1 peer-focus:ring-white/50 sm:rounded-xl`}
                />
                {!!errorText && (
                  <span className="absolute left-4 bottom-[-32px] text-sm text-red-800">
                    {errorText}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                color="white"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none disabled:opacity-100"
                disabled={isSent}
              >
                {isSent ? 'Thank You' : 'Learn More'}
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
}
