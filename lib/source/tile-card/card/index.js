import React, { PropTypes } from "react"
import styled from "styled-components"
import { Card, CardHeader, CardText, CardTile, Avatar } from "material-ui"
import { Image } from "./../styled"

const CardHeaderWrapper = ({avatar, src, ...props}) => {
	return <CardHeader {...props}
                    avatar={ avatar || <Image primary
                                              width="5vw"
                                              height="auto"
                                              src={ src } /> } />

}

const CardWrapper = ({children, avatar, name, src, style, ...props}) => {
	return <Card key={ `parent-${name}` }
              {...props}
              style={ style }
              zDepth={ 0 }>
          <CardHeaderWrapper avatar={ avatar }
                             src={ src }
                             {...props}/>
          <CardText {...props}>
            { children }
          </CardText>
        </Card>
}

export { CardWrapper as Card }
