import React, { Component } from 'react'

class Card extends Component {
	render() {
		return (
			<div className="card">
				<a href={this.props.urlLink}>
					<div className={this.props.className}>
						{/* The className title below indicates a class and not a value. just to remind myself */}
						<h1 className="">{this.props.cardName}</h1>
					</div>
				</a>
			</div>
		)
	}
}

export default Card
