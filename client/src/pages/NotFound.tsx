import React from 'react'
import styled from 'styled-components'

import { Flexbox } from '../components'

const Page = styled(Flexbox)`
	color: #272727;
	background-color: #f0f0f0;
`

const NotFound = () => (
	<Page
		full
		align='center'
		justify='center'
	>
		<h1 style={{ fontSize: '8em', margin: '12px 0' }} >
			404
		</h1>
		<h1 style={{ letterSpacing: '2px' }} >
			PAGE NOT FOUND
		</h1>
		<p>
			We could not find the page you were looking for.
		</p>
	</Page>
)

export default NotFound
