import React from 'react'
import Calendar from 'react-calendar'

export default function Cal() {
	const [value, onChange] = React.useState(new Date())

	return <Calendar onChange={onChange} showWeekNumbers value={value} />
}
