import type { NextPage } from 'next'
import Text from '../components/Text'
import styles from './index.module.css'

const Home: NextPage = () => {
	return (
		<>
			<Text className={styles.title}>Home</Text>
		</>
	)
}

export default Home
