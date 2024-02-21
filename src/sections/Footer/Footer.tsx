// import {
//   LinksAndContactsData,
//   SiteNavigationData,
// } from '../../data/Footer.data';
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin,FaTiktok } from "react-icons/fa6";

const SiteNavigationData = [
  {
    title: 'Home',
    href: 'landing'
  },
  {
    title: 'About',
    href: 'about'
  },
  {
    title: 'Cards',
    href: 'cards'
  },
  {
    title: 'Message',
    href: 'message'
  }
]

const ContactsData = [
  {
    title: 'General',
    href: 'mailto:hello@eclipseexpos.org'
  },
  {
    title: 'Press',
    href: 'mailto:press@eclipseexpos.org'
  },
  {
    title: 'Business',
    href: 'mailto:business@eclipseexpos.org'
  },
  {
    title: 'Global',
    href: 'mailto:global@eclipseexpos.org'
  }
]

const SocialsData = [
  // {
  //   icon: <FaSquareXTwitter />,
  //   href: ''
  // }
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/eclipseexpos/'
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/company/eclipseexpos/'
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Eclipse-Expos"
  },
  {
    icon: <FaTiktok />,
    href: 'https://www.tiktok.com/@eclipseexposition'
  }
]

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
            {
              SocialsData.map(
                (social, index) => {
                  return (
                    <div>
                      <a href={social.href} key={`social-${index}`}>
                        {social.icon}
                      </a>
                    </div>
                  )
                }
              )
            }
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 min-w-[50%]'>
          <div className='flex flex-col gap-2 md:mt-0'>
            <p className='uppercase text-neutral-500 mb-4'>
              navigation
            </p>
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
            <p className='uppercase text-neutral-500 mb-4'>
              contacts
            </p>
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