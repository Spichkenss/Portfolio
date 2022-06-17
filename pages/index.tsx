import type { NextPage } from 'next'
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
		<div
			className='flex flex-col justify-center items-center min-h-screen dark:bg-black select-none'
			onClick={() => toggleThemeHandler(theme)}
		>
			<Lottie
				options={defaultOptions}
				height={300}
				width={300}
				isClickToPauseDisabled={true}
			/>
			<h1 className='text-3xl text-black dark:text-white select-none'>
				Coming soon
			</h1>
		</div>
	)
}

export default Home
