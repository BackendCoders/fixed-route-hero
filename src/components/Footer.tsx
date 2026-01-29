import {
	Facebook,
	Twitter,
	Youtube,
	Video,
	Phone,
	Mail,
	ChevronUp,
	MessageCircleMore,
} from 'lucide-react';

export default function Footer() {
	return (
		<footer className='relative text-gray-200'>
			{/* Background */}
			<div className="absolute inset-0 bg-[url('/footer.jpg')] bg-cover bg-center" />
			<div className='absolute inset-0 bg-black/80' />

			<div className='relative z-10 mx-auto max-w-7xl px-6 py-24'>
				<div className='grid gap-16 md:grid-cols-3'>
					{/* ABOUT */}
					<div className='text-center'>
						<h3 className='mb-6 font-bold uppercase tracking-wide text-yellow-400'>
							About Us
						</h3>
						<p className='mb-8 leading-relaxed text-xl'>
							First Taxis provides reliable 24/7 taxi and airport transfer
							services across Gillingham, Shaftesbury, Mere, and Wincanton.
						</p>
						<button className='rounded bg-orange-500 px-8 py-3.5 text-white hover:bg-orange-600 transition'>
							BOOK A RIDE!
						</button>
					</div>

					{/* SOCIAL */}
					<div className='text-center'>
						<h3 className='mb-6 text-lg font-bold uppercase tracking-wide text-yellow-400'>
							Let's Get Social
						</h3>
						<p className='mb-8 leading-relaxed text-xl'>
							Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In
							his nemore temporibus consequuntur.
						</p>

						<div className='flex justify-center gap-5'>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<Facebook
									size={30}
									fill='black'
									className='border-none'
								/>
							</span>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<Twitter
									size={30}
									fill='black'
									className='border-none'
								/>
							</span>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<Youtube
									size={30}
									fill='black'
									className='border-none'
								/>
							</span>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<Video
									size={30}
									fill='black'
									className='border-none'
								/>
							</span>
						</div>
					</div>

					{/* CONTACT */}
					<div className='text-center text-xl'>
						<h3 className='mb-6 font-bold uppercase tracking-wide text-yellow-400'>
							Contact Us
						</h3>
						<p className='mb-8 leading-relaxed'>
							Vim ad prima vivendum consetetur viderer feugiat at pro, mea
							aperiam.
						</p>

						<ul className='space-y-4 text-base'>
							<li className='flex items-center gap-4'>
								<Phone
									size={18}
									className='text-yellow-400'
								/>
								(001) 555-1234
							</li>
							<li className='flex items-center gap-4'>
								<Mail
									size={18}
									className='text-yellow-400'
								/>
								office@yourwebsite.com
							</li>
							<li className='flex items-center gap-4'>
								<span className='text-yellow-400 text-xl'>
									<MessageCircleMore />
								</span>
								whatsapp
							</li>
						</ul>
					</div>
				</div>

				{/* Scroll top */}
				<div className='mt-20 flex justify-center'>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black hover:bg-yellow-500 transition'
					>
						<ChevronUp />
					</button>
				</div>
			</div>

			{/* Bottom bar */}
			<div className='relative z-10 border-t border-white/10 py-5 text-center text-base text-gray-400'>
				© 2026 First Taxis
			</div>
		</footer>
	);
}

/* ---------- Social Icon ---------- */
function SocialIcon({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-11 w-11 cursor-pointer items-center justify-center rounded bg-white/20 text-white hover:bg-yellow-400 hover:text-black transition'>
			{children}
		</div>
	);
}
