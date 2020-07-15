import React, { FC, ReactNode } from 'react'

type Props = {
	fallBack: ReactNode
	loading?: boolean
}

export const LoadingBoundary: FC<Props> = ({ children, loading, fallBack }) => {
	if (!loading) {
		return <>{children}</>
	}
	return <>{fallBack}</>
}

