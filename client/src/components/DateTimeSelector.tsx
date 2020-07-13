import React, { FC } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useField, useFormikContext } from 'formik'

import { Flexbox, Input, Header, Title } from './common'

interface DateTimeProps {
	name?: string
	className?: string
}

export const DateTimeSelector: FC<DateTimeProps> = ({ name = 'endTime', className }) => {
	const [field, { error, touched }] = useField(name)
	const { setFieldValue } = useFormikContext()

	const handleChange = (value: Date) => {
		setFieldValue(name, value)
	}

	return (
		<>
			<Header
				align='baseline'
				marginBetween='small'
			>
				<Title
					tag='h1'
					italic
				>
					Match Time
				</Title>
				<Title
					tag='h3'
					italic
					color='#e06767'
				>
					{touched && error}
				</Title>
			</Header>
			<Flexbox
				align='start'
				full='horizontal'
			>
				<DatePicker
					selected={field.value}
					onChange={handleChange}
					showTimeSelect
					timeFormat='h:mm aa'
					timeIntervals={10}
					timeCaption='Time'
					dateFormat='MMMM d, yyyy h:mm aa'
					customInput={<Input placeholder='Enter a date' />}
					showPopperArrow={false}
					className={className}
				/>
			</Flexbox>
		</>
	)
}
