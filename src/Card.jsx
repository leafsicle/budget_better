import React, { Component } from 'react'

class Card extends Component {
	render() {
		return (
			<div>
				<div className="">
					<a href={this.props.urlLink}>
						<div className="box">
							<h1 className="title">{this.props.cardName}</h1>
						</div>
					</a>
				</div>
			</div>
		)
	}
}

export default Card
