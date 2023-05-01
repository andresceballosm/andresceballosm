import { tw, css } from 'twind/css';
import Button from '@/components/button';
import {
  mdiReact,
  mdiNodejs,
  mdiLanguageHtml5,
  mdiAws,
  mdiGraphql,
  mdiLanguageTypescript,
  mdiNativescript,
  mdiGit,
} from '@mdi/js';
import Link from 'next/link';
import IconRounded from '@/components/IconRounded';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw('flex flex-col lg:flex-row max-w-4xl mx-auto items-center py-16 px-14 sm:px-6 lg:px-8')}>
      <div className="md:w-1/4 xs:w-full items-center">
        <img
          className="w-40 h-40 p-1 rounded-full ring-2 ring-ingigo-600"
          src="https://firebasestorage.googleapis.com/v0/b/commentup-prod.appspot.com/o/images%2Fa.png?alt=media&token=f0f0372b-2cb4-4c90-b5fc-77e285696740"
          alt="Bordered avatar"
        />
      </div>
      <div className="md:w-3/4 xs:w-full justify-center items-center">
        <h1
          className={tw(
            // eslint-disable-next-line max-len
            'font-sans font-bold text-exl md:text-4xl lg:text-5xl sm:mt-5 md:text-left text-center leading-snug text-gray-800',
          )}
        >
          Andrés Felipe Ceballos
        </h1>
        <div className={tw('max-w-xl items-center text-center')}>
          <p className={tw('mt-5 text-gray-500 md:text-left text-xl lg:text-3xl')}>
            {/* Save time classifying the comments of your posts. */}
            Sr Software Developer
          </p>
        </div>
        <div className={tw('mt-5 flex justify-start w-full')}>
          <Button primary>
            <Link href="https://calendly.com/ceballosmarandres/30min">Book Call</Link>
          </Button>
          <div className="ml-2">
            <Button classN="bg-black text-gray-100  hover:bg-gray-600">
              <Link href="https://github.com/andresceballosm">GitHub</Link>
            </Button>
          </div>
          <div className="ml-2">
            <Button>
              <Link href="https://drive.google.com/file/d/1pToThjllf7suJZ1qkne0_kGInvON47EX/view?usp=share_link">
                CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className={tw('flex  w-full')}>
      <div className={tw('mt-4 w-full')}>
        <p className={tw('font-mono uppercase text-center font-medium text-sm text-gray-600')}>Some technologies</p>
        <div className={tw('flex items-center justify-center mx-auto flex-wrap mt-5')}>
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiNodejs}
            color="warning"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiReact}
            color="info"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiLanguageHtml5}
            color="warning"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiAws}
            color="info"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiGraphql}
            color="info"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiLanguageTypescript}
            color="warning"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiNativescript}
            color="info"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
          <IconRounded
            w="w-24"
            h="h-24"
            size="64"
            icon={mdiGit}
            color="danger"
            className="md:mr-6 mb-6 md:mb-0 cursor-pointer hover:scale-105"
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
