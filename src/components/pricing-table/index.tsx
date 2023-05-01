import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import Link from 'next/link';

const features = [
  'Analyze comments',
  'Classify comments',
  'Analytics',
  'Read and respond to comments from different social networks ',
  // `Nostrud duis tempor`,
  // `Consequat eiusmod`,
  // `Reprehenderit`,
  // `Adipisicing reprehenderit`,
];

const PricingTable = () => (
  <section className={tw('bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12')}>
    <div className={tw('relative max-w-7xl mx-auto mb-24')}>
      <div className={tw('overflow-hidden lg:max-w-none lg:flex')}>
        <div className={tw('py-8 px-6 md:px-0 lg:flex-shrink-1')}>
          <h2 className={tw('text-4xl lg:text-7xl font-bold text-gray-800 mb-12')}>Pricing</h2>
          <p className={tw('mt-6 text-base leading-6 text-gray-500')}>
            Simple and flexible. Only pay for what you use. Prices are per 1 token.
            <br />
            You can think of tokens as pieces of words, where 1,000 tokens are about 750 words. This paragraph is 35
            tokens. When you analyze your comments, the characters analyzed are counted as used tokens and thus the
            price of the analysis is determined.
          </p>
          <div className={tw('mt-8')}>
            <div className={tw('flex items-center')}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                )}
              >
                What is included
              </h3>
              <div className={tw('flex-1 border-t-2 border-gray-200')} />
            </div>
            <ul className={tw('mt-8 lg:grid lg:grid-cols-2')}>
              {features.map((feature) => (
                <li className={tw('flex items-center lg:col-span-1')} key={feature}>
                  <div className={tw('flex-shrink-0')}>
                    <Check className={tw('h-8 w-8 mr-3 mb-1')} />
                  </div>
                  <p className={tw('text-gray-600')}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw('text-lg font-medium text-gray-800')}>If you order now...</p>
          <div className={tw('my-4 flex items-center justify-center text-4xl leading-none font-bold text-gray-800')}>
            $0,00008/token
          </div>
          <Button primary modifier="mt-6">
            <Link href="https://calendly.com/ceballosmarandres/30min">Book Call</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
