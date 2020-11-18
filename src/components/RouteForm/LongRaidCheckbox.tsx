import React, {FC} from 'react';

interface ILongRaidCheckboxProps {
	value: boolean,
	onChange: (value: boolean) => void
}

const LongRaidCheckbox: FC<ILongRaidCheckboxProps> = (
	{value, onChange}: ILongRaidCheckboxProps
) => (
	<div className="custom-control custom-checkbox">
		<input
			type="checkbox"
			checked={value}
			onChange={() => onChange(!value)}
			className="custom-control-input"
			id="long-raid-input"
		/>
		<label className="custom-control-label" htmlFor="long-raid-input">Длительный обход</label>
	</div>
);

export default LongRaidCheckbox;
