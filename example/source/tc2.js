import React, { Component, PropTypes } from "react";
import { Card, CardText, Paper, CardTitle } from "material-ui";
import AppContainer from "react-hot-loader";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logoDos from "./logo2.png";
import TileCard from "react-tilecard"


export class TC2 extends Component {
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
		return <TileCard name="example2"
                   expanded={ this.state.expanded }
                   title="Example 2"
                   subtitle="this is a subtitle"
                   onExpandChange={ this.onExpandChange.bind(this) }
                   order={ 2 }
                   avatarSrc={ logoDos }
                   initiallyExpanded={ true }>
           <p>
             On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded
             by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of
             will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power
             of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain
             circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.
             The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures
             pains to avoid worse pains.
             <br/> - de Finibus Bonorum et Malorum, Cicero in 45 BC
           </p>
         </TileCard>
	}
}
