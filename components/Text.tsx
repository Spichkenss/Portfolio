import { FC, HTMLAttributes, PropsWithChildren } from 'react'

interface Props {
	children: string
	className?: string | undefined
}

const Text: FC<PropsWithChildren<Props>> = ({ children, className }) => {
	return (
		<p className={[className, 'text-black dark:text-white'].join(' ')}>
			{children}
		</p>
	)
}

export default Text
