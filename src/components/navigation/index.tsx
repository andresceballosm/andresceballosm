import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import Link from 'next/link';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: 'Projects',
    href: '/',
  },
  {
    label: 'Technologies',
    href: '/',
  },
  {
    label: 'Medium',
    href: '/',
  },
];

const secondaryLinks = [
  {
    label: 'Book Call',
    href: 'https://calendly.com/ceballosmarandres/30min',
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw('p-2 text-gray-400')}
  >
    <span className={tw('sr-only')}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw('h-6 w-6')}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw('h-6 w-6')}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = ({ onPressMenu }: any) => (
  <div className={tw('md:hidden')}>
    <div className={tw('px-2 pt-2 pb-3 space-y-1 sm:px-3')}>
      {links.map((link: Link) => (
        <button
          type="button"
          onClick={() => onPressMenu(link.label)}
          className={tw('text-gray-500 block px-3 py-2 text-base font-medium')}
          key={link.label}
        >
          {link.label}
        </button>
      ))}
    </div>
    <div className={tw('pt-4 pb-3 border-t border-gray-400')}>
      <div className={tw('px-2 space-y-1')}>
        {secondaryLinks.map((link: Link) => (
          <Link
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw('block px-3 py-2 text-base font-medium text-gray-500')}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const goToProjects = () => {
    window.scrollTo({
      top: showMenu ? 1000 : 700,
      behavior: 'smooth',
    });
  };

  const goToMedium = () => {
    window.scrollTo({
      top: showMenu ? 7250 : 4000,
      behavior: 'smooth',
    });
  };

  const goToTechnologies = () => {
    window.scrollTo({
      top: showMenu ? 3500 : 1800,
      behavior: 'smooth',
    });
  };

  const onPressMenu = (label: string) => {
    switch (label) {
      case 'Projects':
        return goToProjects();
      case 'Technologies':
        return goToTechnologies();
      case 'Medium':
        return goToMedium();
      default:
        return null;
    }
  };

  return (
    <nav className={tw('bg-white')}>
      <div className={tw('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')}>
        <div className={tw('flex items-center justify-between h-24')}>
          <div className={tw('flex items-center')}>
            <div className={tw('flex-shrink-0')}>
              <img
                className="w-12 h-12 p-1 rounded-full ring-2 ring-ingigo-600"
                src="https://firebasestorage.googleapis.com/v0/b/commentup-prod.appspot.com/o/images%2Fa.png?alt=media&token=f0f0372b-2cb4-4c90-b5fc-77e285696740"
                alt="Bordered avatar"
              />
            </div>
            <div className={tw('hidden md:block')}>
              <div className={tw('ml-10 flex items-baseline space-x-4')}>
                {links.map((link: Link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => onPressMenu(link.label)}
                    className={tw('text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium')}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={tw('hidden md:block')}>
            <div className={tw('ml-4 flex items-center md:ml-6')}>
              {/* <Button modifier="border-0 mr-2">Contact sales</Button> */}
              {/* <Button modifier="border-0 mr-2">Log in</Button> */}
              <Button primary>
                <a href="https://calendly.com/ceballosmarandres/30min">Book Call</a>
              </Button>
            </div>
          </div>
          <div className={tw('-mr-2 flex md:hidden')}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu onPressMenu={onPressMenu} /> : null}
    </nav>
  );
};

export default Navigation;
