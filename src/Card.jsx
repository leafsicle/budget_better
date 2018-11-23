import React, { Component } from 'react'

class Card extends Component {
	render() {
		return (
			<div>
				<div className="">
					<a href={this.props.urlLink}>
						<div className="box">
							{/* The className title below indicates a class and not a value. just to remind myself */}
							<h1 className="title">{this.props.cardName}</h1>
						</div>
					</a>
				</div>
			</div>
		)
	}
}

export default Card
