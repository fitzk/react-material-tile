import React, { PropTypes } from "react"
import styled, { css } from "styled-components"
import { StyledTitle, StyledSubtitle, ImageInHeader, TitleSubititleContainer, CardWrapper, Container } from "./styled"

const Title = ({ text, noImageInHeader }) => <StyledTitle noImageInHeader> { text } </StyledTitle>

const Subtitle = ({ text }) => text? <StyledSubtitle> { text } </StyledSubtitle> : <span/>

const TitleContainer = ({ title, subtitle }) => {
	return <TitleSubititleContainer subtitle={ true }>
						<Title noImageInHeader text={ title }/>
						<Subtitle text={ subtitle }/>
	       </TitleSubititleContainer>
}

const Header = ({	src, title, subtitle, onClick, noImageInHeader, CustomTitleContainer }) => {
	return <Container { ...{ noImageInHeader,  onClick } }>
          { noImageInHeader || <ImageInHeader src={ src } /> }
         	{ CustomTitleContainer || <TitleContainer { ...{ title, subtitle, noImageInHeader } }  /> }
				</Container>
}


const Card = ({ onClick, title, subtitle, noImageInHeader, src, CustomHeader,  children, ...props }) => {
		return <CardWrapper {...props}>
							<div>
						{ React.cloneElement( CustomHeader, { onClick, title, ...props} )  || <Header { ...{ onClick,  title, subtitle, noImageInHeader, src } }  /> }
						{ children }
							</div>
        	</CardWrapper>
}

export { TitleContainer, Header, Title, Subtitle, Card, TitleSubititleContainer, CardWrapper, ImageInHeader }
