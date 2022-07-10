import { useTheme } from '../hooks/useTheme'
import Moon from './svg/Moon'
import Sun from './svg/Sun'
import { motion } from 'framer-motion'

const ThemeSwitcher = () => {
	const { theme, toggleThemeHandler } = useTheme()

	return (
		<button onClick={() => toggleThemeHandler(theme)}>
			<motion.div
				whileTap={{
					rotate: '270deg',
					opacity: 0,
					scale: 0,
				}}
			>
				{theme === 'dark' ? <Moon /> : <Sun />}
			</motion.div>
		</button>
	)
}

export default ThemeSwitcher
