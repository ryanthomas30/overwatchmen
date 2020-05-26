import React from 'react'
import { Formik, FormikConfig } from 'formik'

const isFunction = (obj: any): obj is Function =>
	typeof obj === 'function'

const Form = ({ children, ...other }: FormikConfig<any>) => (
	<Formik {...other} >
		{(props) =>
			<form
				onSubmit={(e) => e.preventDefault()}
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

export default Form
