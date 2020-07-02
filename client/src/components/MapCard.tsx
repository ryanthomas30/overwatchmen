import React from 'react'
import styled from 'styled-components'

import { Card, Flexbox, Title } from '.'
import { FlexboxProps } from './Flexbox'
import { replaceUnderscores } from '../util'
import { MapName } from '../model'

import Blizzard_World from '../assets/maps/blizzard-world.jpg'
import Busan from '../assets/maps/busan.jpg'
import Dorado from '../assets/maps/dorado.jpg'
import Eichenwalde from '../assets/maps/eichenwalde.jpg'
import Hanamura from '../assets/maps/hanamura.jpg'
import Havana from '../assets/maps/havana.jpg'
import Hollywood from '../assets/maps/hollywood.jpg'
import Horizon_Lunar_Colony from '../assets/maps/horizon-lunar-colony.jpg'
import Ilios from '../assets/maps/ilios.jpg'
import Junkertown from '../assets/maps/junkertown.jpg'
import Kings_Row from '../assets/maps/kings-row.jpg'
import Lijiang_Tower from '../assets/maps/lijiang-tower.jpg'
import Nepal from '../assets/maps/nepal.jpg'
import Numbani from '../assets/maps/numbani.jpg'
import Oasis from '../assets/maps/oasis.jpg'
import Paris from '../assets/maps/paris.jpg'
import Rialto from '../assets/maps/rialto.jpg'
import Route_66 from '../assets/maps/route-66.jpg'
import Temple_of_Anubis from '../assets/maps/temple-of-anubis.jpg'
import Volskaya_Industries from '../assets/maps/volskaya-industries.jpg'
import Watchpoint_Gibraltar from '../assets/maps/watchpoint-gibraltar.jpg'

interface MapCardProps {
	mapName: MapName
	handleSelect: (mapName?: string) => void
	field?: any
	className?: string
	id?: string
}

const mapImages = {
	Blizzard_World,
	Busan,
	Dorado,
	Eichenwalde,
	Hanamura,
	Havana,
	Hollywood,
	Horizon_Lunar_Colony,
	Ilios,
	Junkertown,
	Kings_Row,
	Lijiang_Tower,
	Nepal,
	Numbani,
	Oasis,
	Paris,
	Rialto,
	Route_66,
	Temple_of_Anubis,
	Volskaya_Industries,
	Watchpoint_Gibraltar,
}

const MapCard = ({ mapName, handleSelect, field, className, id }: MapCardProps) => (
	<Card
		center
		onClick={() => { handleSelect(id) }}
		className={className}
	>
		<img
			width='100%'
			alt={mapName}
			src={mapImages[mapName]}
			style={{ objectFit: 'cover' }}
		/>
		<MapTitleCard
			active={field.value === id}
			paddingVertical={7}
			paddingHorizontal={12}
		>

			<Title
				tag='h2'
				color='white'
			>
				{replaceUnderscores(mapName)}
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
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

const StyledMapCard = styled(MapCard)`
	overflow: hidden;
	position: relative;
`

export default StyledMapCard
