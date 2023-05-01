import { tw } from 'twind';
import { PROJECTS } from '@/components/projects/constants/projects';

const ProjectsSection = () => (
  <section className={tw('bg-white pb-6')}>
    <div className={tw('max-w-7xl mx-auto p-4 sm:p-4 lg:p-8')}>
      <div className={tw('container mx-auto px-6 p-6 bg-white')}>
        <div className={tw('mb-16 text-center')}>
          <h4 className={tw('text-base text-indigo-600 font-semibold tracking-wide uppercase')}>Projects</h4>
          <p className={tw('mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900')}>
            Some projects I&apos;ve worked on
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
                    Platform
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sector
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                      <img className="w-12 h-12 rounded-full" sizes="12" src={item.icon} alt="Jese" />
                      <div className="pl-3">
                        <div className="text-base font-semibold">{item.name}</div>
                        <div className="font-normal text-gray-500">{item.description}</div>
                      </div>
                    </th>
                    <th className="px-4 py-4">{item.platform}</th>
                    <th className="px-4 py-4">{item.sector}</th>
                    <th className="px-6 py-4">
                      <a href={item.url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Visit
                      </a>
                    </th>
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

export default ProjectsSection;
