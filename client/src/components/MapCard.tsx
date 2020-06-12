import React from 'react'
import styled from 'styled-components'
import { Card, Flexbox, Title } from '.'
import { FlexboxProps } from './Flexbox'

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
		<MapTitleCard
			active={field.value === mapName}
			paddingVertical={7}
			paddingHorizontal={12}
		>

			<Title
				tag='h2'
				color='white'
			>
				{mapName}
			</Title>
		</MapTitleCard>
	</Card>
)

interface MapTitleCardProps extends FlexboxProps {
	active?: boolean
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const UnstyledMapTitleCard = ({ active, children, ...other }: MapTitleCardProps) => (
	<Flexbox {...other} >
		{children}
	</Flexbox>
)

const MapTitleCard = styled(UnstyledMapTitleCard)`
	background-color: ${({ active, theme }) => active ? theme.yellow : theme.gray};
	position: absolute;
	bottom: 15px;
	left: 0px;
	border-radius: 0 8px 8px 0;
`

const StyledMapCard = styled(MapCard)`
	overflow: hidden;
	position: relative;
`

export default StyledMapCard
