import React, {FC} from 'react';
import classnames from 'classnames';

interface ITextInputProps {
	id: string,
	name: string,
	isValid: boolean,
	value: string,
	onChange: (value: string) => void
}

const TextInput: FC<ITextInputProps> = ({id, name, isValid, value, onChange}: ITextInputProps) => (
	<input
		id={id}
		name={name}
		type="text"
		value={value}
		onChange={({target}) => onChange(target.value)}
		className={classnames('form-control', {'is-invalid': !isValid})}
	/>
);

export default TextInput;
