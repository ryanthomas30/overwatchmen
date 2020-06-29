import React from 'react'
import DateTime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import styled from 'styled-components'
import moment from 'moment'
import { useField, useFormikContext } from 'formik'

interface DateTimeProps {
	className?: string
}

const DateTimePicker = ({ className }:DateTimeProps) => {

	const [field] = useField('endTime')
	const { setFieldValue } = useFormikContext()

	const handleChange = (value: string|moment.Moment) => {
		setFieldValue('endTime', value)
	}

	return (
		<>
			<DateTime
				className={className}
				value={field.value}
				onChange={handleChange}
			/>
		</>
	)
}

const StyledDateTimePicker = styled(DateTimePicker)`
`

export default StyledDateTimePicker
