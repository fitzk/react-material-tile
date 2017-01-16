import React from "react"
import { Avatar } from "material-ui"

const _defaultAvatarStyle = (backgroundColor, tileHeight, tileWidth, marginRight, marginLeft) => {
	return {
		padding: "0",
		backgroundColor: backgroundColor || "white",
		position: "relative",
		top: "0",
		right: "0",
		borderRadius: 2,
		marginRight: marginRight,
		marginLeft: marginLeft,
		height: tileHeight,
		width: tileWidth
	}
}

const AvatarWrapper = props => {

	const defaultAvatarStyle = _defaultAvatarStyle(props.backgroundColor, props.tileHeight, props.tileWidth, props.marginRight, props.marginLeft, props.avatarStyle)
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
	marginLeft: React.PropTypes.string,
	avatarStyle: React.PropTypes.any
}
