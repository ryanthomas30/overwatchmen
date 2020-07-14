import React, { FC } from 'react'
import moment from 'moment'
import { Line, ChartData } from 'react-chartjs-2'
import { ChartData as ChartJSChartData, ChartPoint } from 'chart.js'

import { Card } from '..'
import { UserMatches_user_tankMatches, UserMatches_user_damageMatches, UserMatches_user_supportMatches } from '../../model'
import { theme } from '../../constants'

interface SparkChartProps {
	tankMatches?: UserMatches_user_tankMatches[]
	damageMatches?: UserMatches_user_damageMatches[]
	supportMatches?: UserMatches_user_supportMatches[]
}

const SparkChart: FC<SparkChartProps> = ({ tankMatches, damageMatches, supportMatches }) => {
	const tankData: ChartPoint[] = tankMatches?.map(({ skillRating, endTime }) => ({
		y: skillRating,
		x: moment(endTime).format('M/D @ h:mmA'),
	})) || []
	const damageData: ChartPoint[] = damageMatches?.map(({ skillRating, endTime }) => ({
		y: skillRating,
		x: moment(endTime).format('M/D @ h:mmA'),
	})) || []
	const supportData: ChartPoint[] = supportMatches?.map(({ skillRating, endTime }) => ({
		y: skillRating,
		x: moment(endTime).format('M/D @ h:mmA'),
	})) || []

	// const tankSr = tankMatches?.map(match => Number(match.skillRating)) || [0]
	// const damageSr = damageMatches?.map(match => Number(match.skillRating)) || [0]
	// const supportSr = supportMatches?.map(match => Number(match.skillRating)) || [0]
	const labels = [...tankMatches!, ...damageMatches!, ...supportMatches!]
		.sort((a, b) => moment(a.endTime).diff(b.endTime))
		.map(match => moment(match.endTime).format('M/D @ h:mmA'))
	console.log('labels:', labels)
	const data: ChartData<ChartJSChartData> = {
		labels,
		datasets: [
			{
				label: 'Tank',
				borderCapStyle: 'butt',
				borderColor: theme.yellow,
				fill: false,
				data: tankData,
			},
			{
				label: 'Damage',
				borderCapStyle: 'butt',
				borderColor: theme.red,
				fill: false,
				data: damageData,
			},
			{
				label: 'Support',
				borderCapStyle: 'butt',
				borderColor: theme.lightBlue,
				fill: false,
				data: supportData,
			},
		],
	}

	return (
		<Card
			full
			padding='large'
		>
			<Line data={data} />
		</Card>
	)
}

export default SparkChart
