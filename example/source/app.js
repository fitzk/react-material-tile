import React, { Component, PropTypes } from "react";
import { Card, CardText, Paper, CardTitle, AppBar } from "material-ui";
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
             <div style={ { display: "flex", flexDirection: "column", alignItems: "center", margin: "0!important" } }>
               <AppBar/>
               <h2 style={ { padding: '.5em', fontFamily: "Roboto, Sans-serif", alignSelf: "flex-start", margin: "20px" } }>React Tile Card Example</h2>
               <Paper zDepth={ 0 }
                      style={ { width: "70vw", padding: "15px", backgroundColor: "white" } }>
                 <div style={ { display: "flex", flexDirection: "column", alignItems: "flex-start" } }>
                   <TileCardGrid width="60vw"
                                 direction="row"
                                 wrap="no-wrap">
                     <TC1/>
                     <TC2/>
                   </TileCardGrid>
                 </div>
               </Paper>
             </div>
           </MuiThemeProvider>
         </div>
	}
}
