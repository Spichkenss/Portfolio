import { useLayoutEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState<string>((): string => {
		if (typeof window !== 'undefined')
			return localStorage.getItem('theme') as string
		return 'light'
	})

	const toggleThemeHandler = (currentTheme: string) => {
		currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
	}

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-mode', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	return { theme, toggleThemeHandler }
}
