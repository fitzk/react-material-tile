import React, { PropTypes } from "react"
import styled from "styled-components"
import { Card, CardText, CardTile, Avatar } from "material-ui"
import { Image } from "./../styled"

const Title = styled.h1`
color: ${props => props.theme.palette.secondaryTextColor}
`
const CardHeaderWrapper = ({avatar, src, cardHeaderStyle, cardHeaderTitle, avatarWidth, avatarHeight, ...props}) => {
	return <div {...props}
             style={ cardHeaderStyle }>
          { avatar || <Image primary
                             width={ avatarWidth || "5vw" }
                             height={ avatarHeight || "auto" }
                             src={ src } /> }
          <Title>
            { cardHeaderTitle }
          </Title>
        </div>
}

const CardWrapper = ({children, avatar, name, src, cardStyle, cardHeaderStyle, cardHeaderTitleStyle, onClick, margin, tileWidth, tileHeight, ...props}) => {
	return <Card key={ `parent-${name}` }
              {...props}
              style={ cardStyle }
              zDepth={ 0 }>
          <div onClick={ onClick }>
            <CardHeaderWrapper avatar={ avatar }
                               cardHeaderStyle={ cardHeaderStyle }
                               src={ src }
                               {...props}/>
          </div>
          <CardText {...props}>
            { children }
          </CardText>
        </Card>
}

export { CardWrapper as Card }
