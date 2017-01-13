import React, { PropTypes } from "react"
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
	name: PropTypes.string.isRequired,
	childContainerClassName: PropTypes.string,
	children: PropTypes.node
}
