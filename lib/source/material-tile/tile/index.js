import React from "react"
import styled from "styled-components"

const TileContainer = styled.div`
	margin: 8px;
`;

const TileImage = styled.img`
	width: ${ props => props.width || "200px;"};
	height: ${ props => props.height || "200px"};
	border-radius: ${ props => props.circle ? '50%' : props.rounded ? '2px' : '0px'};
`;

const Tile = ({ tileHeight, tileWidth, tileStyle, src, onClick }) => {
	return <TileContainer onClick={ onClick }>
          <TileImage height={ tileHeight } width={ tileWidth } src={ src } />
        </TileContainer>
}

export { Tile }
