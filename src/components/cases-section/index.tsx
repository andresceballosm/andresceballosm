import { tw } from 'twind';
// import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

// const ParticleBg = () => (
//   <Particles
//     params={{
//       particles: {
//         number: {
//           value: 400,
//           density: {
//             enable: true,
//             value_area: 3000,
//           },
//         },
//         line_linked: {
//           enable: false,
//         },
//         move: {
//           direction: 'right',
//           speed: 0.3,
//         },
//         size: {
//           value: 1,
//         },
//         opacity: {
//           anim: {
//             enable: true,
//             speed: 0.5,
//             opacity_min: 0.1,
//           },
//         },
//       },
//       interactivity: {
//         events: {
//           onclick: {
//             enable: false,
//           },
//         },
//       },
//       retina_detect: true,
//     }}
//   />
// );

const articles = [
  {
    title: 'Create FlatList Animation with Maps on React Native.',
    image: '/images/case-1.webp',
    alt: 'Proident pariatur est.',
    url: 'https://medium.com/@ceballosmarandres/create-flatlist-animation-with-maps-on-react-native-ca1d6e1620f8',
  },
  {
    title: 'React Native E-commerce App with AR.',
    image: '/images/case-2.webp',
    alt: 'Proident pariatur est.',
    url: 'https://medium.com/@ceballosmarandres/react-native-e-commerce-app-with-ar-24cace2f213a',
  },
];

const CasesSection = () => (
  <section>
    <div className={tw('w-full min-h-screen bg-gray-900 relative')}>
      <div className={tw('max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40')}>
        <h1 className={tw('text-white text-4xl lg:text-7xl font-bold text-center')}>Writing...</h1>
        <p className={tw('text-white text-gray-400 text-center text-xl mt-12')}>Writing on Medium</p>
        <div className={tw('mx-auto pt-24')}>
          <div className={tw('w-full flex flex-wrap justify-around')}>
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.url}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw('h-64 z-20')}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw('h-full w-full object-cover overflow-hidden rounded')}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw('p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative')}>
                  {/* <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>Case study</p> */}
                  <p className={tw('text-gray-500 text-center pb-1 text-sm')}>{article.title}</p>
                </div>
              </a>
            ))}
            {/* <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
              )}
            >
              See all case studies
              <Arrow className={tw('h-6 w-6 fill-current ml-2')} />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
