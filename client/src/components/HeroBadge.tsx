import React from 'react'
import styled from 'styled-components'

import Flexbox from './Flexbox'
import { ReactComponent as Bastion } from '../assets/playerIcons/bastion.svg'
import { ReactComponent as Dva } from '../assets/playerIcons/dva.svg'
import { ReactComponent as Genji } from '../assets/playerIcons/genji.svg'
import { ReactComponent as Hanzo } from '../assets/playerIcons/hanzo.svg'
import { ReactComponent as Junkrat } from '../assets/playerIcons/junkrat.svg'
import { ReactComponent as Lucio } from '../assets/playerIcons/lucio.svg'
import { ReactComponent as Mccree } from '../assets/playerIcons/mccree.svg'
import { ReactComponent as Mei } from '../assets/playerIcons/mei.svg'
import { ReactComponent as Mercy } from '../assets/playerIcons/mercy.svg'
import { ReactComponent as Pharah } from '../assets/playerIcons/pharah.svg'
import { ReactComponent as Reaper } from '../assets/playerIcons/reaper.svg'
import { ReactComponent as Reinhardt } from '../assets/playerIcons/reinhardt.svg'
import { ReactComponent as Roadhog } from '../assets/playerIcons/roadhog.svg'
import { ReactComponent as Soldier76 } from '../assets/playerIcons/soldier76.svg'
import { ReactComponent as Symmetra } from '../assets/playerIcons/symmetra.svg'
import { ReactComponent as Torbjorn } from '../assets/playerIcons/torbjorn.svg'
import { ReactComponent as Tracer } from '../assets/playerIcons/tracer.svg'
import { ReactComponent as Widowmaker } from '../assets/playerIcons/widowmaker.svg'
import { ReactComponent as Winston } from '../assets/playerIcons/winston.svg'
import { ReactComponent as Zarya } from '../assets/playerIcons/zarya.svg'
import { ReactComponent as Zenyatta } from '../assets/playerIcons/zenyatta.svg'

export type HeroName =
	'bastion'
	| 'dva'
	| 'genji'
	| 'hanzo'
	| 'junkrat'
	| 'lucio'
	| 'mccree'
	| 'mei'
	| 'mercy'
	| 'pharah'
	| 'reaper'
	| 'reinhardt'
	| 'roadhog'
	| 'soldier76'
	| 'symmetra'
	| 'torbjorn'
	| 'tracer'
	| 'widowmaker'
	| 'winston'
	| 'zarya'
	| 'zenyatta'

const heroMap = {
	bastion: Bastion,
	dva: Dva,
	genji: Genji,
	hanzo: Hanzo,
	junkrat: Junkrat,
	lucio: Lucio,
	mccree: Mccree,
	mei: Mei,
	mercy: Mercy,
	pharah: Pharah,
	reaper: Reaper,
	reinhardt: Reinhardt,
	roadhog: Roadhog,
	soldier76: Soldier76,
	symmetra: Symmetra,
	torbjorn: Torbjorn,
	tracer: Tracer,
	widowmaker: Widowmaker,
	winston: Winston,
	zarya: Zarya,
	zenyatta: Zenyatta,
}

interface Props {
	hero: HeroName
	active?: boolean
	className?: string
}

const HeroBadge = ({ hero, className }: Props) => {

	const HeroSVG = heroMap[hero]
	return (
		<Flexbox
			align='center'
			justify='center'
			height={72}
			width={72}
			padding='small'
			className={className}
		>
			<HeroSVG />
		</Flexbox>
	)
}

const StyledHeroBadge = styled(HeroBadge)`
	border-radius: 50%;
	overflow: hidden;
	background-color: ${({ theme, active }) => active ? theme.yellow : theme.gray};
`

export default StyledHeroBadge
