import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Maps, Maps_maps } from '../model'
import { Header, Title, MapCard } from '.'
import styled from 'styled-components'
import { useField, useFormikContext } from 'formik'

export const GET_MAPS = gql`
  query Maps {
    maps {
      id
      name
      type
    }
  }
`

const MapGrid = styled.div`
	display:grid;
	width:100%;
	height:100%;
	gap:10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const MapSelector = () => {
	const [field] = useField('mapId')
	const { setFieldValue } = useFormikContext()

	const handleSelect = (map: string|undefined) => {
		setFieldValue('mapId', map)
	}

	const { loading, error, data } = useQuery<Maps>(GET_MAPS)
	if (!loading) {
		console.log('error:', error)
		console.log('data:', data?.maps)
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
				{data?.maps?.map(map => (
					<MapCard
						key={map?.name}
						id={map?.id}
						mapName={map?.name}
						handleSelect={handleSelect}
						field={field}
					/>
				))}
			</MapGrid>
		</>
	)
}

export default MapSelector
