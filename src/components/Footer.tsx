import {
	Facebook,
	Youtube,
	Video,
	Phone,
	Mail,
	ChevronUp,
	MessageCircleMore,
	Instagram,
} from 'lucide-react';

export default function Footer() {
	return (
		<footer className='relative text-gray-200'>
			{/* Background */}
			<div className="absolute inset-0 bg-[url('/footer.jpg')] bg-cover bg-center" />
			<div className='absolute inset-0 bg-black/80' />

			<div className='relative z-10 mx-auto max-w-8xl px-6 py-10'>
				<div className='grid gap-16 md:grid-cols-3'>
					{/* ABOUT */}
					<div className='text-center'>
						<h3 className='mb-6 font-bold uppercase tracking-wide text-yellow-400'>
							About Us
						</h3>
						<p className='mb-8 leading-relaxed text-lg'>
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
							You can connect with us on social media using the links below.
						</p>

						<div className='flex justify-center gap-5'>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<a
									href='https://www.facebook.com/Firsttaxisdorset'
									target='_blank'
								>
									<Facebook
										size={30}
										fill='black'
										className='border-none'
									/>
								</a>
							</span>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<a
									href='https://www.instagram.com/firsttaxis'
									target='_blank'
								>
									<Instagram
										size={30}
										fill='black'
										className='border-none'
									/>
								</a>
							</span>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<a
									href='https://www.youtube.com/'
									target='_blank'
								>
									<Youtube
										size={30}
										fill='black'
										className='border-none'
									/>
								</a>
							</span>
							<span className='rounded-xl bg-gray-400 hover:bg-yellow-500 p-2'>
								<a
									href='https://meet.google.com/'
									target='_blank'
								>
									<Video
										size={30}
										fill='black'
										className='border-none'
									/>
								</a>
							</span>
						</div>
					</div>

					{/* CONTACT */}
					<div className='text-center text-xl'>
						<h3 className='mb-6 font-bold uppercase tracking-wide text-yellow-400'>
							Contact Us
						</h3>
						<p className='mb-8 leading-relaxed'>
							We’ll be happy to respond to your message—please feel free to
							reach out anytime.
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
								hello@firsttaxis.co.uk
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
				<div className='mt-10 flex justify-center'>
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
