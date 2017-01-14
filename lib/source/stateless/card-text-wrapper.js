import React from "react"
import { CardText } from "material-ui"


const CardTextWrapper = props => {
	let visibility = props.expanded ? "" : "hidden"
	return <CardText style={ { visibility } }
                  expandable={ true }>
          <div id={ `child-${props.name}` }
               className={ props.textContainerClassName || "grid" }>
            { props.children }
          </div>
        </CardText>
}

export { CardTextWrapper }

CardTextWrapper.propTypes = {
	name: React.PropTypes.string,
	textContainerClassName: React.PropTypes.string,
	children: React.PropTypes.node
}
