import type { NextPage } from 'next'
import Lottie from 'react-lottie'
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
	return (
		<div className='flex flex-col justify-center items-center h-screen bg-black'>
			<Lottie
				options={defaultOptions}
				height={300}
				width={300}
				isClickToPauseDisabled={true}
			/>
			<h1 className='text-white text-3xl'>Coming soon</h1>
		</div>
	)
}

export default Home
