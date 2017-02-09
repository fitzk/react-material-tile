import "jsdom-global/register";
import React, { Component, PropTypes } from "./../node_modules/react"
import { test } from "ava"

import styled from "styled-components"
import { mount, shallow } from "enzyme"

import getMuiTheme from "material-ui/styles/getMuiTheme"
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"

import { Card } from "./dist/card"
import { getStyleProps } from "./utils"

// // trivial
// test("Card defaults to { width: "50vw", height: "50vh" }", t => {
// 	const muiTheme = getMuiTheme(darkBaseTheme);
// 	const wrapper = shallow(<Card title="Tile Card"
// 											              subtitle="a component"
// 											              tileHeight="200px"
// 											              tileWidth="200px"
// 											              name="card">
// 													<div/>
// 												</Card>, {  muiTheme: muiTheme });
// 		let cardStyle = getStyleProps(wrapper);
// 		let style = { width: "50vw", height: "50vh" };
// 		t.deepEqual(cardStyle, style)
// });
//
//
// test("Card: { width: "50vw", height: "300px" }", t => {
// 	const muiTheme = getMuiTheme(darkBaseTheme);
// 	const wrapper = shallow(<Card title="Tile Card"
// 											              subtitle="a component"
// 											              tileHeight="200px"
// 											              tileWidth="200px"
// 																		cardHeight="300px"
// 											              name="card">
// 													<div/>
// 												</Card>, {  muiTheme: muiTheme });
// 		let cardStyle = getStyleProps(wrapper);
// 		let style = { width: "50vw", height: "300px" };
// 		t.deepEqual(cardStyle, style)
// });
//
// test("Card: { width: "300px", height: "50vh" }", t => {
// 	const muiTheme = getMuiTheme(darkBaseTheme);
// 	const wrapper = shallow(<Card title="Tile Card"
// 											              subtitle="a component"
// 											              tileHeight="200px"
// 											              tileWidth="200px"
// 																		cardWidth="300px"
// 											              name="card">
// 													<div/>
// 												</Card>, {  muiTheme: muiTheme });
// 		let cardStyle = getStyleProps(wrapper);
// 		let style = { width: "300px", height: "50vh" };
// 		t.deepEqual(cardStyle, style)
// });

test("Card style", t => {
	const muiTheme = getMuiTheme(darkBaseTheme);
	const wrapper = shallow(<Card title="Tile Card"
											              subtitle="a component"
											              tileHeight="200px"
											              tileWidth="200px"
																		cardStyle={{ height: "400px"}}
											              name="card">
													<div/>
												</Card>, {  muiTheme: muiTheme });
		let cardStyle = getStyleProps(wrapper);
		let style = { width: "50vw", height: "400px" };
		t.deepEqual(cardStyle, style)
});
