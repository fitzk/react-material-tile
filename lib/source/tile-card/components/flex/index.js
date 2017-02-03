import React from "react"
import MediaQuery from "react-responsive"
import styled, { css } from "styled-components"


/* esfmt-ignore-start */
const flex = css`
  display: flex;
	margin: 5px;
`
const align = ({
	alignCenter,
	alignStart,
	alignEnd,
	alignBaseline,
	alignStretch,
	alignSpaceBetween,
	alignSpaceAround
}) => {
	return alignCenter && "center"||
	alignStart && "flex-start"||
	alignEnd  && "flex-end"||
	alignBaseline  && "baseline"||
	alignStretch && "stretch" ||
	alignSpaceBetween && "space-between" ||
	alignSpaceAround && "space-around" ||
	"center"
}
const justify = ({
	justifyCenter,
	justifyStart,
	justifyEnd,
	justifySpaceBetween,
	justifySpaceAround
}) => {
	return justifyCenter && "center" ||
				 justifyStart && "flex-start" ||
				 justifyEnd &&  "flex-end" ||
				 justifySpaceBetween && "space-between" ||
				 justifySpaceAround && "space-around" ||
				 "center"
};

const orientation = styled.div`
	align-items: ${props => align(props)};
	justify-content: ${props => justify(props)};
	flex-basis: ${props => props.flexBasis || 'auto'}
`
export const Display = styled(orientation)`
  ${flex}
  flex-direction: ${props => props.row && "row" || "column" };
`

export const Row = styled(orientation)`
	${flex}
  flex-direction: row;
`

export const Column = styled(orientation)`
	${flex}
  flex-direction: column;
`/* esfmt-ignore-end */

export const ColumnRow = ({props}) => {
	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Display {...props}>
              { props.children }
            </Display>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Display row
                     {...props}>
              { props.children }
            </Display>
          </MediaQuery>
        </div>
}

export const RowColumn = props => {
	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Display row
                     {...props}>
              { props.children }
            </Display>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Display {...props}>
              { props.children }
            </Display>
          </MediaQuery>
        </div>
}
