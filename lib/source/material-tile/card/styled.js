import React, { PropTypes } from "react"
import styled, { css } from "styled-components"
import { fade } from "material-ui/utils/colorManipulator";

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

const transitions = {
	easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'
 }


const textColor = (props) => css`
	${ props => props.theme.palette ? `color: ${ props.theme.palette.textColor };` : "color: black;" }
`;

const canvasColor = (props) => css`
	${ props => props.theme.palette ? `background-color: ${ props.theme.palette.canvasColor };` : "color: white;" }
`;

const Paper = styled.div`
	border: 2px solid black;
	${ props => textColor(props) }
	${ props => canvasColor(props)}
	transition: ${transitions.easeOutFunction};
	box-sizing: border-box;
	font-family: Roboto, sans-serif;
	border-radius: ${ props => props.circle ? '50%' : props.rounded ? '2px' : '0px'};
`;


const secondaryTextColor = (props) => css`
	${ props => props.theme.palette ? `color: ${ props.theme.palette.secondaryTextColor };` : "color: black;" }
`;

export const CardWrapper = styled(Paper)`
	width: 50vw;
	height: 50vh;
`;

export const ImageInHeader = styled.img`
	height: 60px;
	width: 60px;
	margin-right: 16px;
`;

export const StyledTitle = styled.div`
	font-family: Roboto, sans-serif;
	font-weight: 500;
	font-size: ${ props => props.noImageInHeader?  "24px" : "14px" };
	${ props => secondaryTextColor(props) }
`;

export const StyledSubtitle = styled.div`
	font-size: 14px;
	${ props => secondaryTextColor(props) }
`;

export const Container = styled.div`
	height: 72px;
	display: flex;
	padding: 16px;
	${ props => props.noImageInHeader && "padding-top: 24px;" }
	flex-direction: row;
	flex-grow: 0;
`;

export const TitleSubititleContainer = styled.div`
	height: 40px;
	${ props => props.subtitle === false && "padding-top: 16px" }
	display: flex;
	flex-direction: column;
	flex-grow: 0;
`;
