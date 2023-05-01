import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import ProjectsSection from '@/components/projects';
import TechnologiesSection from '@/components/technologies';

export default function Home() {
  return (
    <Page>
      <NextSeo title="andresceballosm" description="A TypeScript/Next.js" />
      <Header />
      <meta name="apple-itunes-app" content="app-id=1665658655, affiliate-data=myAffiliateData, app-argument=myURL" />
      <main>
        <ProjectsSection />
        <TechnologiesSection />
        <CasesSection />
      </main>
      <Footer />
    </Page>
  );
}
