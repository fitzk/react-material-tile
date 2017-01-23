import React, { PropTypes } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Image, Container, SVG } from "./../styled"

const Tile = props => {
	return <Container margin={ props.margin }
                   height={ props.height }
                   width={ props.width }>
          <Image primary
                 height={ props.height }
                 width={ props.width }
                 src={ props.src } />
        </Container>
}

export { Tile }
