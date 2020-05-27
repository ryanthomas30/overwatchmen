import React from 'react'
import { Flexbox, RoleBadge } from '../components'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

const RoleGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
`

const data = {
	labels: [1, 2, 3, 4, 5, 6, 7],
	datasets: [
		{
			lineTension: 0.1,
			borderCapStyle: 'butt',
			borderColor: 'rgba(75,192,192,1)',
			fill: false,
			data: [2500, 2520, 2510, 2530, 2543, 2532, 2555],
		},
	],
}

const Chart = () => (
	<div style={{ backgroundColor: 'white' }}>
		<h2>Line Example</h2>
		<Line data={data} />
		<RoleGrid>
			<Flexbox
				center
				padding='medium'
			>
				<RoleBadge
					role='tank'
					active
				/>
			</Flexbox>
			<Flexbox
				center
				padding='medium'
			>
				<RoleBadge role='damage' />
			</Flexbox>
			<Flexbox
				center
				padding='medium'
			>
				<RoleBadge role='support' />
			</Flexbox>
		</RoleGrid>
	</div>
)

export default Chart
