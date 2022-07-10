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
				<div className={styles.toggler}>
					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
