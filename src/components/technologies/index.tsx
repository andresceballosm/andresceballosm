import { tw } from 'twind';
import { PROJECTS } from '@/components/projects/constants/projects';
import { TECHNOLOGIES } from '@/components/technologies/constants/technologies';

const TechnologiesSection = () => (
  <section className={tw('bg-white pb-6')}>
    <div className={tw('max-w-7xl mx-auto p-4 sm:p-6 lg:p-8')}>
      <div className={tw('container mx-auto px-6 p-6 bg-white')}>
        <div className={tw('mb-16 text-center')}>
          <h4 className={tw('text-base text-indigo-600 font-semibold tracking-wide uppercase')}>Technologies</h4>
          <p className={tw('mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900')}>
            Some technologies I&apos;ve used
          </p>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {TECHNOLOGIES.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                      {/* <img className="w-12 h-12 rounded-full" sizes="12" src={item.icon} alt="Jese" /> */}
                      <div className="pl-3">
                        <div className="text-base font-semibold">{item.name}</div>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Rating star</title>
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
                          00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 
                          1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 
                          00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 
                          00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
                          00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{item.rating}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
