import React from "react"
import { Paper } from "material-ui"

import python from "./assets/python.png"
import java from "./assets/java.png"
import js from "./assets/js.png"
import android from "./assets/android.png"
import { TileCardGrid } from "react-tilecard"
import { Overview } from "./overview"

import styled from "styled-components"

const Code = styled.code`
color: black
width: 60vw
`
const Div = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
`
export const Docs = props => {

	const mobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
	let gridWidth = mobile ? "auto" : "auto"
	let wrap = mobile ? "wrap-reverse" : "wrap"
	let justification = mobile ? "center" : "space-around"

	return (<div className={ mobile ? "mobile" : "standard" }>
           <Div>
             <TileCardGrid direction="row" wrap={ wrap } width={ gridWidth } alignment="center" justification={ justification } height="auto">
               <Overview/>
             </TileCardGrid>
           </Div>
         </div>)
}
