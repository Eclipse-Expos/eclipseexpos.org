import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

interface Link {
  title: string;
  href: string;
}

interface Social {
  icon: JSX.Element;
  href: string;
}

export const SiteNavigationData = [
  {
    title: "Home",
    href: "landing",
  },
  {
    title: "Chi siamo",
    href: "about",
  },
  {
    title: "Cards",
    href: "cards",
  },
  {
    title: "Messaggio",
    href: "message",
  },
] as Link[];

export const ContactsData = [
  {
    title: "Generale",
    href: "mailto:italia@eclipseexpos.org",
  },
  {
    title: "Stampa",
    href: "mailto:press@eclipseexpos.org",
  },
  {
    title: "Affari",
    href: "mailto:business@eclipseexpos.org",
  },
  {
    title: "Globale",
    href: "mailto:global@eclipseexpos.org",
  },
  {
    title: "Carriere",
    href: "mailto:join@eclipseexpos.org",
  },
] as Link[];

export const SocialsData = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/eclipseexpos/",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/eclipseexpos/",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/Eclipse-Expos",
  },
  {
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@eclipseexposition",
  },
] as Social[];
