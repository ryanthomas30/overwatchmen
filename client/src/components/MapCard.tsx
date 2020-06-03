import React from 'react'
import styled from 'styled-components'
import { Card, Flexbox, Title } from '.'
import { theme } from '../constants'

interface MapCardProps {
	mapName: string
	handleSelect: (mapName:string) => void
	field: any
	className?: string
}

const MapCard = ({ mapName, handleSelect, field, className }:MapCardProps) => (
	<Card
		center
		onClick={() => { handleSelect(mapName) }}
		className={className}
	>
		<img
			width='100%'
			alt={mapName}
			src='https://picsum.photos/350/210'
			style={{ objectFit: 'cover' }}
		/>
		<Flexbox
			style={{ backgroundColor: field.value === mapName ? theme.yellow : theme.gray, position: 'absolute', bottom: 12, left: 0, borderRadius: '0 5px 5px 0' }}
			paddingVertical={7}
			paddingHorizontal={9}
		>

			<Title
				tag='h2'
				color='white'
				style={{ }}
			>
				{mapName}
			</Title>
		</Flexbox>
	</Card>
)

const StyledMapCard = styled(MapCard)`
  overflow:hidden;
  position:relative;
`

export default StyledMapCard
