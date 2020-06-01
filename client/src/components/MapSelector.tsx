import React from 'react'
import { Header, Title, Card } from '.'
import styled from 'styled-components'
const MapGrid = styled.div`
  display:grid;
  width:100%;
  height:100%;
  gap:10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
const maps = ['Hanamura', 'Horizon Lunar Colony', 'Paris', 'Temple of Anubis', 'Volskaya Industries', 'Dorado', 'Havana', 'Junkertown', 'Rialto', 'Route66', 'Watchpoint: Gibraltar', 'Blizzard World', 'Eichenwalde', 'Holywood', "King's Row", 'Numbani', 'Busan', 'Ilios', 'Lijang Tower', 'Nepal', 'Oasis']

const MapSelector = () => (
	<>
		<Header>
			<Title
				tag='h1'
				italic
				color='white'
			>
				Map
			</Title>
		</Header>
		<MapGrid>
			{maps.map(mapName => (
				<Card
					center
					padding='medium'
					key={mapName}
				>
					<img
						width='100%'
						alt={mapName}
						src='https://picsum.photos/350/210'
						style={{ objectFit: 'cover' }}
					/>
					<Title tag='h2'>
						{mapName}
					</Title>
				</Card>
			))}
		</MapGrid>
	</>
)

export default MapSelector
