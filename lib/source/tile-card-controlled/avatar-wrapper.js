import React, { PropTypes } from "react"
import { Avatar } from "material-ui"

const _defaultAvatarStyle = (backgroundColor, tileHeight, tileWidth, marginRight, marginLeft, margin) => {
	return {
		padding: 0,
		margin: margin,
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

	const defaultAvatarStyle = _defaultAvatarStyle(props.backgroundColor, props.tileHeight, props.tileWidth, props.marginRight, props.marginLeft, props.margin)
	const style = props.avatarStyle ? props.avatarStyle : defaultAvatarStyle

	return <Avatar style={ style }
                src={ props.avatarSrc } />
}

export { AvatarWrapper }

AvatarWrapper.propTypes = {
	avatarSrc: PropTypes.node.isRequired,
	backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	tileHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	tileWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	avatarStyle: PropTypes.any
}
