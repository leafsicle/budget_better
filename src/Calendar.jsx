import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar-like-google'
import moment from 'moment'

class Calendar extends Component {
	render() {
		return (
			<div>
				{/* Setup the localizer by providing the moment (or globalize) Object */}
				{/* to the correct localizer. */}
				BigCalendar.momentLocalizer(moment); {/* or globalizeLocalizer const */}
				MyCalendar = props => (
				<div>
					<BigCalendar
						events={myEventsList}
						startAccessor="startDate"
						endAccessor="endDate"
					/>
				</div>
				);
			</div>
		)
	}
}

export default Calendar
