
import { ResolverFn } from 'apollo-server'
import moment from 'moment'

export const convertDateTime = (resolver?: ResolverFn) => (parent: any, args: any, context: any, info: any) => {
	let value = null
	// Use custom resolver
	if (!!resolver) value = resolver(parent, args, context, info)
	// Else use default parent value
	else value = parent[info.fieldName]
	return moment(value).format(args.format)
}
