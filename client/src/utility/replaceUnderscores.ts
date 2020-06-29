const replaceUnderscores = (string:string | undefined) => string?.replace(/(__|_)/g, (m) => {
	switch (m) {
		case '__': return '.'
		case '_': return ' '
		default: return ''
	}
})

export default replaceUnderscores
