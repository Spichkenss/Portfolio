import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface Props {
	children: string
	href?: string | undefined
}

const Link = ({ children, href }: Props) => {
	const { pathname } = useRouter()
	return (
		<NextLink href={`${href}`}>
			<a
				style={{
					fontWeight: pathname === href ? 800 : 400,
					cursor: 'pointer',
					fontSize: 18,
				}}
			>
				{children}
			</a>
		</NextLink>
	)
}

export default Link
