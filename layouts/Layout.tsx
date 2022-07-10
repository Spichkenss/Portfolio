import { ReactNode } from 'react'
import Navbar from './navbar/Navbar'
import styles from './Layout.module.css'

interface LayoutWithChildren {
	children: ReactNode
}

const Layout = ({ children }: LayoutWithChildren) => {
	return (
		<div>
			<Navbar />
			<main className={styles.main}>{children}</main>
		</div>
	)
}

export default Layout
