import React, { PropTypes } from "react"
import styled from "styled-components"
import { Image } from "./../components"

export const Title = styled.div`
	font-size:${props => props.fontSize || (props.noImageInHeader? "14px":"24px")};
	color: ${props => props.theme.palette ? props.theme.palette.secondaryTextColor : "black"};
`
export const Subtitle = styled.div`
	font-size:${props => props.fontSize || "14px"};
	color: ${props => props.theme.palette ? props.theme.palette.secondaryTextColor : "black"};
`

const AvatarWrapper = styled.div`
	margin-right: 16px;
`
const HeaderWrapper = styled.div`
	height: 72px;
	display: flex;
	padding: 16px;
	${props => props.noImageInHeader && "padding-top: 24px;"};
	flex-direction: row;
	flex-grow: 0;
`
const TitleWrapper = styled.div`
	height: 40px;
	${props => props.subtitle === false && "padding-top: 16px"};
	display: flex;
	flex-direction: column;
	flex-grow: 0;
`

const HeaderAvatar = ({avatarWidth, avatarHeight, src}) => {
	return <AvatarWrapper>
          <Image width={ avatarWidth || "60px" }
                 height={ avatarHeight || "60px" }
                 src={ src } />
        </AvatarWrapper>
}

const Header = ({onClick, children}) => {
	return <HeaderWrapper onClick={ onClick }>
          { children }
        </HeaderWrapper>
}

const HeaderTitle = ({title, subtitle}) => {
	let _subtitle = <Subtitle>
                   { subtitle }
                 </Subtitle>
	return <TitleWrapper subtitle={ subtitle ? true : false }>
          <Title>
            { title }
          </Title>
          { subtitle && _subtitle }
        </TitleWrapper>
}

HeaderTitle.propTypes = {
	title: PropTypes.string.isRequired
}

const CardHeader = ({src, title, subtitle, onClick, noImageInHeader, ...props}) => {
	return <Header noImageInHeader
                onClick={ onClick }>
          { noImageInHeader || <HeaderAvatar src={ src } /> }
          <HeaderTitle title={ title }
                       subtitle={ subtitle } />
        </Header>
}
export { CardHeader }
