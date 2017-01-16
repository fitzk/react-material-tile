import React, { Component, PropTypes } from "react";
import { Card, CardText, Paper, CardTitle } from "material-ui";
import AppContainer from "react-hot-loader";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from "./logo.png";
import logoDos from "./logo2.png";
import TileCard, { TileCardGrid } from "react-tilecard"

import { TC1 } from "./tc1"
import { TC2 } from "./tc2"


export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false
		}
	}

	onExpandChange() {
		this.setState({
			expanded: !this.state.expanded
		})
	}
	render() {
		const muiTheme = getMuiTheme(darkBaseTheme);
		return <div>
           <MuiThemeProvider muiTheme={ muiTheme }>
             <div style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
               <Paper style={ { width: "90vw" } }>
                 <h2 style={ { padding: '.5em' } }>Tile Card MaterialUI React Component</h2>
                 <TileCardGrid width="80vw"
                               direction="row"
                               wrap="no-wrap">
                   <TC1/>
                   <TC2/>
                   <TC1/>
                 </TileCardGrid>
                 <TileCardGrid width="80vw"
                               direction="row"
                               wrap="no-wrap">
                   <TC1/>
                   <TC2/>
                   <TC1/>
                 </TileCardGrid>
               </Paper>
             </div>
           </MuiThemeProvider>
         </div>
	}
}
