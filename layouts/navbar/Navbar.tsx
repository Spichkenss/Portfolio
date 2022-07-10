import Link from '../../components/Link'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import styles from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.links}>
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/works'>Works</Link>
			</div>
			<div>
				<ThemeSwitcher />
			</div>
		</nav>
	)
}

export default Navbar
