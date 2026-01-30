import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
	heroRef: React.RefObject<HTMLElement>;
}

const Header = ({ heroRef }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/areas', label: 'Areas We Cover' },
		{
			href: '/airport-transfers',
			label: 'Our Services',
			hasDropdown: true,
			subItems: [
				{ href: '/airport-transfers', label: 'Air Transport' },
				{ href: '/local-taxi', label: 'Local Taxi Service' },
			],
		},
		{ href: '/why-us', label: 'About' },
		{ href: '/faq', label: 'Contact' },
	];

	useEffect(() => {
		const handleScroll = () => {
			if (!heroRef.current) return;

			const heroHeight = heroRef.current.offsetHeight;
			const triggerPoint = heroHeight * 0.01;

			setIsLight(window.scrollY >= triggerPoint);
		};

		handleScroll(); // initial check
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [heroRef]);

	return (
		<header
			className={`
        fixed top-0 left-0 w-full z-50
        transition-colors duration-300 ease-in-out
        ${isLight ? 'bg-[hsl(var(--header-bg))]/90 backdrop-blur-sm' : ''}
        text-[hsl(var(--header-fg))]
        ${isLight ? 'header-light' : 'header-dark dark'}
      `}
		>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16 md:h-24'>
					{/* Logo */}
					<a
						href='/'
						className='flex items-center gap-2'
					>
						<div className='bg-primary p-3 rounded flex items-center justify-center'>
							<span className='text-primary-foreground font-bold md:text-3xl text-xl'>
								First Taxis
							</span>
						</div>
					</a>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center gap-6'>
						{navLinks.map((link) => (
							<div
								key={link.href}
								className='relative'
								onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
								onMouseLeave={() =>
									link.hasDropdown && setIsServicesOpen(false)
								}
							>
								{link.hasDropdown ? (
									<>
										<NavLink
											to={link.href}
											className={({ isActive }) =>
												isActive
													? `transition-colors text-base uppercase text-primary underline font-semibold flex items-center gap-1`
													: `text-foreground transition-colors text-base uppercase hover:text-primary hover:underline font-semibold flex items-center gap-1`
											}
										>
											{link.label}
											<ChevronDown
												className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
											/>
										</NavLink>

										{/* Dropdown Menu */}
										{isServicesOpen && (
											<div className='absolute top-[70%] left-0 mt-2 bg-[hsl(var(--header-bg))]/90 backdrop-blur-sm border border-border rounded-lg shadow-lg min-w-[200px] py-2'>
												{link.subItems?.map((subItem) => (
													<NavLink
														key={subItem.href}
														to={subItem.href}
														className={({ isActive }) =>
															isActive
																? `block px-4 py-2 text-base uppercase text-primary font-semibold hover:bg-primary/10 transition-colors`
																: `block px-4 py-2 text-base uppercase text-foreground font-semibold hover:bg-primary/10 hover:text-primary transition-colors`
														}
													>
														{subItem.label}
													</NavLink>
												))}
											</div>
										)}
									</>
								) : (
									<NavLink
										to={link.href}
										className={({ isActive }) =>
											isActive
												? `transition-colors text-base uppercase text-primary underline font-semibold`
												: `text-foreground transition-colors text-base uppercase hover:text-primary hover:underline font-semibold`
										}
									>
										{link.label}
									</NavLink>
								)}
							</div>
						))}
					</nav>

					{/* CTA Button */}
					<div className='flex items-center gap-4'>
						<Button
							variant='cta'
							size='lg'
							asChild
							className='hidden md:flex rounded'
						>
							<a href='tel:01747-123456'>
								{/* <Phone className='h-4 w-4' /> */}
								<span className='text-base text-white font-normal p-1'>
									Book Now
								</span>
							</a>
						</Button>

						{/* Mobile Menu Toggle */}
						<button
							className='lg:hidden p-2'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label='Toggle menu'
						>
							{isMenuOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='lg:hidden py-4 border-t border-border'>
						<nav className='flex flex-col gap-4'>
							{navLinks.map((link) => (
								<div key={link.href}>
									<a
										href={link.href}
										className='text-muted-foreground hover:text-foreground transition-colors font-medium py-2 flex items-center justify-between'
										onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
									>
										{link.label}
										{link.hasDropdown && <ChevronDown className='w-4 h-4' />}
									</a>
									{link.hasDropdown && link.subItems && (
										<div className='ml-4 mt-2 flex flex-col gap-2'>
											{link.subItems.map((subItem) => (
												<a
													key={subItem.href}
													href={subItem.href}
													className='text-muted-foreground hover:text-foreground transition-colors font-medium py-1 text-sm'
													onClick={() => setIsMenuOpen(false)}
												>
													{subItem.label}
												</a>
											))}
										</div>
									)}
								</div>
							))}
							<Button
								variant='cta'
								size='lg'
								asChild
								className='mt-4'
							>
								<a href='tel:01747-123456'>
									<Phone className='w-4 h-4' />
									Call Now: 01747 123456
								</a>
							</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
