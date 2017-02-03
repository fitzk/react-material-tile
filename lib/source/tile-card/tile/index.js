import React, { PropTypes } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Image, Container, SVG } from "./../styled"

const Tile = ({primary, margin, tileHeight, tileWidth, src, onClick, ...props}) => {

	return <div onClick={ onClick }>
          <Image primary
                 margin="10px"
                 height={ tileHeight }
                 width={ tileWidth }
                 src={ src } />
        </div>

}

export { Tile }
