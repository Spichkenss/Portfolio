import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface Props {
	children: string
	href?: string | undefined
}

const Link = ({ children, href }: Props) => {
	return (
		<NextLink href={`${href}`}>
			<a>{children}</a>
		</NextLink>
	)
}

export default Link
