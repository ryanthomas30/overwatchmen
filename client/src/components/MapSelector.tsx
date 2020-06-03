import React from 'react'
import { Header, Title, MapCard } from '.'
import styled from 'styled-components'
import { theme } from '../constants'
import { useField, useFormikContext } from 'formik'
const MapGrid = styled.div`
  display:grid;
  width:100%;
  height:100%;
  gap:10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
const maps = ['Hanamura', 'Horizon Lunar Colony', 'Paris', 'Temple of Anubis', 'Volskaya Industries', 'Dorado', 'Havana', 'Junkertown', 'Rialto', 'Route66', 'Watchpoint: Gibraltar', 'Blizzard World', 'Eichenwalde', 'Holywood', "King's Row", 'Numbani', 'Busan', 'Ilios', 'Lijang Tower', 'Nepal', 'Oasis']

const MapSelector = () => {
	const [field] = useField('mapId')
	const { setFieldValue } = useFormikContext()

	const handleSelect = (map: string) => {
		setFieldValue('mapId', map)
	}
	return (
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
					<MapCard
						mapName={mapName}
						handleSelect={handleSelect}
						field={field}
					/>
				))}
			</MapGrid>
		</>
	)
}

export default MapSelector
