import React from "react"
import tile from "./assets/tile.png"
import tilecard from "./assets/1-tile-card.png"
import tilecard2 from "./assets/2-tile-row.png"
import tilecard4 from "./assets/4-card-tile-tile.png"
import { TileCard } from "react-tilecard"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"


const Code = styled.code`
color: black
width: 40vw
`
const Container = styled.div`
width: 70vw
`
export const Overview = props => {
	return <Container>
          <h1>React Tilecard </h1>
          <p>A customizable Tile Component that transforms into a Material UI Card on click.</p>
          <TileCard title="Basic Usage" src={ tile } tileWidth="200px">
            <div className="container">
              <pre>
                                      <Code>
                                      { `<TileCard src={tile} width="200px>\n  <p> content </p>\n</TileCard>` }
                                      </Code>
                                      </pre>
            </div>
          </TileCard>
        </Container>

}
