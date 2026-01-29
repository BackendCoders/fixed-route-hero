import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/areas', label: 'Areas We Cover' },
		{ href: '/airport-transfers', label: 'Our Services' },
		{ href: '/why-us', label: 'About' },
		{ href: '/faq', label: 'Contact' },
	];

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border font-sans'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16 md:h-36'>
					{/* Logo */}
					<a
						href='/'
						className='flex items-center gap-2'
					>
						<div className='bg-primary p-3 rounded-lg flex items-center justify-center'>
							<span className='text-primary-foreground font-bold md:text-5xl text-2xl'>
								First Taxis
							</span>
						</div>
					</a>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center gap-6'>
						{navLinks.map((link) => (
							<NavLink
								key={link.href}
								to={link.href}
								className={({ isActive }) =>
									isActive
										? `transition-colors text-xl uppercase text-primary underline font-semibold`
										: `text-foreground transition-colors text-xl uppercase hover:text-primary hover:underline font-semibold`
								}
							>
								{link.label}
							</NavLink>
						))}
					</nav>

					{/* CTA Button */}
					<div className='flex items-center gap-4'>
						<Button
							variant='cta'
							size='lg'
							asChild
							className='hidden md:flex'
						>
							<a href='tel:01747-123456'>
								{/* <Phone className='h-4 w-4' /> */}
								<span className='text-xl text-white font-normal px-2 py-2'>
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
								<a
									key={link.href}
									href={link.href}
									className='text-muted-foreground hover:text-foreground transition-colors font-medium py-2'
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</a>
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
