import React from "react"
import "./assets/index.scss"
import TileCard from "react-tilecard"

export const SDKDetail = props => {
	const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

	let square = "150px"
	let smallSquare = "40px"
	if (isMobile) {
		square = "350px"
		smallSquare = "80px"
	}

	return <TileCard hideAvatarOnExpand={ false }
                  title={ props.title }
                  initiallyExpanded={ false }
                  avatarSrc={ props.avatarSrc }
                  backgroundColor="#F3E5F5"
                  tileWidth={ square }
                  tileHeight={ square }
                  avatarWidth={ smallSquare }
                  avatarHeight={ smallSquare }
                  cardClassName="open-card"
                  headerClassName="open-card-header"
                  name={ props.name }>
          { props.children }
        </TileCard>

}
