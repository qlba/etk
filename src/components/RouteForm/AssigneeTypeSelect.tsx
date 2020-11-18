import React, {FC} from 'react';
import classnames from 'classnames';
import {AssigneeType} from '../../typedefs';

interface IAssigneeTypeSelectProps {
	isValid: boolean,
	value: AssigneeType | 'unselected',
	onChange: (value: AssigneeType | 'unselected') => void
}

const assigeeTypesDisplayNames : Map<AssigneeType, string> = new Map([
	['intern', 'Стажёр'],
	['junior', 'Младший'],
	['middle', 'Средний'],
	['senior', 'Старший'],
	['lead', 'Ведущий']
]);

const AssigneeTypeSelect: FC<IAssigneeTypeSelectProps> = (
	{isValid, value, onChange}: IAssigneeTypeSelectProps
) => (
	<select
		name="assigneeType"
		value={value}
		onChange={({target}) => onChange(target.value as AssigneeType | 'unselected')}
		className={classnames('form-control', 'custom-select', {'is-invalid': !isValid})}
		id="assignee-type-input"
	>
		<option key="unselected" value="unselected" />
		{Array.from(assigeeTypesDisplayNames.keys()).map((assigeeType) => (
			<option key={assigeeType} value={assigeeType}>
				{assigeeTypesDisplayNames.get(assigeeType)}
			</option>
		))}
	</select>
);

export default AssigneeTypeSelect;
