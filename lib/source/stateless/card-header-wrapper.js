import React from "react"
import { AvatarWrapper } from "./avatar-wrapper"
import { CardHeader } from "material-ui"

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
	let currentAvatar = props.expanded ? avatar : tile

	return <CardHeader className={ props.expanded ? props.headerClassName : "tile-header" }
                    titleStyle={ { visibility: visibility } }
                    title={ props.title }
                    subtitle={ props.subtitle }
                    subtitleStyle={ { visibility: visibility } }
                    avatar={ currentAvatar }
                    actAsExpander={ true }
                    showExpandableButton={ props.expanded } />
}

export { CardHeaderWrapper }

CardHeaderWrapper.propTypes = {
	backgroundColor: React.PropTypes.string,
	headerClassName: React.PropTypes.string,

	tileHeight: React.PropTypes.string,
	tileWidth: React.PropTypes.string,

	avatarHeight: React.PropTypes.string,
	avatarWidth: React.PropTypes.string,

	expanded: React.PropTypes.bool
}
