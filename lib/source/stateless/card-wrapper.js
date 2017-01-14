/**
 *
 * Copyright © 2015-2016 Kayla Fitzsimmons, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from "react"
import { Card } from "material-ui"

const CardWrapper = props => {
	return <div className={ props.containerClassName }
             key={ props.uniqueKey ? props.uniqueKey : props.name }>
          <Card expanded={ props.expanded }
                expandable={ true }
                style={ { order: props.expanded ? 1 : -5 } }
                className={ props.expanded ? props.tileClassName : "tile animated fadeIn" }
                zDepth={ 0 }
                initiallyExpanded={ props.initiallyExpanded }>
            { props.children }
          </Card>
        </div>
}

export { CardWrapper }

CardWrapper.propTypes = {
	name: React.PropTypes.string.isRequired,
	containerClassName: React.PropTypes.string,
	uniqueKey: React.PropTypes.string.isRequired,
	expanded: React.PropTypes.bool.isRequired,
	onExpandChange: React.PropTypes.func,
	initiallyExpanded: React.PropTypes.bool.isRequired,
	children: React.PropTypes.node.isRequired
}
