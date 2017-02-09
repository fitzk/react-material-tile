import React, { PropTypes } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Image } from "./../components"

const Tile = ({ primary, margin, tileHeight, tileWidth, tileStyle, src, onClick, ...props }) => {

	return <div onClick={ onClick } style={tileStyle}>
          <Image primary
                 height={ tileHeight }
                 width={ tileWidth }
                 src={ src } />
        </div>
}

export { Tile }
