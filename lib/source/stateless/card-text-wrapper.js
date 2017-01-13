import React from "react"
import { string, node } from "react/PropTypes"
import CardText from "material-ui/Card/CardText"


const CardTextWrapper = props => {

	return <CardText expandable={ true }>
          <div id={ `child-${props.name}` }
               className={ props.childContainerClassName || "grid" }>
            { props.children }
          </div>
        </CardText>
}

export default CardTextWrapper

CardTextWrapper.propTypes = {
	name: string.isRequired,
	childContainerClassName: string,
	children: node
}
