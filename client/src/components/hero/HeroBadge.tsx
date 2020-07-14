import React from 'react'

import { Badge, BadgeProps } from '../'
import { HeroName } from '../../model'
import { replaceUnderscores } from '../../util'

import { ReactComponent as Bastion } from '../../assets/playerIcons/bastion.svg'
import { ReactComponent as Dva } from '../../assets/playerIcons/dva.svg'
import { ReactComponent as Genji } from '../../assets/playerIcons/genji.svg'
import { ReactComponent as Hanzo } from '../../assets/playerIcons/hanzo.svg'
import { ReactComponent as Junkrat } from '../../assets/playerIcons/junkrat.svg'
import { ReactComponent as Lucio } from '../../assets/playerIcons/lucio.svg'
import { ReactComponent as McCree } from '../../assets/playerIcons/mccree.svg'
import { ReactComponent as Mei } from '../../assets/playerIcons/mei.svg'
import { ReactComponent as Mercy } from '../../assets/playerIcons/mercy.svg'
import { ReactComponent as Pharah } from '../../assets/playerIcons/pharah.svg'
import { ReactComponent as Reaper } from '../../assets/playerIcons/reaper.svg'
import { ReactComponent as Reinhardt } from '../../assets/playerIcons/reinhardt.svg'
import { ReactComponent as Roadhog } from '../../assets/playerIcons/roadhog.svg'
import { ReactComponent as Soldier76 } from '../../assets/playerIcons/soldier76.svg'
import { ReactComponent as Symmetra } from '../../assets/playerIcons/symmetra.svg'
import { ReactComponent as Torbjorn } from '../../assets/playerIcons/torbjorn.svg'
import { ReactComponent as Tracer } from '../../assets/playerIcons/tracer.svg'
import { ReactComponent as Widowmaker } from '../../assets/playerIcons/widowmaker.svg'
import { ReactComponent as Winston } from '../../assets/playerIcons/winston.svg'
import { ReactComponent as Zarya } from '../../assets/playerIcons/zarya.svg'
import { ReactComponent as Zenyatta } from '../../assets/playerIcons/zenyatta.svg'
import { ReactComponent as OverwatchLogo } from '../../assets/overwatch.svg'

const heroMap = {
	Ana: OverwatchLogo,
	Ashe: OverwatchLogo,
	Baptiste: OverwatchLogo,
	Bastion,
	Brigitte: OverwatchLogo,
	Doomfist: OverwatchLogo,
	'D__Va': Dva,
	Echo: OverwatchLogo,
	Genji,
	Hanzo,
	Junkrat,
	Lucio,
	McCree,
	Mei,
	Mercy,
	Moira: OverwatchLogo,
	Orisa: OverwatchLogo,
	Pharah,
	Reaper,
	Reinhardt,
	Roadhog,
	Sigma: OverwatchLogo,
	'Soldier_76': Soldier76,
	Sombra: OverwatchLogo,
	Symmetra,
	Torbjorn,
	Tracer,
	Widowmaker,
	Winston,
	'Wrecking_Ball': OverwatchLogo,
	Zarya,
	Zenyatta,
	default: OverwatchLogo,
}

interface Props extends BadgeProps {
	hero?: HeroName | 'default'
}

export const HeroBadge = ({ hero = 'default', ...other }: Props) => {
	const HeroSVG = heroMap[hero]
	return (
		<Badge
			title={replaceUnderscores(hero)}
			{...other}
		>
			<HeroSVG />
		</Badge>
	)
}

