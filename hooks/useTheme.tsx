import { EffectCallback, useEffect, useLayoutEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState<string>('')

	useEffect(() => {
		if (typeof window !== 'undefined')
			setTheme(localStorage.getItem('theme') as string)
		setTheme('light')
	}, [])

	const toggleThemeHandler = (currentTheme: string) => {
		currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
	}

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-mode', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	return { theme, toggleThemeHandler }
}
