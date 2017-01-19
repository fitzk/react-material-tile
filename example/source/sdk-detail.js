import React from "react"
import "./assets/index.scss"
import TileCard from "react-tilecard"

export const SDKDetail = props => {
	const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

	let square = "100px"
	if (isMobile) {
		square = "400px"
	}

	return <TileCard hideAvatarOnExpand={ false }
                  title={ props.title }
                  initiallyExpanded={ false }
                  avatarSrc={ props.avatarSrc }
                  tileWidth={ square }
                  tileHeight={ square }
                  cardClassName={ isMobile ? "mobile-open-card" : "open-card" }
                  headerClassName="open-card-header"
                  name={ props.name }>
          { props.children }
        </TileCard>

}
