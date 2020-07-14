import React, { FC } from 'react'
import moment from 'moment'
import { Line, ChartData } from 'react-chartjs-2'
import { ChartData as ChartJSChartData } from 'chart.js'

import { Card } from '..'
import { UserMatches_user_matches } from '../../model'
import { theme } from '../../constants'

interface SparkChartProps {
	recentMatches?: UserMatches_user_matches[]
}

const SparkChart: FC<SparkChartProps> = ({ recentMatches }) => {
	console.log('recentMatches:', recentMatches)
	const skillRatings = recentMatches?.map(match => Number(match.skillRating)) || [0]
	const labels = recentMatches?.map(match => moment(match.endTime).format('M/D @ h:mmA'))
	console.log('skillRatings:', skillRatings)
	const data: ChartData<ChartJSChartData> = {
		labels,
		datasets: [
			{
				label: 'SR',
				borderCapStyle: 'butt',
				borderColor: theme.lightBlue,
				fill: false,
				data: skillRatings,
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
