import { tw } from 'twind';
import Button from '@/components/button';

const productLinks = ['Features', 'Customers', 'Platform', 'Pricing', 'Privacy', "What's new?"];
const aboutLinks = ['About Us', 'Careers', 'Leadership', 'Blog', 'Events', 'Press'];
const resourceLinks = [
  'Book Call',
  'Guides',
  'Tools',
  'Case studies',
  'Solutions',
  'FAQs',
  'Help Center',
  'Training',
  'Other resources',
];

const Footer = () => (
  <footer className={tw('bg-white border-t border-gray-400 pt-14 pb-16')}>
    <div className={tw('max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap')}>
      <div className={tw('mb-14 flex items-center w-full')}>
        <img
          className="w-12 h-12 p-1 rounded-full ring-2 ring-ingigo-600"
          src="https://firebasestorage.googleapis.com/v0/b/commentup-prod.appspot.com/o/images%2Fa.png?alt=media&token=f0f0372b-2cb4-4c90-b5fc-77e285696740"
          alt="Bordered avatar"
        />
        <p className={tw('text-4xl text-indigo-500 font-bold ml-2')}>andresceballosm</p>
      </div>

      <div className={tw('w-full lg:w-1/2')}>
        <p>Andrés Felipe Ceballos</p>
      </div>
      <div className={tw('w-full lg:w-1/2')}>
        <p>
          Location: <b className={tw('text-1xl text-indigo-700 font-bold')}>Bogota, Colombia - working remotely</b>
        </p>
      </div>
      <div className={tw('w-full lg:w-1/2')}>
        <a className={tw('text-1xl text-indigo-700 font-bold')} href="https://www.linkedin.com/in/andresceballosm/">
          Linkedin
        </a>
      </div>
      <div className={tw('w-full lg:w-1/2')}>
        <ul className={tw('text-lg font-light flex w-full')}>
          <li>
            <a>
              Email: <b className={tw('text-1xl text-indigo-700 font-bold')}>ceballosmarandres@gmail.com</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
