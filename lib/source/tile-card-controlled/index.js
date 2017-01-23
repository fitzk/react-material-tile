
import React, { PropTypes, Component } from "react"
import { Card, CardHeader, CardText } from "material-ui"
import { AvatarWrapper } from "source/tile-card-controlled/avatar-wrapper"
import styles from "./../../stylesheets/index.css"
import cn from "classnames"
import styled from "styled-components"

const TileCardControlled = (props) => {

	let tileHeight = 150
	let tileWidth = 150

	let visible = {
		visibility: 'visible'
	}

	let collapsed = {
		visibility: 'collapse'
	}

	let cardStyle = {
		padding: "0!important",
		height: props.expanded ? "auto" : `${props.tileHeight}!important` || `${tileHeight}px`,
		width: props.expanded ? "auto" : `${props.tileWidth}!important` || `${tileWidth}px`,
		transition: "none",
		margin: "10px"
	}
	let cardHeaderStyle = {
		padding: "0!important",
		margin: props.expanded ? "5px" : 0,
		height: props.expanded ? "auto" : `${props.tileHeight}!important` || `${tileHeight}px`,
		width: props.expanded ? "auto" : `${props.tileWidth}!important` || `${tileWidth}px`
	}

	let visibility = props.expanded ? visible : collapsed

	let avatar = <AvatarWrapper avatarSrc={ props.avatarSrc }
                             backgroundColor={ props.backgroundColor }
                             style={ props.hideAvatarOnExpand ? collapsed : visible }
                             tileHeight={ props.expanded ? props.avatarHeight || "50px" : props.tileHeight || `${tileHeight}px` }
                             tileWidth={ props.expanded ? props.avatarWidth || "50px" : props.tileWidth || `${tileWidth}px` }
                             marginRight={ props.expanded ? "15px" : "0" }
                             margin={ props.expanded ? "5px" : "0" } />
	return <Card expanded={ props.expanded }
              key={ `parent-${props.name}` }
              style={ cardStyle }
              className={ props.expanded ? cn(props.cardClassName, styles.card) : styles.tile }
              zDepth={ 0 }
              onExpandChange={ props.onExpandChange }
              initiallyExpanded={ props.initiallyExpanded }>
          <CardHeader className={ props.expanded ? props.headerClassName : styles.tileHeader }
                      style={ cardHeaderStyle }
                      titleStyle={ visibility }
                      subtitleStyle={ visibility }
                      title={ props.title }
                      subtitle={ props.subtitle }
                      avatar={ avatar }
                      actAsExpander={ true } />
          <CardText expandable={ true }>
            <div className={ `child-${props.name}` }>
              { props.children }
            </div>
          </CardText>
        </Card>

}
export { TileCardControlled }

TileCardControlled.propTypes = {
	expanded: PropTypes.bool.isRequired,
	hideAvatarOnExpand: PropTypes.bool,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	initiallyExpanded: PropTypes.bool,
	avatarSrc: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
	onExpandChange: PropTypes.func,
	cardClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	headerClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	tileWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	tileHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	avatarWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	avatarHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	name: PropTypes.string
}
