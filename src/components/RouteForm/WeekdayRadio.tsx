import React, {FC} from 'react';
import {Weekday} from '../../typedefs';

const weekdaysDisplayNames: Map<Weekday, string> = new Map([
	['mon', 'Пн'],
	['tue', 'Вт'],
	['wed', 'Ср'],
	['thu', 'Чт'],
	['fri', 'Пт'],
	['sat', 'Сб'],
	['sun', 'Вс']
]);

interface IWeekdayRadioProps {
	value: Weekday,
	onChange: (value: Weekday) => void
}

const WeekdayRadio: FC<IWeekdayRadioProps> = ({value, onChange}: IWeekdayRadioProps) => (
	<div>
		{Array.from(weekdaysDisplayNames.keys()).map((weekday) => (
			<div key={weekday} className="form-check form-check-inline" id="weekdays-input">
				<input
					className="form-check-input radio"
					type="radio"
					name="weekdays"
					id={`${weekday}-radio`}
					checked={weekday === value}
					onChange={() => onChange(weekday)}
				/>
				<label className="form-check-label" htmlFor={`${weekday}-radio`}>
					{weekdaysDisplayNames.get(weekday)}
				</label>
			</div>
		))}
	</div>
);

export default WeekdayRadio;
