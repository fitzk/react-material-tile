/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-08-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: wrapper-components.js
* @Last modified by:   kaylafitzsimmons
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import React from "react"
import Card from "material-ui/Card"
import CardText from "material-ui/Card/CardText"
import CardHeader from "material-ui/Card/CardHeader"
import Avatar from "material-ui/Avatar"

export const defaultAvatarStyle = ( backgroundColor, tileHeight, tileWidth, marginRight ) => {
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


export const AvatarWrapper = props => {

  const defaultAvatarStyle = defaultAvatarStyle( props.backgroundColor, props.tileHeight, props.tileWidth, props.marginRight )
  const style = props.avatarStyle ? props.avatarStyle : defaultAvatarStyle

  return <Avatar
           style={ style }
           src={ props.avatarSrc } />
}

export const CardHeaderWrapper = props => {

  const largeAvatar = <AvatarWrapper
                        backgroundColor={ props.backgroundColor || "white" }
                        tileHeight="200px"
                        tileWidth="200px"
                        avatarSrc={ props.avatarSrc } />

  const smallAvatar = <AvatarWrapper
                        backgroundColor={ props.backgroundColor || "white" }
                        tileHeight="40px"
                        tileWidth="40px"
                        avatarSrc={ props.avatarSrc } />

  let visibility = props.expanded ? "" : "hidden"
  let a = props.expanded ? smallAvatar : largeAvatar

  return <CardHeader
           className={ props.expanded ? props.headerClassName : "tile-header" }
           titleStyle={ { visibility: visibility } }
           title={ props.title }
           subtitle={ props.subtitle }
           subtitleStyle={ { visibility: visibility } }
           avatar={ a }
           actAsExpander={ true }
           showExpandableButton={ props.expanded } />
}

export const CardTextWrapper = props => {
  return <CardText expandable={ true }>
           <div
             id={ `child-${props.name}` }
             className={ props.childContainerClassName || "grid" }>
             { props.children }
           </div>
         </CardText>
}

export const CardWrapper = props => {
  return <div
           className={ props.containerClassName }
           key={ props.uniqueKey }>
           <Card
             expanded={ props.expanded }
             style={ { order: props.expanded ? 1 : -5 } }
             className={ props.expanded ? props.tileClassName : "tile animated fadeIn" }
             zDepth={ 0 }
             onExpandChange={ props.onExpandChange }
             initiallyExpanded={ props.initiallyExpanded }>
             { props.children }
           </Card>
         </div>
}
