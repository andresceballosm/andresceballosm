import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw('bg-white pb-6')}>
    <div className={tw('max-w-7xl mx-auto p-4 sm:p-6 lg:p-8')}>
      <div className={tw('container mx-auto px-6 p-6 bg-white')}>
        <div className={tw('mb-16 text-center')}>
          <h4 className={tw('text-base text-indigo-600 font-semibold tracking-wide uppercase')}>Features</h4>
          <p className={tw('mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900')}>
            How we change the game
          </p>
        </div>
        <div className={tw('flex flex-wrap my-12')}>
          <div className={tw('w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8')}>
            <div className={tw('flex items-center mb-6')}>
              <Check width={20} height={20} fill="currentColor" className={tw('h-6 w-6 text-indigo-500')} />
              <div className={tw('ml-4 text-xl')}>Better relationship with followers</div>
            </div>
            <p className={tw('leading-loose text-gray-500')}>
              Respond to your followers on different social networks from a single app.
            </p>
          </div>
          <div className={tw('w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8')}>
            <div className={tw('flex items-center mb-6')}>
              <Check width={20} height={20} fill="currentColor" className={tw('h-6 w-6 text-indigo-500')} />
              <div className={tw('ml-4 text-xl')}>Analyze acceptance</div>
            </div>
            <p className={tw('leading-loose text-gray-500 ')}>
              We use machine learning to classify comments in positive, neutral, and negative.
            </p>
          </div>
          <div className={tw('w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8')}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw('h-6 w-6 text-indigo-500')} />
              <div className={tw('ml-4 text-xl')}>Save time</div>
            </div>
            <p className={tw('leading-loose text-gray-500')}>Save time reading rude comments.</p>
          </div>
          <div className={tw('w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8')}>
            <div className={tw('flex items-center mb-6')}>
              <Check width={20} height={20} fill="currentColor" className={tw('h-6 w-6 text-indigo-500')} />
              <div className={tw('ml-4 text-xl')}>Historic analytics</div>
            </div>
            <p className={tw('leading-loose text-gray-500')}>
              Look at graphs of the level of acceptance of your post by week, month or year from the result of the
              analysis of your posts.
            </p>
          </div>
          <div className={tw('w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8')}>
            <div className={tw('flex items-center mb-6')}>
              <Check width={20} height={20} fill="currentColor" className={tw('h-6 w-6 text-indigo-500')} />
              <div className={tw('ml-4 text-xl')}>Modern platform</div>
            </div>
            <p className={tw('leading-loose text-gray-500')}>
              Follow the comments of your posts on different social networks in one application.
            </p>
          </div>
          <div className={tw('w-full md:w-1/2 lg:w-1/3 p-8')}>
            <div className={tw('flex items-center mb-6')}>
              <Check width={20} height={20} fill="currentColor" className={tw('h-6 w-6 text-indigo-500')} />
              <div className={tw('ml-4 text-xl')}>Easy to use</div>
            </div>
            <p className={tw('leading-loose text-gray-500')}>
              With a single click, analyze hundreds or thousands of comments on demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
