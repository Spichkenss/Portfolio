import { useTheme } from '../hooks/useTheme'
import Moon from './svg/Moon'
import Sun from './svg/Sun'
import { motion } from 'framer-motion'

const ThemeSwitcher = () => {
	const { theme, toggleThemeHandler } = useTheme()
	return (
		<div onClick={() => toggleThemeHandler(theme)}>
			<motion.div
				whileTap={{
					rotate: '360deg',
					opacity: 0,
					scale: 0,
				}}
			>
				{theme === 'dark' ? <Moon /> : <Sun />}
			</motion.div>
		</div>
	)
}

export default ThemeSwitcher
