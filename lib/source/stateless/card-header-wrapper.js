import CardHeader from "material-ui/Card/CardHeader"
import React from "react"
import { string, func, bool } from "react/PropTypes"
import AvatarWrapper from "./avatar-wrapper"

const CardHeaderWrapper = props => {

	const tile = <AvatarWrapper backgroundColor={ props.backgroundColor || "white" }
                             tileHeight={ props.tileHeight ? props.tileHeight : "200px" }
                             tileWidth={ props.tileWidth ? props.tileWidth : "200px" }
                             avatarSrc={ props.avatarSrc } />

	const avatar = <AvatarWrapper backgroundColor={ props.backgroundColor || "white" }
                               tileHeight={ props.avatarHeight ? props.avatarHeight : "40px" }
                               tileWidth={ props.avatarAvatar ? props.avatarAvatar : "40px" }
                               avatarSrc={ props.avatarSrc } />

	let visibility = props.expanded ? "" : "hidden"
	let a = props.expanded ? avatar : tile

	return <CardHeader className={ props.expanded ? props.headerClassName : "tile-header" }
                    titleStyle={ { visibility: visibility } }
                    title={ props.title }
                    subtitle={ props.subtitle }
                    subtitleStyle={ { visibility: visibility } }
                    avatar={ a }
                    actAsExpander={ true }
                    showExpandableButton={ props.expanded } />
}

export default CardHeaderWrapper

CardHeaderWrapper.propTypes = {
	backgroundColor: string,
	headerClassName: string,

	tileHeight: string,
	tileWidth: string,

	avatarHeight: string,
	avatarWidth: string,

	expanded: bool.isRequired,
}
