import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Maps } from '../../model'
import { Flexbox, Header, Title, MapCard } from '..'
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

export const MapSelector = () => {
	const [field] = useField('mapId')
	const { setFieldValue } = useFormikContext()

	const handleSelect = (map?: string) => {
		setFieldValue('mapId', map)
	}

	const { loading, data } = useQuery<Maps>(GET_MAPS)

	if (loading) return null

	return (
		<Flexbox
			full='horizontal'
			marginBetween='medium'
		>
			<Header>
				<Title
					tag='h1'
					italic
				>
					Map
				</Title>
			</Header>

			<MapGrid>
				{ data?.maps.map(map => (
					<MapCard
						key={map.name}
						id={map.id}
						mapName={map.name}
						handleSelect={handleSelect}
						field={field}
					/>
				))}
			</MapGrid>
		</Flexbox>
	)
}

const MapGrid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
