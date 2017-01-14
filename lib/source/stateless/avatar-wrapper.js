import React from "react"
import { Avatar } from "material-ui"

const _defaultAvatarStyle = (backgroundColor, tileHeight, tileWidth, marginRight) => {
	return {
		padding: "0",
		backgroundColor: backgroundColor || "white",
		position: "relative",
		top: "0",
		right: "0",
		borderRadius: 2,
		marginRight: "0",
		height: tileHeight,
		width: tileWidth,
		marginRight: marginRight
	}
}

const AvatarWrapper = props => {

	const defaultAvatarStyle = _defaultAvatarStyle(props.backgroundColor, props.tileHeight, props.tileWidth, props.marginRight)
	const style = props.avatarStyle ? props.avatarStyle : defaultAvatarStyle

	return <Avatar style={ style }
                src={ props.avatarSrc } />
}

export { AvatarWrapper }

AvatarWrapper.propTypes = {
	avatarSrc: React.PropTypes.any.isRequired,
	backgroundColor: React.PropTypes.string,
	tileHeight: React.PropTypes.string,
	tileWidth: React.PropTypes.string,
	marginRight: React.PropTypes.string,
	avatarStyle: React.PropTypes.any
}
