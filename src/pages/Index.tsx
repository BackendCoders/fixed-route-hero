import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AreasSection from '@/components/AreasSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';

const Index = () => {
	const heroRef = useRef<HTMLElement>(null);

	return (
		<>
			<Helmet>
				<title>
					First Taxis | Reliable Local & Airport Taxi Service | Gillingham,
					Shaftesbury, Mere
				</title>
				<meta
					name='description'
					content='24/7 local taxi and airport transfer service in Gillingham, Shaftesbury, Mere & Wincanton. Fixed prices, licensed drivers. Call 01747 123456 for immediate pickup.'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<link
					rel='canonical'
					href='https://firsttaxis.co.uk'
				/>
			</Helmet>

			<div className='min-h-screen'>
				<Header heroRef={heroRef} />
				<main ref={heroRef}>
					<HeroSection />
					<ServicesSection />
					<AreasSection />
					<WhyChooseUsSection />
					<FAQSection />
					<CTASection />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Index;
