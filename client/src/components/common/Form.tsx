import React, { FC } from 'react'
import { Formik, FormikConfig } from 'formik'

const isFunction = (obj: any): obj is Function =>
	typeof obj === 'function'

export const Form: FC<FormikConfig<any>> = ({ children, ...other }) => (
	<Formik {...other} >
		{(props) =>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					if (!props.isSubmitting) { props.handleSubmit() }
				}}
				style={{ width: '100%' }}
			>
				{isFunction(children)
					? children(props)
					: children
				}
			</form>
		}
	</Formik>
)
