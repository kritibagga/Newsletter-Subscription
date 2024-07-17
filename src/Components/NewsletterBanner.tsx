import React, { useState } from "react";
import Loader from "../assets/loaderCount1.gif";

const NewsletterBanner: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [showcard, setShowcard] = useState<boolean>(true);

	const handleSubscribe = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		setError("");

		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}
		setMessage(true);
	};

	const validateEmail = (email: string): boolean => {
		const re = /^[^@]+@[^@]+\.[^@]+$/;
		return re.test(email);
	};

	const handleCloseButton: () => void = () => {
		setShowcard(false);
	};

	return (
		<>
			{showcard && (
				<div className='fixed inset-0 flex items-center justify-center bg-hazyBlack bg-opacity-70 sm:w-auto'>
					<div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-xl z-[99998] visible pointer-events-auto cursor-pointer relative mx-auto sm:m-10 xsm:m-12'>
						<div className='flex justify-center items-center'>
							<img
								alt='subscription icon'
								src='https://cdn-icons-png.flaticon.com/128/9836/9836628.png'
							/>
						</div>
						<button
							onClick={handleCloseButton}
							data-testid='close-icon'>
							<i className='fa-solid fa-xmark absolute top-4 right-5 text-2xl cursor-pointer' />
						</button>
						<h1 className='text-4xl text-center my-6 text-pureBlack'>
							Subscribe to our Newsletter!
						</h1>
						<form
							onSubmit={handleSubscribe}
							className='mb-4 flex flex-col items-center'>
							<p className='text-sm pb-5 text-center'>
								Keep up to date on the latest in R&D tax credits and innovation
								funding.
							</p>
							{!message && (
								<>
									<div className='relative w-full flex items-center'>
										<label
											className='block text-lightGray text-sm font-bold mb-2'
											htmlFor='email'>
											<span className='sr-only'>Email Address</span>
											<i className=' fa-solid fa-envelope text-slate w-8 h-8 absolute top-2 left-3 text-xl' />
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className='pl-10 mb-4 outline-none border-0 bg-bgGray appearance-none rounded-lg w-full py-3 px-3 text-lightGray leading-tight focus:shadow-outline placeholder-slate'
											placeholder='Enter your email'
										/>
									</div>
									{error && (
										<p className='text-error text-xs italic mr-auto'>{error}</p>
									)}

									<div className='flex justify-center w-full'>
										<button
											type='submit'
											className='bg-pureBlack hover:bg-primary text-white py-2 px-4 rounded-lg mt-2 focus:outline-none focus:shadow-outline w-full'>
											Subscribe
											<span className='fa-solid fa-paper-plane ml-2'></span>
										</button>
									</div>
								</>
							)}
						</form>
						{message && (
							<div className='flex flex-col items-center w-full'>
								<img
									className='mr-2 size-12'
									src={Loader}
									alt='loader'
								/>
								<p className='mt-4 text-primary text-center'>
									Subscription Successful!
								</p>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default NewsletterBanner;
