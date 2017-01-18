import React from "react"
import "./assets/index.scss"
import TileCard from "react-tilecard"

export const SDKDetail = props => {

	return <TileCard hideAvatarOnExpand={ false }
                  title={ props.title }
                  initiallyExpanded={ false }
                  avatarSrc={ props.avatarSrc }
                  tileHeight="auto"
                  tileWidth="15vw"
                  cardClassName="open-card"
                  headerClassName="open-card-header"
                  name={ props.name }>
          { props.children }
        </TileCard>

}
