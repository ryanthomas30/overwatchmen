import React from 'react'
import { UserMatches_user_matches } from '../../model'
import { Line } from 'react-chartjs-2'

interface SparkChartProps {
	recentMatches?: UserMatches_user_matches[]
}

const SparkChart = ({ recentMatches }: SparkChartProps) => {

	const skillRatings = recentMatches?.map(match => Number(match.skillRating)) || [0]

	return (
		<Line data={{ datasets: [{ label: 'SR', data: skillRatings }] }} />
	)
}

export default SparkChart
