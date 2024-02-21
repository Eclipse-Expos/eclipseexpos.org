import {
  SiteNavigationData,
  ContactsData,
  SocialsData,
} from '../../data/Footer.data';

const Footer = () => {
  return (
    <div className={`bg-bg py-[5rem]`}>
      <div className='py-[5rem] border-t-[1px] border-t-neutral-700 typography flex flex-wrap gap-8 justify-stretch'>
        <div className='mr-auto flex flex-col justify-between'>
          <div>
            <p className='mb-6'>© COPYRIGHT</p>
            <p className='font-bold text-neutral-200'>Eclipse Expositions</p>
            <p className='text-dimmed'>151 Charles St W, Kitchener, ON</p>
          </div>
          <div className='flex gap-2 mt-4'>
            {SocialsData.map((social, index) => {
              return (
                <div>
                  <a href={social.href} key={`social-${index}`}>
                    {social.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 min-w-[50%]'>
          <div className='flex flex-col gap-2 md:mt-0'>
            <p className='uppercase text-neutral-500 mb-4'>navigation</p>
            {SiteNavigationData.map((link, index) => {
              return (
                <span
                  key={`footer-nav-${index}`}
                  onClick={() =>
                    document.getElementById(link.href)?.scrollIntoView()
                  }
                  className='w-max !text-accent hover:underline cursor-pointer'
                >
                  {link.title}
                </span>
              );
            })}
          </div>

          <div className='flex flex-col gap-2 md:mt-0'>
            <p className='uppercase text-neutral-500 mb-4'>contacts</p>
            {ContactsData.map((link, index) => {
              return (
                <a
                  key={`footer-nav-${index}`}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='w-max !text-accent hover:underline'
                >
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
