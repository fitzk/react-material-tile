import React, { PropTypes } from "react"
import styled from "styled-components"
import { Card, CardText, CardTile, Avatar } from "material-ui"
import { Image } from "./../styled"


const CardHeader = ({avatar, src, style, title, subtitle, avatarWidth, avatarHeight, onClick, ...props}) => {
	return <Wrapper row
                 onClick={ onClick }
                 style={ style }>
          <Wrapper column
                   width="auto">
            { avatar || <Image primary
                               width={ avatarWidth || "10vw" }
                               height={ avatarHeight || "auto" }
                               src={ src } /> }
          </Wrapper>
          <Wrapper column>
            <Title>
              { title }
            </Title>
            <Subtitle>
              { subtitle }
            </Subtitle>
          </Wrapper>
        </Wrapper>
}

const CardWrapper = ({children, avatar, name, src, cardStyle, cardHeaderStyle, cardHeaderTitleStyle, onClick, margin, tileWidth, tileHeight, ...props}) => {
	return <Card key={ `parent-${name}` }
              {...props}
              style={ cardStyle }
              zDepth={ 0 }>
          <CardHeader avatar={ avatar }
                      onClick={ onClick }
                      style={ cardHeaderStyle }
                      src={ src }
                      {...props}/>
          <CardText {...props}>
            { children }
          </CardText>
        </Card>
}

export { CardWrapper as Card }
