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
    title: 'Sponsor',
    href: 'sponsor'
  },
  {
    title: 'Message',
    href: 'message'
  },
  {
    title: 'Join',
    href: 'join'
  }
]

const ContactsData = [
  {
    title: 'Contact Email',
    href: 'mailto:hello@eclipseexpos.org'
  },
  {
    title: 'Press Email',
    href: 'mailto:press@eclipseexpos.org'
  },
  {
    title: 'Business Email',
    href: 'mailto:business@eclipseexpos.org'
  },
]

const SocialsData = [
  // {
  //   icon: <FaSquareXTwitter />,
  //   href: ''
  // }
  {
    icon: <FaGithub />,
    href: "https://github.com/Eclipse-Expos"
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/eclipseexpos/'
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/company/eclipseexpos/'
  },
  {
    icon: <FaTiktok />,
    href: 'https://www.tiktok.com/@eclipseexposition'
  }
]

const Footer = () => {
  return (
    <div className={`bg-bg `}>
      <div className='py-[5rem] border-t-[1px] border-t-neutral-700 typography grid grid-cols-1 md:grid-cols-2 px-4 lg:grid-cols-3'>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='font-bold text-neutral-200'>© Eclipse Expositions</p>
            <p className='text-dimmed text-sm mt-4'>Let's break some records.</p>
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
        <div className='flex flex-col gap-2 mt-16 md:mt-0'>
          <h3 className='uppercase text-sm text-neutral-500 mb-4'>
            navigation
          </h3>
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
        <div className='flex flex-col gap-2 mt-16 md:mt-0'>
          <h3 className='uppercase text-sm text-neutral-500 mb-4'>
            contacts
          </h3>
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
  );
};

export default Footer;