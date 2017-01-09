import React, { Component } from "react"
import Stateless from "./../stateless"
import { browserHistory } from "react-router"
import Scroll from "react-scroll"

export default class Connected extends Component {

  constructor( props ) {
    super( props )
    this.setCardState = this.setCardState.bind( this )
  }

  setCardState() {
    let active = false
    if ( this.props.query.active && this.props.query.active.includes( this.props.queryValue ) ) {
      active = true
    }
    active ? browserHistory.push( `/${this.props.uri}` ) :
      browserHistory.push( `/${this.props.uri}?active=${ this.props.queryValue }` )
  }

  render() {
    const scrollHeight = 0
    let active = false

    if ( this.props.query.active && this.props.query.active.includes( this.props.queryValue ) ) {
      active = true
      Scroll.animateScroll.scrollTo( scrollHeight, {
        duration: 300,
        delay: 2,
        smooth: true
      } )
    }

    let _props = {
      active: active,
      title: this.props.title,
      initiallyactive: false,
      avatar: this.props.avatar,
      onExpandChange: this.setCardState,
      className: "card",
      headerClassName: "header",
      childContainerClassName: this.props.childContainerClassName ? this.props.childContainerClassName : "grid",
      children: this.props.children,
      name: this.props.queryValue,
    }
    return (<Stateless {..._props} />)
  }
}
