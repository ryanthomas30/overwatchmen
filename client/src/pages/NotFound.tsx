import React from 'react'

import { Flexbox } from '../components'

const NotFound = () => (
	<Flexbox
		full
		align='center'
		justify='center'
	>
		<h1 style={{ fontSize: '4em', margin: '.25em 0' }} >
			404
		</h1>
		<label style={{ letterSpacing: '2px', fontWeight: 'bold' }} >
			PAGE NOT FOUND
		</label>
		<p>
			We could not find the page you were looking for.
		</p>
	</Flexbox>
)

export default NotFound
