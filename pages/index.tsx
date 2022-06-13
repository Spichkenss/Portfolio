import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Lottie from 'react-lottie'
import loader from '../loader.json'

const Home: NextPage = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loader,
	}
	return (
		<div className={styles.container}>
			<Lottie options={defaultOptions} height={400} width={400} />
			<h1 className={styles.text}>Coming soon</h1>
		</div>
	)
}

export default Home
