import React from "react"
import TileCard from "react-tilecard"

export const SDKDetail = props => {
	const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

	let square = "150px"
	if (isMobile) {
		square = "360px"
	}

	return <TileCard title={ props.title }
                  avatarSrc={ props.avatarSrc }
                  height={ square }
                  width={ square }
                  name={ props.name }>
          { props.children }
        </TileCard>

}
