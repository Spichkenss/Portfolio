import type { NextPage } from 'next'
import Link from 'next/link'
import Lottie from 'react-lottie'
import { useTheme } from '../hooks/useTheme'

import loader from '../loader.json'

const Home: NextPage = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loader,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	const { theme, toggleThemeHandler } = useTheme()

	return (
		<div className='flex flex-col justify-center items-center min-h-screen dark:bg-black'>
			<button
				onClick={() => toggleThemeHandler(theme)}
				className='bg-black text-white dark:bg-white dark:text-black p-2 rounded-xl'
			>
				{theme === 'dark' ? 'Dark' : 'Light'}
			</button>
			<div className='pointer-events-none'>
				<Lottie
					options={defaultOptions}
					height={300}
					width={300}
					isClickToPauseDisabled={true}
				/>
			</div>
			<h1 className='text-3xl text-black dark:text-white select-none'>
				Coming soon
			</h1>
		</div>
	)
}

export default Home
