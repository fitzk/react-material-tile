
import React, { PropTypes, Component } from "react"
import { Paper } from "material-ui"
import { Tile } from "source/tile"
import styles from "./../../stylesheets/index.css"
import cn from "classnames"
import styled from "styled-components"



const TileCard = ({expanded, children}) => {
	const Tag = expanded ? "Tile" : "Card"
	return <Tag>
          { children }
        </Tag>
}
