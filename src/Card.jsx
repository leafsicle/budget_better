import React, { Component } from 'react'

class Card extends Component {
	render() {
		return (
			<div>
				<div className="column ">
					{/* <a href="./"> */}
					<div className="box is-fullwidth-mobile is-one-quarter-desktop">
						<h1 className="title">{this.props.cardName}</h1>
						{/* <h2 className="subtitle">Surplus/Deficit this month</h2> */}
					</div>
					{/* </a> */}
				</div>
			</div>
		)
	}
}

export default Card
